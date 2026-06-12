# Component Specs — tsolutions.com.vn clone

Extraction artifacts backing these specs:
`../DESIGN_TOKENS.md`, `../PAGE_TOPOLOGY.md`, `../services-modal-data*.json`,
`../contact-footer-misc.json`, `../contact-cards-icons.json`, `../brand-logo-map.json`.

## Navbar — `src/components/Navbar.tsx` (client)
- **Interaction:** scroll-driven. `window.scrollY > 50` toggles class.
  - Top: `bg-transparent border-transparent py-6`.
  - Scrolled: `bg-slate-900/95 backdrop-blur-md border-b border-white/10 py-4 shadow-lg`, `transition-all duration-300`.
- Inner: `max-w-7xl mx-auto px-6 flex justify-between items-center`.
- Logo: glassy box (`bg-slate-900/30 backdrop-blur border-amber-500/20 rounded-xl`), gradient "T" + pulse dot + "Solutions".
- Desktop menu (`hidden md:flex gap-8`): two hover dropdowns (Dịch Vụ, Giải Pháp — `group-hover` opacity/translate-y 300ms), "Về chúng tôi", "Liên hệ", "Tư Vấn Ngay" amber pill.
- Mobile: hamburger → slide panel with collapsible groups.

## Hero — `src/components/Hero.tsx`
- `min-h-screen flex items-center justify-center pt-20`, full-bleed `hero-bg.jpg` (`next/image` fill) + dark gradient overlays.
- Badge pill (Zap icon, amber/10 bg, amber/30 border, backdrop-blur).
- h1: 72px/700/tracking-tight. Line 1 slate-200 (24-36px); lines 2-3 `.text-gradient` uppercase extrabold.
- Subtitle titanium 18-20px. CTA "Khám Phá Ngay" gradient pill w/ ArrowRight, amber glow shadow.
- Bottom centered ChevronDown scroll indicator (`animate-bounce-slow`).

## ServicesSection — `src/components/ServicesSection.tsx` (client)
- **Interaction:** hover-driven flex accordion (desktop). Container `flex md:flex-row gap-4 md:h-[500px]`. Panels `md:flex-1 md:hover:flex-[3] transition-[flex] duration-700`. Verified: 296→592px on hover, others →197px.
- Collapsed (desktop): centered icon circle + uppercase label; fades on `group-hover`.
- Expanded: bottom block (icon chip, title, desc, "KHÁM PHÁ NGAY") `opacity-0 translate-y-8 → group-hover:opacity-100`.
- Mobile: panels stack `h-[280px]`, bottom content always visible.
- **Click → `ServiceModal`.**

## ServiceModal — `src/components/ServiceModal.tsx` (client)
- Overlay `fixed inset-0 z-50 bg-black/90 md:backdrop-blur-md`, panel `max-w-7xl bg-stone-950 rounded-3xl ring-1 ring-white/10 flex md:flex-row`. Close btn top-right; Esc + body-scroll-lock.
- Left sidebar (`md:w-[36%]`): service image + gradient + amber icon chip + title + desc.
- Right (scroll): **two modal types**
  - `products` (Camera, WiFi): "SẢN PHẨM CUNG CẤP" → 4 brand logo tiles (white bg, uppercase label); "GÓI THI CÔNG TRỌN BỘ" → package cards (name, "Phù hợp:", gradient price, check-bullet features, "Đăng Ký Gói Này").
  - `categories` (IT Support, Phần Mềm): "DANH MỤC DỊCH VỤ" → category cards (name, amber tagline, check-bullets, "Xem Bảng Giá & Chi Tiết").

## ContactSection — `src/components/ContactSection.tsx`
- `py-24` + radial amber glow (`opacity-10`). `grid lg:grid-cols-2 gap-16`.
- Left: h2 "Kết Nối" gradient + "Với Chúng Tôi", lead, 3 info cards (Phone/Mail/MapPin in `surface-highlight` circles).
- Right: `.glass-card p-8 md:p-10` form — text/tel/email inputs, select (5 SERVICE_OPTIONS), textarea, gradient "Gửi Yêu Cầu" + Send.

## Footer — `src/components/Footer.tsx`
- `bg-slate-950 border-t pt-20 pb-10`. 4 cols: brand+desc+socials (Facebook/Linkedin/Instagram custom SVGs), Dịch Vụ, Giải Pháp, newsletter (input + Send btn).
- Bottom bar: "© 2026 T Solution. All rights reserved." + Điều khoản/Bảo mật/Cookies.

## FloatingButton — `src/components/FloatingButton.tsx`
- `fixed bottom-6 right-6 z-40` gradient pill, MessageCircle + "Tư Vấn Ngay", amber glow, hover scale-105.
