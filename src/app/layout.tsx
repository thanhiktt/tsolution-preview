import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "T Solution - Thi Công Camera An Ninh, Mạng WiFi & IT Support Uy Tín",
  description:
    "Chuyên tư vấn, thi công lắp đặt Camera An Ninh (Nhà dân, Shop, Dự Án), Mạng WiFi chịu tải cao và Dịch vụ IT Support chuyên nghiệp. Hỗ trợ 24/7, bảo hành tận nơi.",
  icons: { icon: "/seo/favicon.ico" },
  openGraph: {
    title: "T Solution - Thi Công Camera An Ninh, Mạng WiFi & IT Support Uy Tín",
    description:
      "Giải pháp công nghệ toàn diện cho Gia đình & Doanh nghiệp: Camera, WiFi, IT Support.",
    siteName: "T Solution",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnam.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
