"use client";

import { useState } from "react";
import Image from "next/image";
import { MessagesSquare, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/site-data";
import type { Service } from "@/types";
import { ServiceModal } from "@/components/ServiceModal";

export function ServicesSection() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section
      id="services"
      className="py-24 px-4 md:px-0 bg-[var(--background)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            <span className="text-gradient">Dịch Vụ</span> Cốt Lõi
          </h2>
          <p className="text-[var(--color-titanium)] max-w-2xl mx-auto text-lg">
            Các dịch vụ kỹ thuật chuyên sâu được cung cấp bởi đội ngũ chuyên gia.
          </p>
          <div className="flex items-center justify-center gap-2 text-[var(--color-titanium)] max-w-2xl mx-auto text-sm">
            <MessagesSquare className="w-5 h-5" />
            <span>Khám phá hệ sinh thái dịch vụ (Chạm để xem chi tiết)</span>
          </div>
        </div>

        {/* Accordion */}
        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[500px]">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => setActive(service)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl h-[280px] w-full text-left md:h-[500px] md:w-auto md:flex-1 md:hover:flex-[3] transition-[flex] duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
              >
                {/* Background image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-80 transition-transform duration-1000 md:scale-110 md:group-hover:scale-100"
                />
                {/* darkening overlay */}
                <div className="absolute inset-0 transition-colors duration-700 bg-black/50 md:bg-black/60 md:group-hover:bg-black/40" />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent" />

                {/* Mobile content (always visible) */}
                <div className="md:hidden absolute inset-0 flex flex-col justify-end p-5">
                  <div className="mb-3 w-fit rounded-xl bg-[var(--primary)] p-2.5 text-white shadow-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-300 line-clamp-3">
                    {service.desc}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)]">
                    KHÁM PHÁ NGAY <ArrowRight className="h-4 w-4" />
                  </span>
                </div>

                {/* Desktop collapsed content (centered icon + label) */}
                <div className="hidden md:flex absolute inset-0 flex-col items-center justify-center gap-4 transition-opacity duration-500 group-hover:opacity-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/40 text-white ring-1 ring-white/20 backdrop-blur-md">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-white">
                    {service.label}
                  </span>
                </div>

                {/* Desktop expanded content (bottom) */}
                <div className="hidden md:flex absolute inset-0 flex-col justify-end p-8">
                  <div className="flex w-full min-w-[400px] flex-col gap-3 opacity-0 translate-y-8 pointer-events-none transition-all duration-500 delay-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                    <div className="w-fit rounded-xl bg-[var(--primary)] p-2.5 text-white shadow-lg shadow-[var(--primary)]/30 backdrop-blur-md">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {service.desc}
                    </p>
                    <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold tracking-wide text-[var(--primary)]">
                      KHÁM PHÁ NGAY <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {active && (
        <ServiceModal service={active} onClose={() => setActive(null)} />
      )}
    </section>
  );
}
