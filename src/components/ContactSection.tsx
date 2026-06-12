import { Send } from "lucide-react";
import { CONTACT_INFO, SERVICE_OPTIONS } from "@/lib/site-data";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* radial amber glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--primary)_0%,_transparent_40%)] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: heading + info cards */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            <span className="text-gradient">Kết Nối</span> Với Chúng Tôi
          </h2>
          <p className="text-[var(--color-titanium)] text-lg mb-10 max-w-lg">
            Liên hệ với chúng tôi để được tư vấn giải pháp CNTT tối ưu nhất. Đội
            ngũ kỹ thuật viên 24/7 luôn sẵn sàng hỗ trợ.
          </p>

          <div className="space-y-8">
            {CONTACT_INFO.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="flex items-start gap-5 group">
                  <div className="p-4 rounded-full bg-[var(--surface-highlight)] border border-[var(--border)] transition-colors group-hover:border-[var(--primary)]">
                    <Icon className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {info.title}
                    </h3>
                    <p className="text-xl text-[var(--color-titanium)]">
                      {info.value}
                    </p>
                    {info.sub && (
                      <p className="text-sm text-gray-400 mt-1">{info.sub}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: form */}
        <div className="glass-card p-8 md:p-10 relative">
          <h3 className="text-2xl font-bold text-white mb-6">Gửi Yêu Cầu Tư Vấn</h3>
          <form className="space-y-6">
            <Field label="Họ & Tên">
              <input
                type="text"
                placeholder="Nguyễn Văn A"
                className={inputClass}
              />
            </Field>
            <Field label="Số Điện Thoại">
              <input type="tel" placeholder="0912..." className={inputClass} />
            </Field>
            <Field label="Email (Nếu có)">
              <input
                type="email"
                placeholder="example@gmail.com"
                className={inputClass}
              />
            </Field>
            <Field label="Dịch Vụ Quan Tâm">
              <select className={inputClass} defaultValue={SERVICE_OPTIONS[0]}>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </Field>
            <Field label="Nội Dung Yêu Cầu">
              <textarea
                rows={4}
                placeholder="Mô tả nhu cầu của bạn..."
                className={`${inputClass} resize-none`}
              />
            </Field>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-black font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[var(--primary)]/30 hover:shadow-[var(--primary)]/50 transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              Gửi Yêu Cầu
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-[var(--primary)] focus-visible:ring-2 focus-visible:ring-[var(--primary)]/50 transition-colors";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-400 mb-2 block">
        {label}
      </span>
      {children}
    </label>
  );
}
