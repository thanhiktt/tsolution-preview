import Image from "next/image";
import Link from "next/link";
import { Zap, ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Technology Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* dark gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c10]/80 via-[#0b0c10]/70 to-[#0b0c10]" />
        <div className="absolute inset-0 bg-[#0b0c10]/40" />
      </div>

      {/* Pulsing glow blobs */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-[var(--primary)]/20 rounded-full blur-[60px] md:blur-[140px] animate-[pulse_4s_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-slate-500/10 rounded-full blur-[80px] md:blur-[140px] animate-[pulse_6s_infinite]" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center animate-fade-up">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-6 backdrop-blur-sm">
          <Zap className="w-4 h-4" />
          Hỗ Trợ Kỹ Thuật 24/7 - Có Mặt Sau 30 - 60 Phút
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-white leading-tight">
          <span className="block text-slate-200 font-bold mb-2 text-2xl md:text-4xl">
            Giải Pháp &amp; Thi Công Trọn Gói:
          </span>
          <span className="block text-gradient uppercase font-extrabold tracking-wide mb-1">
            Camera - Wifi - IT Support
          </span>
          <span className="block text-gradient uppercase font-extrabold tracking-wide">
            &amp; Bản Quyền Phần Mềm
          </span>
        </h1>

        <p className="text-[var(--color-titanium)] max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-10">
          Dịch vụ trọn gói cho SME &amp; Hộ kinh doanh: Lắp đặt nhanh gọn – Vận
          hành ổn định – Hỗ trợ từ xa 24/7.
        </p>

        <Link
          href="#services"
          className="group inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-black font-bold text-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] ring-1 ring-white/20 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Khám Phá Ngay
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce-slow">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
}
