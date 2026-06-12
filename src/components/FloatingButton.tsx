import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function FloatingButton() {
  return (
    <Link
      href="#contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-black font-bold rounded-full shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] hover:scale-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      <MessageCircle className="w-[22px] h-[22px]" />
      Tư Vấn Ngay
    </Link>
  );
}
