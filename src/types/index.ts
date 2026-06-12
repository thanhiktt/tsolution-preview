import type { LucideIcon } from "lucide-react";

export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  dropdown?: NavDropdownItem[];
}

export interface BrandProduct {
  name: string;
  specs: string[];
  tag: string; // e.g. "TRONG NHÀ"
  price: string;
  stock: string; // e.g. "SẴN HÀNG"
  image: string;
}

export interface ServiceBrand {
  name: string;
  logo: string;
  desc: string;
  /** Products shown in the brand catalog detail view (empty => "chưa cập nhật" state). */
  products?: BrandProduct[];
}

export interface ServicePackage {
  name: string;
  suitable: string;
  price: string;
  features: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  unit: string; // e.g. "/ user/tháng" — may be ""
  desc: string[];
}

export interface ServiceCategory {
  name: string;
  tagline: string;
  features: string[];
  /** Pricing tiers shown in the "Xem Bảng Giá & Chi Tiết" detail view. */
  tiers?: PricingTier[];
}

export interface Service {
  id: string;
  label: string; // short panel label, e.g. "CAMERA"
  title: string; // full title shown in panel + modal header
  desc: string;
  image: string;
  icon: LucideIcon;
  /** "products" => brands + packages; "categories" => service category cards */
  modalType: "products" | "categories";
  brands?: ServiceBrand[];
  packages?: ServicePackage[];
  categories?: ServiceCategory[];
}

export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  value: string;
  sub?: string;
}

export interface FooterColumn {
  title: string;
  links: string[];
}
