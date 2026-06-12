"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  X,
  ArrowLeft,
  CircleCheck,
  ArrowRight,
  ShieldCheck,
  Headset,
  BadgeCheck,
  PackageOpen,
} from "lucide-react";
import type {
  Service,
  ServiceBrand,
  ServiceCategory,
  PricingTier,
  BrandProduct,
} from "@/types";

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

type Detail =
  | { kind: "category"; data: ServiceCategory }
  | { kind: "brand"; data: ServiceBrand };

const TRUST_BADGES = [
  { Icon: ShieldCheck, label: "BẢO MẬT", color: "text-green-500" },
  { Icon: Headset, label: "HỖ TRỢ 24/7", color: "text-blue-400" },
  { Icon: BadgeCheck, label: "CAM KẾT", color: "text-[var(--primary)]" },
];

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  const Icon = service.icon;
  const [detail, setDetail] = useState<Detail | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (detail) setDetail(null);
        else onClose();
        return;
      }
      // Focus trap: keep Tab within the dialog
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    // Move focus into the dialog; restore it to the trigger on close.
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused?.focus?.();
    };
  }, [onClose, detail]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/95 md:bg-black/90 md:backdrop-blur-md p-0 md:p-8"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={service.title}
        className="relative h-[95vh] md:h-full md:max-h-[90vh] w-full max-w-7xl overflow-hidden rounded-t-3xl md:rounded-3xl bg-stone-950 shadow-2xl ring-1 ring-white/10 flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label="Đóng"
          className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white/80 ring-1 ring-white/10 backdrop-blur-md transition-colors hover:bg-black/70 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Left sidebar */}
        <div className="relative shrink-0 md:w-[36%] h-48 md:h-auto overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8">
            <div className="mb-4 w-fit rounded-xl bg-[var(--primary)] p-3 text-white shadow-lg shadow-[var(--primary)]/30">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-2xl md:text-3xl font-bold text-white">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-300">
              {service.desc}
            </p>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          {detail ? (
            <DetailView detail={detail} onBack={() => setDetail(null)} />
          ) : service.modalType === "products" ? (
            <>
              <SectionLabel>SẢN PHẨM CUNG CẤP</SectionLabel>
              <div className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-4">
                {service.brands?.map((b) => (
                  <button
                    key={b.name}
                    onClick={() => setDetail({ kind: "brand", data: b })}
                    title={b.desc}
                    className="group flex flex-col gap-2 text-left"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                      {b.name}
                    </span>
                    <div className="relative flex h-20 items-center justify-center rounded-xl bg-white/95 p-4 ring-1 ring-transparent transition-all group-hover:ring-[var(--primary)]">
                      <Image
                        src={b.logo}
                        alt={b.name}
                        width={120}
                        height={48}
                        className="max-h-12 w-auto max-w-[80%] object-contain"
                      />
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--primary)] opacity-0 transition-opacity group-hover:opacity-100">
                      Xem danh sách sản phẩm <ArrowRight className="h-3 w-3" />
                    </span>
                  </button>
                ))}
              </div>

              <SectionLabel>GÓI THI CÔNG TRỌN BỘ</SectionLabel>
              <div className="grid gap-4 md:grid-cols-2">
                {service.packages?.map((p) => (
                  <PackageCard key={p.name} {...p} />
                ))}
              </div>
            </>
          ) : (
            <>
              <SectionLabel>DANH MỤC DỊCH VỤ</SectionLabel>
              <div className="grid gap-4 md:grid-cols-2">
                {service.categories?.map((c) => (
                  <div
                    key={c.name}
                    className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-[var(--primary)]/40"
                  >
                    <h4 className="mb-1 text-lg font-bold text-white">{c.name}</h4>
                    <p className="mb-4 text-sm text-[var(--primary)]">{c.tagline}</p>
                    <ul className="mb-5 flex-1 space-y-2.5">
                      {c.features.map((f) => (
                        <FeatureItem key={f}>{f}</FeatureItem>
                      ))}
                    </ul>
                    <button
                      onClick={() => setDetail({ kind: "category", data: c })}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-xs font-bold text-gray-400 transition-all hover:bg-amber-600 hover:text-black"
                    >
                      Xem Bảng Giá &amp; Chi Tiết
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Detail (nested) view ---------- */

function DetailView({ detail, onBack }: { detail: Detail; onBack: () => void }) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={onBack}
          aria-label="Quay lại"
          className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            {detail.kind === "category" ? "Chi tiết dịch vụ" : "Sản phẩm chính hãng"}
          </p>
          <h3 className="text-xl font-bold text-[var(--primary)]">
            {detail.data.name}
          </h3>
        </div>
      </div>

      {detail.kind === "category" ? (
        <>
          <div className="space-y-4">
            {detail.data.tiers?.map((t) => (
              <TierRow key={t.name} {...t} />
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-10 border-t border-white/10 pt-8">
            {TRUST_BADGES.map(({ Icon, label, color }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon className={`h-6 w-6 ${color}`} />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </>
      ) : detail.data.products && detail.data.products.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {detail.data.products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
          <PackageOpen className="h-12 w-12 text-gray-600" />
          <p className="text-gray-400">
            Chưa có sản phẩm nào của {detail.data.name} được cập nhật.
          </p>
        </div>
      )}
    </div>
  );
}

function TierRow({ name, price, unit, desc }: PricingTier) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex-1">
        <h5 className="mb-2 text-base font-bold text-white">{name}</h5>
        <ul className="space-y-1.5">
          {desc.map((d) => (
            <li
              key={d}
              className="flex items-start gap-2 text-sm leading-relaxed text-gray-400"
            >
              <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
        <div className="text-right">
          <p className="text-xl font-extrabold text-[var(--primary)]">{price}</p>
          {unit && <p className="text-xs text-gray-400">{unit}</p>}
        </div>
        <a
          href="#contact"
          className="rounded-lg bg-amber-500 px-6 py-2 text-sm font-bold text-black transition-colors hover:bg-amber-400"
        >
          Đăng Ký
        </a>
      </div>
    </div>
  );
}

function ProductCard({ name, specs, tag, price, stock, image }: BrandProduct) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="relative h-44 bg-white">
        <Image src={image} alt={name} fill className="object-contain p-4" />
        <span className="absolute left-3 top-3 rounded-md bg-black/70 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {tag}
        </span>
      </div>
      <div className="p-4">
        <h5 className="mb-2 line-clamp-2 text-sm font-bold text-white">{name}</h5>
        <ul className="mb-3 space-y-1">
          {specs.map((s) => (
            <li
              key={s}
              className="flex items-start gap-2 text-xs leading-relaxed text-gray-400"
            >
              <CircleCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-500" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between border-t border-white/10 pt-3">
          <span className="text-base font-extrabold text-[var(--primary)]">
            {price}
          </span>
          <span className="rounded-full bg-green-500/15 px-2 py-0.5 text-[10px] font-bold uppercase text-green-400">
            {stock}
          </span>
        </div>
        <a
          href="#contact"
          className="mt-3 flex items-center justify-center gap-1 rounded-lg bg-white/5 px-4 py-2 text-xs font-bold text-gray-400 transition-all hover:bg-amber-600 hover:text-black"
        >
          Xem Chi Tiết <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

/* ---------- Shared list-view helpers ---------- */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--primary)]">
      <span className="h-4 w-1 rounded-full bg-[var(--primary)]" />
      {children}
    </h4>
  );
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-300">
      <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
      <span>{children}</span>
    </li>
  );
}

function PackageCard({
  name,
  suitable,
  price,
  features,
}: {
  name: string;
  suitable: string;
  price: string;
  features: string[];
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-[var(--primary)]/40">
      <h5 className="mb-1 text-lg font-bold text-white">{name}</h5>
      <p className="mb-3 text-sm text-gray-400">Phù hợp: {suitable}</p>
      <p className="mb-4 text-2xl font-extrabold text-gradient">{price}</p>
      <ul className="mb-5 flex-1 space-y-2.5">
        {features.map((f) => (
          <FeatureItem key={f}>{f}</FeatureItem>
        ))}
      </ul>
      <a
        href="#contact"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--primary)]/10 px-4 py-2 text-sm font-semibold text-[var(--primary)] ring-1 ring-[var(--primary)]/30 transition-colors hover:bg-[var(--primary)] hover:text-black"
      >
        Đăng Ký Gói Này
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
