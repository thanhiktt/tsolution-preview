import { Send } from "lucide-react";
import { Logo } from "@/components/Logo";
import { FacebookIcon, LinkedinIcon, InstagramIcon } from "@/components/icons";
import {
  FOOTER_COLUMNS,
  FOOTER_BOTTOM_LINKS,
  FOOTER_DESC,
} from "@/lib/site-data";

const SOCIALS = [
  { Icon: FacebookIcon, label: "Facebook" },
  { Icon: LinkedinIcon, label: "LinkedIn" },
  { Icon: InstagramIcon, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-[var(--border)] pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="footer" />
            <p className="mt-5 text-sm text-gray-400 leading-relaxed max-w-xs">
              {FOOTER_DESC}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="p-2 rounded-full bg-slate-900 border border-slate-800 text-gray-400 hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-semibold mb-5">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="inline-block py-1 text-sm text-gray-400 hover:text-[var(--primary)] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-5">Đăng Ký Tin Tức</h3>
            <p className="text-sm text-gray-400 mb-4">
              Nhận thông tin ưu đãi và giải pháp mới nhất.
            </p>
            <div className="flex bg-slate-900 rounded-lg p-1 border border-slate-800 focus-within:border-[var(--primary)] transition-colors">
              <input
                type="email"
                aria-label="Email nhận tin tức"
                placeholder="Email của bạn..."
                className="bg-transparent px-4 py-2 w-full text-white text-sm placeholder:text-gray-400 focus:outline-none"
              />
              <button
                aria-label="Đăng ký nhận tin"
                className="p-2 rounded-md bg-[var(--primary)] text-black hover:bg-[var(--accent)] hover:text-white transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © 2026 T Solution. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {FOOTER_BOTTOM_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="inline-block py-1 text-sm text-gray-400 hover:text-[var(--primary)] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
