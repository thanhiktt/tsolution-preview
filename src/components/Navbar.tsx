"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";
import { NAV_ITEMS } from "@/lib/site-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md border-white/10 py-4 shadow-lg"
          : "bg-transparent border-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo variant="nav" />

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-[var(--primary)] transition-colors py-2">
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="rounded-xl border border-white/10 bg-slate-900/95 backdrop-blur-md p-2 shadow-xl">
                    {item.dropdown.map((d) => (
                      <Link
                        key={d.label}
                        href={d.href}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      >
                        {d.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className="text-sm font-medium text-gray-300 hover:text-[var(--primary)] transition-colors"
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href="#contact"
            className="px-5 py-2 rounded-full bg-[var(--primary)] text-black text-sm font-semibold shadow-lg shadow-[var(--primary)]/30 hover:bg-[var(--accent)] hover:text-white transition-colors"
          >
            Tư Vấn Ngay
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 mx-4 rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-md p-6 shadow-xl">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <button
                    className="flex w-full items-center justify-between text-gray-300 hover:text-[var(--primary)] text-lg font-medium"
                    onClick={() =>
                      setOpenGroup((g) => (g === item.label ? null : item.label))
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        openGroup === item.label && "rotate-180",
                      )}
                    />
                  </button>
                  {openGroup === item.label && (
                    <div className="mt-2 flex flex-col gap-2 pl-3">
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.label}
                          href={d.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-gray-400 hover:text-white text-base py-2 text-left"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-300 hover:text-[var(--primary)] text-lg font-medium"
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full mt-4 py-3 rounded-lg bg-[var(--primary)] text-black font-semibold text-center"
            >
              Tư Vấn Ngay
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
