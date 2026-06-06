import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Target, Rocket } from "lucide-react";
import Aurora from "../components/Aurora";
import Reveal from "../components/Reveal";
import { projects, SITE } from "../data/projects";
import { getIcon } from "../lib/icons";

const stats = [
  { big: "06", lbl: "Dự án thực hành" },
  { big: "100%", lbl: "Bài đã nộp" },
  { big: "12+", lbl: "Công cụ & AI" },
  { big: "2026", lbl: "Năm hoàn thành" },
];

const goals = [
  {
    icon: Target,
    title: "Mục tiêu học tập",
    body: "Nắm vững AI và công nghệ số nền tảng phục vụ học tập & nghiên cứu y khoa: quản lý tài liệu khoa học, tra cứu thông tin đáng tin cậy, sử dụng AI hiệu quả và có đạo đức.",
  },
  {
    icon: Rocket,
    title: "Định hướng phát triển",
    body: "Trở thành người làm y khoa biết tận dụng công nghệ số: ứng dụng AI hỗ trợ học tập/chẩn đoán, đảm bảo an toàn dữ liệu bệnh nhân và liêm chính học thuật.",
  },
];

const portfolioGoals = [
  "Thể hiện các kỹ năng số đã học qua 6 dự án thực hành cụ thể.",
  "Lưu trữ sản phẩm cá nhân có hệ thống, dễ truy cập & chia sẻ.",
  "Ghi lại quá trình tự học và sự tiến bộ về AI và công nghệ số.",
  "Phản ánh tư duy học thuật: minh bạch nguồn, dùng AI có trách nhiệm.",
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <Aurora />
        <div className="container-x text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <span className="hidden h-px w-12 bg-brand-300 sm:block" />
            <span className="kicker">Portfolio cá nhân · Môn AI và Công nghệ số</span>
            <span className="hidden h-px w-12 bg-brand-300 sm:block" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mx-auto mt-7 max-w-4xl font-display text-6xl font-semibold leading-[1.02] text-ink sm:text-8xl"
          >
            {SITE.fullName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            Sinh viên <span className="font-semibold text-ink">{SITE.major}</span>, yêu cái đẹp và
            sự chỉn chu. Đây là nơi tôi lưu giữ hành trình làm chủ <span className="gradient-text">AI và công nghệ số</span> —
            từ tổ chức dữ liệu, khai thác thông tin học thuật đến ứng dụng AI một cách tinh tế và có
            trách nhiệm.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.19 }}
            className="mt-9 flex flex-wrap justify-center gap-3"
          >
            <Link to="/du-an" className="btn-primary">Khám phá 6 dự án</Link>
            <Link to="/tong-ket" className="btn-outline">Tổng kết hành trình</Link>
          </motion.div>

          {/* Stats — hàng serif có kẻ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-16 grid max-w-3xl grid-cols-2 border-y border-brand-200 sm:grid-cols-4 sm:divide-x sm:divide-brand-100"
          >
            {stats.map((s) => (
              <div key={s.lbl} className="px-4 py-7">
                <div className="font-display text-4xl font-semibold text-brand-700">{s.big}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                  {s.lbl}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== GIỚI THIỆU ===== */}
      <section className="py-16">
        <div className="container-x">
          <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Thẻ hồ sơ */}
            <Reveal>
              <div className="border border-brand-200 bg-white p-8 text-center shadow-soft">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-brand-300 font-display text-4xl font-semibold italic text-brand-700">
                  {initials(SITE.fullName)}
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{SITE.fullName}</h3>
                <p className="mt-1 text-sm text-ink-muted">{SITE.major}</p>
                <div className="rule mx-auto my-5 w-16" />
                <div className="space-y-3 text-left text-sm text-ink-soft">
                  <Fact label="Trường" value={SITE.school} />
                  <Fact label="Sở thích" value={SITE.hobbies} />
                </div>
              </div>
            </Reveal>

            {/* Bio + goals */}
            <Reveal delay={0.1}>
              <span className="kicker">Về tôi</span>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Đôi dòng giới thiệu
              </h2>
              <p className="mt-5 leading-relaxed text-ink-soft">
                Tôi là {SITE.fullName}, sinh viên {SITE.major}. Là người tỉ mỉ và yêu nghệ thuật,
                với tôi môn AI và Công nghệ số là dịp để rèn một phong cách làm việc số chỉn chu: gọn gàng,
                chính xác và có trách nhiệm.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {goals.map((g, i) => (
                  <div key={g.title} className="border border-brand-200 bg-white p-6 shadow-soft">
                    <span className="font-display text-3xl font-semibold italic text-brand-700">
                      0{i + 1}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-semibold text-ink">{g.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{g.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== MỤC TIÊU PORTFOLIO ===== */}
      <section className="py-16">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="kicker">Mục tiêu Portfolio</span>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Vì sao tôi xây <span className="gradient-text">Portfolio</span> này?
              </h2>
              <p className="mt-5 text-ink-soft">
                Đây là nơi tôi tổng hợp, hệ thống hóa kết quả học tập và thể hiện sự trưởng thành về
                AI và công nghệ số trong suốt môn học.
              </p>
            </div>
            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {portfolioGoals.map((g, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="border-t border-brand-300 pt-4">
                    <span className="font-display text-2xl font-semibold italic text-brand-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{g}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PREVIEW DỰ ÁN ===== */}
      <section className="py-16">
        <div className="container-x">
          <Reveal>
            <SectionHead kicker="Dự án nổi bật" title="Sáu năng lực · Sáu dự án" />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => {
              const Icon = getIcon(p.icon);
              return (
                <Reveal key={p.id} delay={(i % 3) * 0.08}>
                  <Link
                    to={`/du-an/${p.slug}`}
                    className="group relative flex h-full flex-col border border-brand-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-400 hover:shadow-card"
                  >
                    <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand-700 to-brand-500 transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="flex items-start justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-full border border-brand-300 text-brand-600 transition-colors group-hover:border-brand-700 group-hover:text-brand-700">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-display text-4xl font-semibold italic leading-none text-brand-400 transition-colors group-hover:text-brand-600">
                        {String(p.id).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="mt-6 text-[10px] uppercase tracking-[0.18em] text-brand-600">
                      {p.task}
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-semibold text-ink">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{p.short}</p>
                    <span className="mt-5 inline-flex w-fit items-center gap-1.5 border-b border-brand-300 pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700 transition-all group-hover:gap-2.5 group-hover:border-brand-700 group-hover:text-brand-700">
                      Xem chi tiết <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link to="/du-an" className="btn-primary">Xem tất cả dự án <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* ===== Cam kết ===== */}
      <section className="py-16">
        <div className="container-x">
          <Reveal>
            <figure className="mx-auto max-w-3xl rounded-2xl bg-brand-800 px-8 py-12 text-center shadow-card sm:px-12">
              <span className="text-[11px] font-semibold uppercase tracking-luxe text-brand-300">
                Cam kết liêm chính học thuật
              </span>
              <p className="mt-5 font-display text-3xl font-medium italic leading-relaxed text-ivory sm:text-4xl">
                “Toàn bộ Portfolio được thực hiện một cách trung thực. Mọi nội dung tham khảo và công
                cụ AI đều được ghi nguồn rõ ràng ở từng dự án.”
              </p>
              <div className="rule mx-auto mt-6 w-16" />
              <figcaption className="mt-5 font-display text-xl italic text-brand-300">
                — {SITE.fullName}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function initials(name: string) {
  const parts = name.replace(/\[|\]/g, "").trim().split(/\s+/);
  if (parts.length < 2) return (parts[0]?.slice(0, 2) || "PA").toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-[10px] uppercase tracking-[0.16em] text-brand-600">{label}</span>
      <p className="text-ink-soft">{value}</p>
    </div>
  );
}

function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center">
      <span className="kicker">{kicker}</span>
      <h2 className="mt-3 font-display text-5xl font-semibold text-ink sm:text-6xl">{title}</h2>
      <div className="rule mx-auto mt-5 w-24" />
    </div>
  );
}
