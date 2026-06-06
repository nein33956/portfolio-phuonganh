import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Giới thiệu", end: true },
  { to: "/du-an", label: "Dự án" },
  { to: "/tong-ket", label: "Tổng kết" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "glass shadow-soft" : "bg-transparent"}`}>
      <div className="container-x">
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-brand-400 font-display text-lg font-semibold italic text-brand-700">
              P
            </span>
            <span className="font-display text-2xl font-semibold tracking-tight text-ink">
              Portfolio <span className="gradient-text">Năng lực số</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    `relative text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-brand-500 after:transition-all ${
                      isActive
                        ? "text-brand-700 after:w-full"
                        : "text-ink-soft hover:text-brand-700 after:w-0 hover:after:w-full"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-brand-50 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Mở menu"
            type="button"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-brand-100 bg-ivory md:hidden"
          >
            <ul className="container-x space-y-1 py-3">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.end}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 text-[11px] font-semibold uppercase tracking-[0.2em] ${
                        isActive ? "text-brand-700" : "text-ink-soft"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
