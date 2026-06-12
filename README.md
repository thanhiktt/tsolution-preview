# T Solution — Website Clone

Pixel-perfect clone của [tsolutions.com.vn](https://www.tsolutions.com.vn/) — trang giới thiệu dịch vụ Camera, WiFi, IT Support & Bản quyền phần mềm.

Dựng lại bằng **Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4**.

## Tính năng

- **Hero** với headline gradient có hiệu ứng shimmer + animation mở trang (fade-up).
- **Navbar** đổi nền khi cuộn, dropdown hover, menu mobile.
- **Dịch Vụ Cốt Lõi** — accordion 4 panel mở rộng khi hover; click mở **modal chi tiết** lồng nhau:
  - Camera / WiFi: thương hiệu + gói thi công + **bảng giá** + **danh mục sản phẩm**.
  - IT Support / Phần Mềm: danh mục dịch vụ + bảng giá chi tiết.
- **Form liên hệ**, **footer**, nút **Tư Vấn Ngay** nổi.
- Accessibility: modal có focus-trap, hỗ trợ `prefers-reduced-motion`, tương phản đạt WCAG AA, responsive mobile → desktop.

## Yêu cầu

- **Node.js 24** (xem `.nvmrc`)
- npm

## Chạy ở môi trường dev

```bash
npm install
npm run dev
```

Mở http://localhost:3000

## Các lệnh khác

| Lệnh | Mô tả |
|------|-------|
| `npm run dev` | Chạy dev server |
| `npm run build` | Build production |
| `npm run start` | Chạy bản production sau khi build |
| `npm run lint` | Kiểm tra ESLint |
| `npm run typecheck` | Kiểm tra TypeScript |
| `npm run check` | Lint + typecheck + build |

## Chạy bằng Docker (tùy chọn)

```bash
docker compose up --build
```

Mở http://localhost:3000

## Cấu trúc

```
src/
  app/            # layout, page, globals.css (design tokens + animation)
  components/     # Navbar, Hero, ServicesSection, ServiceModal, ContactSection, Footer, ...
  lib/            # site-data.ts (nội dung), utils.ts
  types/          # interfaces
public/images/    # ảnh nền, ảnh dịch vụ, logo hãng, ảnh sản phẩm
```

## Ghi chú

Đây là bản clone phục vụ học tập/demo. Logo thương hiệu (Hikvision, Cisco, EZVIZ, Aruba…) và nội dung thuộc về các chủ sở hữu tương ứng.
