import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Aurora from "../components/Aurora";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
import { getIcon } from "../lib/icons";

export default function Projects() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden pt-32 pb-10 sm:pt-40">
        <Aurora />
        <div className="container-x text-center">
          <Reveal>
            <span className="kicker">Trang Dự án</span>
            <h1 className="mt-3 font-display text-6xl font-semibold leading-tight text-ink sm:text-7xl">
              Tuyển tập <span className="gradient-text">sáu dự án</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
              Mỗi dự án trình bày đầy đủ: mục tiêu, yêu cầu đề bài, minh chứng đã nộp và phần trích
              nguồn AI minh bạch.
            </p>
            <div className="rule mx-auto mt-6 w-24" />
          </Reveal>
        </div>
      </section>

      {/* Catalog list */}
      <section className="pb-16">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p, i) => {
              const Icon = getIcon(p.icon);
              return (
                <Reveal key={p.id} delay={(i % 2) * 0.08}>
                  <Link
                    to={`/du-an/${p.slug}`}
                    className="group block border border-brand-300 bg-white p-2 transition-all hover:-translate-y-1 hover:border-brand-400 hover:shadow-card"
                  >
                    {/* khung tranh: viền trong */}
                    <div className="relative flex h-full flex-col overflow-hidden border border-brand-100 p-8">
                      <span className="pointer-events-none absolute -right-2 -top-5 font-display text-[7rem] font-semibold italic leading-none text-brand-200 transition-colors group-hover:text-brand-300">
                        {String(p.id).padStart(2, "0")}
                      </span>
                      <div className="relative flex items-center justify-between">
                        <span className="grid h-12 w-12 place-items-center rounded-full border border-brand-300 text-brand-600 transition-colors group-hover:border-forest-700 group-hover:text-forest-700">
                          <Icon className="h-5 w-5" />
                        </span>
                        <ArrowUpRight className="h-5 w-5 text-brand-300 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-forest-700" />
                      </div>
                      <span className="relative mt-6 text-[10px] uppercase tracking-[0.2em] text-brand-600">
                        {p.task}
                      </span>
                      <h3 className="relative mt-1 font-display text-3xl font-semibold text-ink">{p.title}</h3>
                      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{p.short}</p>
                      <div className="relative mt-5 flex flex-wrap gap-x-4 gap-y-1 border-t border-brand-100 pt-4">
                        {p.tools.slice(0, 3).map((t) => (
                          <span key={t} className="text-[11px] uppercase tracking-[0.12em] text-ink-muted">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
