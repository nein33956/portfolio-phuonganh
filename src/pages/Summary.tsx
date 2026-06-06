import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";

const skills = [
  { name: "Quản lý tệp & thư mục", level: "Tốt" },
  { name: "Tìm kiếm & đánh giá thông tin", level: "Khá" },
  { name: "Viết prompt & ứng dụng AI", level: "Tốt" },
  { name: "Hợp tác trực tuyến", level: "Tốt" },
  { name: "Sáng tạo nội dung số", level: "Khá" },
  { name: "An toàn & liêm chính học thuật", level: "Tốt" },
];

const tamDac = [
  "Tự xây dựng được một sản phẩm số hoàn chỉnh — chính là website Portfolio này.",
  "Biết viết prompt hiệu quả, biến AI thành “trợ lý học tập” thực sự.",
  "Hiểu sâu hơn về liêm chính học thuật và đạo đức số.",
];
const thachThuc = [
  "Phân biệt nguồn tin đáng tin cậy giữa “biển” thông tin trên mạng.",
  "Cân bằng giữa tận dụng AI và giữ tính trung thực, tự chủ.",
  "Sắp xếp thời gian để hoàn thiện đầy đủ cả sáu nhiệm vụ.",
];

export default function Summary() {
  return (
    <>
      <section className="pt-32 pb-8 sm:pt-40">
        <div className="container-x text-center">
          <Reveal>
            <span className="kicker">Tổng kết</span>
            <h1 className="mt-3 font-display text-6xl font-semibold leading-tight text-ink sm:text-7xl">
              Nhìn lại <span className="gradient-text">hành trình</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
              Trải nghiệm, kiến thức và những điều đọng lại sau sáu dự án năng lực số.
            </p>
            <div className="rule mx-auto mt-6 w-24" />
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            {/* 01 — Lời kết */}
            <Reveal>
              <Head no="01" title="Lời kết" />
            </Reveal>
            <Reveal>
              <p className="text-lg leading-relaxed text-ink-soft first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-7xl first-letter:font-semibold first-letter:italic first-letter:leading-[0.8] first-letter:text-brand-600">
                Khi bắt đầu môn học, tôi từng nghĩ “năng lực số” chỉ là biết dùng máy tính. Nhưng đi
                hết sáu dự án, tôi nhận ra đó là cả một phong cách làm việc trong môi trường số — tỉ
                mỉ, có hệ thống và có trách nhiệm.
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Là người yêu nghệ thuật và kĩ tính, tôi đặc biệt thích công đoạn trau chuốt từng sản
                phẩm số. Thử thách lớn nhất là rèn thói quen kiểm chứng nguồn và trình bày mọi thứ
                một cách chỉn chu, minh bạch.
              </p>
            </Reveal>

            {/* 02 — Điều đọng lại */}
            <div className="mt-12">
              <Reveal>
                <Head no="02" title="Điều đọng lại" sub="Sáu năng lực cốt lõi" />
              </Reveal>
              <ul className="border-t border-brand-100">
                {projects.map((p) => (
                  <Reveal key={p.id}>
                    <li className="border-b border-brand-100 py-4">
                      <h3 className="font-display text-xl font-semibold text-ink">{p.title}</h3>
                      <p className="mt-0.5 text-sm text-ink-muted">{p.short}</p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            {/* 03 — Tâm đắc & Thách thức */}
            <div className="mt-12">
              <Reveal>
                <Head no="03" title="Tâm đắc & Thách thức" />
              </Reveal>
              <div className="grid gap-5 sm:grid-cols-2">
                <Reveal>
                  <div className="h-full border border-brand-200 bg-white p-6 shadow-soft">
                    <h3 className="font-display text-xl font-semibold italic text-brand-700">
                      Điều tôi tâm đắc
                    </h3>
                    <div className="rule mt-3 w-12" />
                    <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                      {tamDac.map((t, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-brand-500">◆</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="h-full border border-forest-700/40 bg-forest-50/60 p-6 shadow-soft">
                    <h3 className="font-display text-xl font-semibold italic text-forest-800">
                      Thách thức đã vượt qua
                    </h3>
                    <div className="mt-3 h-px w-12 bg-forest-700/50" />
                    <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                      {thachThuc.map((t, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-forest-600">◆</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* 04 — Tự đánh giá */}
            <div className="mt-12">
              <Reveal>
                <Head no="04" title="Tự đánh giá bản thân" />
              </Reveal>
              <div className="border-t border-brand-200">
                {skills.map((s) => (
                  <Reveal key={s.name}>
                    <div className="flex items-center justify-between border-b border-brand-100 py-3.5">
                      <span className="text-sm text-ink-soft">{s.name}</span>
                      <span
                        className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${
                          s.level === "Tốt" ? "text-brand-700" : "text-ink-muted"
                        }`}
                      >
                        {s.level}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal>
                <p className="mt-6 border-l-2 border-brand-400 pl-5 text-sm leading-relaxed text-ink-soft">
                  <b className="text-ink">Định hướng tiếp theo:</b> tôi sẽ tiếp tục rèn kỹ năng đánh
                  giá nguồn và sáng tạo nội dung số, đồng thời ứng dụng năng lực số vào việc học ngành
                  Y Khoa — tra cứu tài liệu, phác đồ điều trị và hỗ trợ nghiên cứu một cách hiệu quả,
                  có trách nhiệm.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 text-center">
              <Link to="/du-an" className="btn-primary">
                <ArrowLeft className="h-4 w-4" /> Xem lại 6 dự án
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Head({ no, title, sub }: { no: string; title: string; sub?: string }) {
  return (
    <div className="mb-8">
      <div className="flex items-baseline gap-3">
        <span className="font-display text-2xl font-semibold italic text-brand-400">{no}</span>
        <h2 className="font-display text-4xl font-semibold text-ink">{title}</h2>
      </div>
      {sub && <p className="kicker mt-1">{sub}</p>}
      <div className="rule mt-4" />
    </div>
  );
}
