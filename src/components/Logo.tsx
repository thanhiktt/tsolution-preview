import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** "nav" = larger glassy boxed variant; "footer" = plain variant */
  variant?: "nav" | "footer";
}

export function Logo({ variant = "nav" }: LogoProps) {
  const isNav = variant === "nav";
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-3 group w-fit",
        isNav &&
          "bg-slate-900/30 backdrop-blur-md border border-amber-500/20 rounded-xl px-4 py-2 hover:border-amber-500/40 transition-all duration-300",
      )}
    >
      <div className="relative flex items-center justify-center">
        <span
          className={cn(
            "font-black bg-gradient-to-br from-yellow-100 via-amber-400 to-amber-700 bg-clip-text text-transparent",
            isNav
              ? "text-4xl drop-shadow-[0_0_15px_rgba(245,158,11,0.6)]"
              : "text-3xl drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]",
          )}
        >
          T
        </span>
        <div
          className={cn(
            "absolute -right-1 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse shadow-[0_0_8px_rgba(253,224,71,0.8)]",
            isNav ? "top-1.5" : "top-1",
          )}
        />
      </div>
      <span
        className={cn(
          "font-light bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent tracking-[0.15em] transition-all group-hover:from-white group-hover:to-slate-200",
          isNav ? "text-xl" : "text-lg",
        )}
      >
        Solutions
      </span>
    </Link>
  );
}
