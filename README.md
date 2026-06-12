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

## Deploy

Dự án là ứng dụng **Next.js SSR** (`next.config.ts` đặt `output: "standalone"`), nên cần môi trường Node — **GitHub Pages không chạy được** (chỉ phục vụ static).

### 1. Vercel (khuyến nghị — dễ nhất)

Cách 1 — qua giao diện:
1. Vào [vercel.com/new](https://vercel.com/new), import repo `thanhiktt/tsolution-preview`.
2. Vercel tự nhận diện Next.js — giữ nguyên mặc định (Build: `next build`, Output tự động).
3. Bấm **Deploy**. Mỗi lần `git push` lên `main` sẽ tự deploy lại.

Cách 2 — qua CLI:

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

### 2. Cloudflare (Workers, qua adapter OpenNext)

Cloudflare chạy Next.js qua adapter chính thức [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare).

> ⚠️ **Yêu cầu phiên bản:** adapter cần `next >= 16.2.6`. Project đang ở `16.2.1`, nên nâng trước:
> ```bash
> npm i next@latest
> ```

**1. Cài adapter + wrangler**

```bash
npm i -D @opennextjs/cloudflare wrangler
```

**2. Tạo `open-next.config.ts`** ở thư mục gốc:

```ts
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig();
```

**3. Tạo `wrangler.jsonc`** ở thư mục gốc:

```jsonc
{
  "main": ".open-next/worker.js",
  "name": "tsolution-preview",
  "compatibility_date": "2025-03-25",
  "compatibility_flags": ["nodejs_compat"],
  "assets": { "directory": ".open-next/assets", "binding": "ASSETS" }
}
```

**4. Thêm scripts vào `package.json`:**

```json
"preview:cf": "opennextjs-cloudflare build && opennextjs-cloudflare preview",
"deploy:cf": "opennextjs-cloudflare build && opennextjs-cloudflare deploy"
```

**5. Đăng nhập & deploy:**

```bash
npx wrangler login      # mở trình duyệt, ủy quyền tài khoản Cloudflare
npm run preview:cf      # chạy thử cục bộ trên runtime Workers
npm run deploy:cf       # deploy lên Cloudflare
```

Hoặc auto-deploy mỗi lần push: vào **Cloudflare Dashboard → Workers & Pages → Create → Connect repo** `thanhiktt/tsolution-preview`, chọn framework **Next.js**, lệnh build `npx opennextjs-cloudflare build`.

### 3. Node self-host (VPS)

```bash
npm ci
npm run build
npm run start          # phục vụ tại cổng 3000
# production nên chạy qua process manager, ví dụ:
# pm2 start "npm run start" --name tsolution
```

> Đặt biến môi trường `PORT` nếu muốn đổi cổng (vd `PORT=8080 npm run start`).
> Khuyến nghị chạy sau reverse proxy (Nginx/Caddy) để xử lý HTTPS và domain.

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
