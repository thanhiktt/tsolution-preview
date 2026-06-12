# Design Tokens — tsolutions.com.vn

## Colors (CSS variables on :root)
- `--background: #0b0c10` (body bg)
- `--foreground: #f8fafc`
- `--primary: #f59e0b` (amber-500)
- `--accent: #d97706` (amber-600)
- `--secondary: #94a3b8` (slate-400)
- `--border: #ffffff1a` (white/10)
- `--surface: #ffffff08` (white/3)
- `--surface-highlight: #ffffff14` (white/8)
- `--text-titanium` / `--color-titanium: #e2e8f0` (slate-200)
- Footer bg: `slate-950` (#020617-ish)
- Common Tailwind grays used: gray-300/400 for nav/footer links, slate-900 for chips.

## Typography
- Font family: **Be Vietnam Pro** (weights 300,400,500,600,700,800,900). Next/font google.
- h1 hero: 72px / lh 90px / weight 700 / tracking -1.8px (text-7xl). Sub-line 24-36px.
- h2 section: 48px / lh 60px / weight 700 (text-5xl).
- body/subtitle: 18-20px, color titanium/slate-200.
- Small labels/badges: 14px, weight 500.

## Gradients / utilities
- `.text-gradient`: `linear-gradient(90deg, #fff 10%, #f59e0b 50%, #d97706 90%)` + `background-clip:text` + transparent text.
- Button gradient: `linear-gradient(to right, #f59e0b, #d97706)`.
- `.glass-card`: border-radius 24px, box-shadow `0 4px 20px rgba(0,0,0,0.2)`, subtle surface bg + border + backdrop-blur.
- Amber glow shadow: `0 0 20-25px rgba(245,158,11,0.3-0.4)`.

## Radii
- pill buttons: rounded-full
- cards: rounded-3xl (24px) / rounded-2xl (16px)
- inputs: rounded-lg (8px)

## Icons
Lucide React: Camera, Wifi, Shield, Cloud, Phone, Mail, MapPin, Send, MessageCircle,
MessageSquare, Zap, ArrowRight, ArrowUp, ChevronDown, Menu, Facebook, Linkedin, Instagram.
