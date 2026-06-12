# Page Topology — tsolutions.com.vn

Single-page site (Next.js + Tailwind v4). Dark theme. Font: **Be Vietnam Pro**.

## Sections (top → bottom)
1. **Navbar** — `fixed top-0 z-50`. Transparent at top → on scroll (>50px) becomes `bg-slate-900/95 backdrop-blur-md border-b border-white/10 py-4 shadow-lg`. Logo (glassy box with gradient "T" + pulse dot + "Solutions"), desktop menu with two hover dropdowns (Dịch Vụ, Giải Pháp), "Về chúng tôi", "Liên hệ", "Tư Vấn Ngay" pill. Mobile hamburger menu.
2. **Hero** — `min-h-screen flex items-center justify-center`. Full-bleed bg image (`hero-bg.jpg`) + dark gradient overlay. Centered: amber badge pill, h1 (small slate line + 2 gradient uppercase lines), subtitle, "Khám Phá Ngay" gradient pill button, bottom scroll-down chevron indicator.
3. **Services** (`#services`) — `py-24`. Heading "Dịch Vụ Cốt Lõi" + subtitle + hint. **4-panel hover-accordion** (flex, h-500px desktop). Hovered panel grows (flex 0.7s), shows title+desc+"KHÁM PHÁ NGAY". **Click opens a full-screen detail modal** per service. Mobile: stacks vertically.
4. **Contact** (`#contact`) — `py-24`. Radial amber glow bg. 2-col grid: left = heading + 3 info cards (phone/mail/map-pin), right = glass-card consultation form.
5. **Footer** — `bg-slate-950 border-t pt-20 pb-10`. 4-col: brand+social, Dịch Vụ links, Giải Pháp links, newsletter. Bottom bar: copyright + Điều khoản/Bảo mật/Cookies.
6. **Floating button** — `fixed bottom-6 right-6 z-40` gradient pill "Tư Vấn Ngay" with message-circle icon.

## Interaction models
- Navbar: **scroll-driven** style change (threshold ~50px, transition-all 300ms).
- Navbar dropdowns: **hover-driven** (group-hover, opacity/translate-y, 300ms).
- Services accordion: **hover-driven** flex expansion (desktop); **click → modal**.
- Service detail modal: opens on panel click; backdrop blur; close button top-right.
- Floating button + form submit + newsletter: static / non-functional (mock).

## Z-index layers
- Modal overlay: z-50; Navbar: z-50; Floating button: z-40; Hero content: z-20.
