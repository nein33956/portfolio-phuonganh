import { Link } from "react-router-dom";
import { SITE } from "../data/projects";

const links = [
  { to: "/", label: "Giới thiệu" },
  { to: "/du-an", label: "Dự án" },
  { to: "/tong-ket", label: "Tổng kết" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-brand-200">
      <div className="container-x py-14 text-center">
        <span className="mx-auto grid h-11 w-11 place-items-center rounded-full border border-brand-400 font-display text-xl font-semibold italic text-brand-700">
          P
        </span>
        <h3 className="mt-4 font-display text-2xl font-semibold text-ink">Portfolio AI và Công nghệ số</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
          Hành trình rèn luyện AI và công nghệ số của sinh viên ngành Y Khoa — tuyển tập 6 dự án thực hành,
          hướng tới sử dụng công nghệ &amp; AI một cách hiệu quả và có trách nhiệm.
        </p>

        <ul className="mt-7 flex flex-wrap justify-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-brand-700"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="rule mx-auto mt-9 w-24" />
        <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
          © {SITE.year} {SITE.fullName} · {SITE.major}
        </p>
      </div>
    </footer>
  );
}
