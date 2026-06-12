import {
  Camera,
  Wifi,
  Shield,
  Cloud,
  Phone,
  Mail,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import type {
  NavItem,
  Service,
  ContactInfo,
  FooterColumn,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Dịch Vụ",
    dropdown: [
      { label: "Camera An Ninh", href: "#services" },
      { label: "Hệ Thống Mạng & Wifi", href: "#services" },
      { label: "IT Support & Bảo Trì", href: "#services" },
      { label: "Phần Mềm & Bản Quyền", href: "#services" },
    ],
  },
  {
    label: "Giải Pháp",
    dropdown: [
      { label: "Cho Doanh Nghiệp SME", href: "#services" },
      { label: "Cho Nhà Máy / Xưởng", href: "#services" },
      { label: "Cho Hộ Kinh Doanh", href: "#services" },
      { label: "Smart Home", href: "#services" },
    ],
  },
  { label: "Về chúng tôi", href: "/gioi-thieu" },
  { label: "Liên hệ", href: "#contact" },
];

export const SERVICES: Service[] = [
  {
    id: "camera",
    label: "CAMERA",
    title: "Cung Cấp & Thi Công Camera",
    desc: "Thi công hệ thống giám sát chuyên nghiệp. Đảm bảo thẩm mỹ, bảo mật & chế độ hậu mãi tận nơi siêu tốc. Chúng tôi không chỉ bán thiết bị, chúng tôi bán sự an tâm.",
    image: "/images/service-camera.jpg",
    icon: Camera,
    modalType: "products",
    brands: [
      {
        name: "EZviz",
        logo: "/images/brands/ezviz.png",
        desc: "Tiên phong trong công nghệ Camera Wifi & Nhà thông minh. Sản phẩm EZVIZ nổi bật nhờ thiết kế hiện đại, khả năng quay quét 360 độ, quan sát màu ban đêm và cảnh báo chuyển động tức thì qua điện thoại. Sự lựa chọn số 1 cho không gian sống an toàn và tiện nghi.",
        products: [
          {
            name: "Camera ip wifi EZVIZ C6N PRO (2K 3MP/ Quay quét)",
            specs: [
              "Loại camera: IP Wifi",
              "Độ phân giải: 2K 3MP",
              "Đèn hồng ngoại: Có",
              "Hỗ trợ thẻ nhớ tối đa: 512GB",
            ],
            tag: "TRONG NHÀ",
            price: "399.000 VNĐ",
            stock: "SẴN HÀNG",
            image: "/images/products/ezviz-c6n-pro.jpg",
          },
        ],
      },
      {
        name: "IMOU",
        logo: "/images/brands/imou.png",
        desc: "Camera Wifi thế hệ mới với khả năng quan sát màu ban đêm và báo động chủ động. IMOU tích hợp đàm thoại 2 chiều, còi hú chống trộm và tính năng Smart Tracking tự động xoay theo chuyển động. Bảo vệ ngôi nhà bạn 24/7.",
      },
      {
        name: "Hikvision",
        logo: "/images/brands/hikvision.png",
        desc: "Thương hiệu Camera giám sát bán chạy nhất toàn cầu. Hình ảnh sắc nét, độ bền cao, công nghệ xử lý ảnh tiên tiến. Giải pháp an ninh chuẩn mực cho mọi công trình.",
      },
      {
        name: "Tapo (TP-Link)",
        logo: "/images/brands/tapo-tp-link.png",
        desc: "Dòng Camera Wifi thông minh với hệ sinh thái đa dạng. Tapo mang đến trải nghiệm người dùng mượt mà nhất, hỗ trợ đàm thoại 2 chiều trong trẻo, chế độ riêng tư vật lý và lưu trữ linh hoạt. Giải pháp giám sát an toàn, hiện đại cho ngôi nhà thông minh.",
      },
    ],
    packages: [
      {
        name: "Gói Thi Công: HOME",
        suitable: "Căn hộ chung cư, Nhà phố, Biệt thự, Nhà dân.",
        price: "2.000.000 VNĐ",
        features: [
          "Vật tư phụ: Hộp kỹ thuật liền nguồn (tránh hở dây), Nẹp điện thẩm mỹ (nẹp vuông/bán nguyệt), Vít & Nở nhựa cao cấp, Băng keo điện, Dây rút.",
          "Nhân công: Khoan lắp đặt sạch sẽ (hút bụi tại chỗ), đi dây nẹp vuông góc thẩm mỹ, hướng dẫn cài đặt App trên điện thoại cho cả gia đình (Bố, Mẹ, Con cái).",
        ],
      },
      {
        name: "Gói Thi Công: SHOP",
        suitable: "Kiot, Tạp hóa, Shop thời trang, Tiệm vàng.",
        price: "Liên hệ",
        features: [
          "Vật tư phụ: Dây cáp tín hiệu (Cáp mạng/Đồng trục) chuẩn lõi đồng, Jack nối (BNC/Video Balun/RJ45) chống nhiễu, Nguồn tổ ong hoặc Adapter rời, Ống gen ruột gà bảo vệ dây.",
          "Nhân công: Tư vấn góc soi quầy thu ngân & cửa ra vào, đi dây gọn gàng trong trần thạch cao hoặc nẹp nổi, cấu hình đầu ghi hình lưu trữ dài ngày.",
        ],
      },
      {
        name: "Gói Thi Công: F&B",
        suitable: "Quán Cafe, Nhà hàng, Khách sạn.",
        price: "Liên hệ",
        features: [
          "Vật tư phụ: Ống nhựa cứng hoặc ruột gà chống cháy (đi âm trần), Hộp chia ngả, Sơn xịt (nếu cần sơn camera tiệp màu trần quán), Dây cáp mạng CAT6 tốc độ cao.",
          "Nhân công: Thi công đi dây âm trần/âm tường phức tạp, lắp đặt camera ốp trần đảm bảo Decor, setup màn hình hiển thị tại quầy Bar/Lễ tân.",
        ],
      },
      {
        name: "Gói Thi Công: OFFICE",
        suitable: "Văn phòng công ty, Coworking Space.",
        price: "Liên hệ",
        features: [
          "Vật tư phụ: Tủ Rack đựng thiết bị, Switch chia mạng (PoE), Thanh quản lý cáp, Hạt mạng RJ45 dập máy, Nhãn dán định danh (Label) cho từng đầu dây.",
          "Nhân công: Bấm đầu mạng chuẩn IT, đi dây vào máng cáp sàn/trần, cấu hình IP tĩnh, cài đặt phần mềm CMS quản lý tập trung trên máy tính PC.",
        ],
      },
      {
        name: "Gói Thi Công: FACTORY",
        suitable: "Nhà xưởng, Kho bãi, Bãi xe.",
        price: "Liên hệ",
        features: [
          "Vật tư phụ: Cáp quang (đi xa), Bộ chuyển đổi quang điện, Ống kẽm/HDPE chịu lực bảo vệ dây ngoài trời, Hộp điện chống nước IP66, Tay đòn treo camera (nếu cần).",
          "Nhân công: Thi công trên cao (giàn giáo/xe nâng), hàn nối cáp quang, đi dây ngoài trời chịu mưa nắng, đấu nối tủ điện an toàn công nghiệp.",
        ],
      },
    ],
  },
  {
    id: "wifi",
    label: "WIFI / MẠNG",
    title: "Hạ Tầng Mạng & Wifi",
    desc: "Tư vấn & Thi công mạng LAN/Wifi cho: Văn phòng, Tòa nhà, Cơ sở kinh doanh & Nhà riêng. Đảm bảo sóng khỏe, thẩm mỹ, chịu tải cao. Chế độ hậu mãi tận tâm, đồng hành cùng hệ thống vận hành ổn định.",
    image: "/images/service-wifi.jpg",
    icon: Wifi,
    modalType: "products",
    brands: [
      {
        name: "ARUBA",
        logo: "/images/brands/aruba.png",
        desc: "Giải pháp Wifi chuyên dụng đến từ tập đoàn công nghệ Hewlett Packard Enterprise (HPE - Mỹ). Aruba là tiêu chuẩn cho sự ổn định tuyệt đối, khả năng chịu tải hàng trăm thiết bị cùng lúc và tính năng Roaming không ngắt quãng. Dòng Aruba Instant On hiện là lựa chọn số 1 cho các chuỗi Cafe, Nhà hàng và Văn phòng hiện đại.",
        products: [
          {
            name: "Aruba Instant On AP25 (RW) 4x4 Wi-Fi 6 Indoor Access Point (R9B28A)",
            specs: [
              "Bộ phát băng tần kép chuẩn ax 4X4:4",
              "Tốc độ WiFi 6 lên đến 5.3Gbps (4.8Gbps: 5GHz và 574 Mbps: 2.4GHz).",
            ],
            tag: "WI-FI 6 INDOOR ACCESS POINT",
            price: "9.500.000 VNĐ",
            stock: "SẴN HÀNG",
            image: "/images/products/aruba-instant-on-ap25.jpg",
          },
        ],
      },
      {
        name: "UNIFI",
        logo: "/images/brands/unifi.png",
        desc: "Hệ sinh thái mạng số 1 thế giới về trải nghiệm người dùng. Unifi (Ubiquiti) nổi bật với thiết kế phần cứng sang trọng như một món đồ trang trí. Hệ thống quản lý (Controller) trực quan, miễn phí License trọn đời, cho phép mở rộng hệ thống không giới hạn chỉ bằng việc cắm thêm thiết bị.",
      },
      {
        name: "RUIJIE",
        logo: "/images/brands/ruijie.png",
        desc: "Giải pháp Wifi đám mây (Cloud) thông minh với chi phí tối ưu nhất. Ruijie (dòng Reyee) tiên phong công nghệ quản lý từ xa hoàn toàn miễn phí. Khả năng xuyên tường tốt, cài đặt nhanh chóng qua mã QR Code và tính năng tự động Roaming giúp wifi luôn căng vạch khi di chuyển giữa các tầng.",
      },
      {
        name: "CISCO",
        logo: "/images/brands/cisco.png",
        desc: "Tượng đài công nghệ mạng toàn cầu. Cisco định nghĩa lại các tiêu chuẩn về bảo mật và hiệu suất mạng doanh nghiệp (Enterprise). Thiết bị Cisco cung cấp khả năng vận hành liên tục 24/7/365, chống lại các cuộc tấn công mạng và đảm bảo băng thông thông suốt cho các hệ thống Core quan trọng.",
      },
    ],
    packages: [
      {
        name: "Gói Wifi Mesh: HOME & VILLA (Phủ Sóng Toàn Diện)",
        suitable: "Dành cho: Biệt thự nhiều tầng, Căn hộ rộng, Nhà ống sóng yếu.",
        price: "Liên hệ",
        features: [
          "Lắp đặt hệ thống Mesh Wifi thông minh (1 tên sóng duy nhất cho cả nhà).",
          "Cấu hình ưu tiên băng thông cho Smart TV, Phòng làm việc.",
          "Thi công thẩm mỹ (giấu dây sau kệ Tivi, đi nẹp góc tường).",
          "Hướng dẫn phụ huynh quản lý giờ giấc lên mạng của con cái (Parental Control).",
        ],
      },
      {
        name: "Gói Wifi Marketing: COFFEE & SHOP (Chịu Tải Cao)",
        suitable: "Quán Cafe, Nhà hàng, Shop thời trang, Showroom.",
        price: "Liên hệ",
        features: [
          "Lắp đặt thiết bị chịu tải cao (50 - 200 user cùng lúc).",
          "Thiết lập trang chào đăng nhập (Yêu cầu Like Fanpage/Check-in/Xem ảnh menu để vào mạng).",
          "Tách mạng: Chia VLAN riêng biệt (Mạng Khách riêng - Mạng Nội bộ cho Camera/Thu ngân riêng) để bảo mật.",
          'Giới hạn băng thông mỗi khách và thời gian phiên truy cập (tránh khách ngồi "cắm rễ" chiếm băng thông).',
        ],
      },
      {
        name: "Gói Wifi Chuyên Dụng: OFFICE PRO (Bảo Mật & Ổn Định)",
        suitable: "Văn phòng công ty, Coworking Space, Trung tâm đào tạo.",
        price: "Liên hệ",
        features: [
          "Đi dây mạng LAN (Cat6) âm sàn/âm tường tới từng bàn làm việc.",
          "Cấu hình Cân bằng tải (Load Balancing) nhiều đường truyền Internet (đứt mạng này tự chuyển mạng kia).",
          "Phân quyền truy cập: Sếp dùng max tốc độ, Nhân viên bị chặn web phim/game trong giờ làm.",
          "Lắp đặt thiết bị ốp trần thẩm mỹ chuyên nghiệp.",
        ],
      },
      {
        name: "Gói Wifi Công Nghiệp: INDUSTRIAL (Diện Tích Rộng)",
        suitable: "Nhà xưởng, Kho bãi, Bãi xe, Resort, Khu du lịch.",
        price: "Liên hệ",
        features: [
          "Thi công cáp quang kết nối giữa các phân xưởng/nhà kho.",
          "Lắp đặt bộ phát Wifi Outdoor chịu nước/nắng gió chuẩn IP67.",
          "Giải pháp Point-to-Point (Bắn sóng không dây) cho các điểm không thể kéo dây (khoảng cách 1km-5km).",
          "Wifi cho xe nâng/máy quét mã vạch di chuyển liên tục không bị mất sóng.",
        ],
      },
    ],
  },
  {
    id: "it-support",
    label: "IT SUPPORT",
    title: "Dịch vụ IT support & chuyển đổi số",
    desc: "Hỗ trợ kỹ thuật từ xa 24/7 & Tư vấn giải pháp chuyển đổi số toàn diện cho doanh nghiệp.",
    image: "/images/service-it.jpg",
    icon: Shield,
    modalType: "categories",
    categories: [
      {
        name: "IT Helpdesk Remote",
        tagline: "Hỗ trợ kỹ thuật từ xa tức thì.",
        features: [
          "Hỗ trợ qua UltraViewer/TeamViewer.",
          "Xử lý lỗi Office, Unikey, Font, In ấn.",
          "Cài đặt phần mềm, tối ưu máy tính.",
          "Quét virus, dọn dẹp rác hệ thống.",
        ],
        tiers: [
          {
            name: "Vé lẻ (1 lần)",
            price: "200.000đ",
            unit: "/ lần",
            desc: ["Xử lý 1 sự cố cụ thể. Bảo hành 3 ngày."],
          },
          {
            name: "Gói Tháng (Start)",
            price: "150.000đ",
            unit: "/ user/tháng",
            desc: ["Hỗ trợ không giới hạn số lần. Tối thiểu 5 user."],
          },
        ],
      },
      {
        name: "System Admin",
        tagline: "Quản trị Server & Bảo mật.",
        features: [
          "Quản trị Server, ảo hóa VMware/Hyper-V.",
          "Hệ thống phân quyền (AD Domain).",
          "Thiết lập File Server & Backup 3-2-1.",
          "Cấu hình Firewall, VPN, Security.",
        ],
        tiers: [
          {
            name: "Khảo sát & Tư vấn",
            price: "Miễn phí",
            unit: "",
            desc: ["Khảo sát hiện trạng, lên phương án quy hoạch."],
          },
          {
            name: "Triển khai Server",
            price: "Thỏa thuận",
            unit: "/ dự án",
            desc: ["Cài đặt, cấu hình Window Server/Linux theo yêu cầu."],
          },
          {
            name: "Bảo trì Hệ thống",
            price: "Liên hệ",
            unit: "/ tháng",
            desc: ["Giám sát, update bản mới, backup định kỳ."],
          },
        ],
      },
      {
        name: "Setup Hạ Tầng Số",
        tagline: "Định danh thương hiệu Online.",
        features: [
          "Đăng ký Tên miền (Domain).",
          "Email doanh nghiệp (Google/MS 365).",
          "Hosting/VPS tốc độ cao, SSL.",
          "Thiết kế Website giới thiệu.",
        ],
        tiers: [
          {
            name: "M.365 Business Basic",
            price: "69.000đ",
            unit: "/ user/tháng",
            desc: ["Email 50GB, Teams, bộ Office Web. (Giá tham khảo)"],
          },
          {
            name: "Google Workspace",
            price: "148.000đ",
            unit: "/ user/tháng",
            desc: ["Gmail tên miền, 30GB Drive, Meet."],
          },
          {
            name: "Trọn gói Website",
            price: "5.000.000đ",
            unit: "/ web",
            desc: ["Website giới thiệu cty, chuẩn SEO, tặng Hosting 1 năm."],
          },
        ],
      },
      {
        name: "Vận Hành Chuyển Đổi Số",
        tagline: "Số hóa quy trình vận hành.",
        features: [
          "Số hóa quy trình (Paperless).",
          "Triển khai CRM, HRM, ERP.",
          "Đào tạo nhân sự sử dụng.",
          "Support vận hành trọn đời.",
        ],
        tiers: [
          {
            name: "Tư vấn Lộ trình",
            price: "5.000.000đ",
            unit: "/ buổi",
            desc: ["Phân tích quy trình hiện tại, đề xuất giải pháp số hóa."],
          },
          {
            name: "Thuê bao Phần mềm",
            price: "Liên hệ",
            unit: "/ tháng",
            desc: ["Cung cấp license phần mềm CRM/HRM theo quy mô."],
          },
        ],
      },
    ],
  },
  {
    id: "software",
    label: "PHẦN MỀM",
    title: "Phần Mềm & Bản Quyền Số",
    desc: "Cung cấp License Microsoft 365, Google Workspace, Windows & giải pháp phần mềm chính hãng cho doanh nghiệp.",
    image: "/images/service-software.jpg",
    icon: Cloud,
    modalType: "categories",
    categories: [
      {
        name: "Email Doanh Nghiệp",
        tagline: "Microsoft 365 & Google Workspace chính hãng, ổn định, bảo mật cao.",
        features: [
          "Email theo tên miền riêng (ten@congty.com).",
          "Dung lượng lưu trữ lớn (30GB - 1TB).",
          "Đồng bộ Outlook, Mobile, Webmail.",
          "Lọc thư rác, chống lừa đảo, bảo mật cao.",
        ],
        tiers: [
          {
            name: "Google Workspace Starter",
            price: "148.000đ",
            unit: "/ user/tháng",
            desc: ["Email 30GB, Google Meet 100 người.", "Bảo mật 2 lớp an toàn."],
          },
          {
            name: "Microsoft 365 Basic",
            price: "69.000đ",
            unit: "/ user/tháng",
            desc: ["Email 50GB (Exchange), OneDrive 1TB.", "Web Office (Word, Excel)."],
          },
        ],
      },
      {
        name: "Tên Miền (Domain)",
        tagline: "Đăng ký & quản lý tên miền Việt Nam (.vn) và Quốc tế (.com, .net).",
        features: [
          "Đăng ký chính chủ, bảo vệ thương hiệu.",
          "Hỗ trợ cấu hình trỏ về Hosting/Email.",
          "Nhắc gia hạn tự động tránh mất tên miền.",
          "Ẩn thông tin Whois (Bảo mật danh tính).",
        ],
        tiers: [
          {
            name: "Tên miền Quốc tế (.com/.net)",
            price: "Liên hệ",
            unit: "/ năm",
            desc: ["Phổ biến nhất thế giới.", "Kích hoạt ngay lập tức."],
          },
          {
            name: "Tên miền Việt Nam (.vn)",
            price: "Liên hệ",
            unit: "/ năm",
            desc: ["Được pháp luật VN bảo hộ.", "Thương hiệu uy tín."],
          },
        ],
      },
      {
        name: "Phần Mềm Doanh Nghiệp",
        tagline: "Veeam Backup, Windows, Antivirus và các phần mềm chuyên dụng khác.",
        features: [
          "Giải pháp Backup dữ liệu an toàn (Veeam).",
          "Hệ điều hành Windows/Server bản quyền.",
          "Diệt Virus tập trung (Kaspersky, ESET).",
          "Phần mềm thiết kế, kế toán theo yêu cầu.",
        ],
        tiers: [
          {
            name: "Veeam Backup",
            price: "Liên hệ",
            unit: "/ socket",
            desc: ["Sao lưu máy chủ ảo hóa/vật lý.", "Khôi phục dữ liệu nhanh chóng."],
          },
          {
            name: "Kaspersky Endpoint",
            price: "Liên hệ",
            unit: "/ máy/năm",
            desc: ["Bảo vệ máy trạm khỏi Virus, Ransomware.", "Quản lý tập trung qua Cloud."],
          },
        ],
      },
    ],
  },
];

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Phone,
    title: "Hotline Hỗ Trợ",
    value: "0374047593",
    sub: "Thứ 2 - Chủ Nhật: 8:00 - 22:00",
  },
  {
    icon: Mail,
    title: "Email Liên Hệ",
    value: "tuanruka@gmail.com",
  },
  {
    icon: MapPin,
    title: "Văn Phòng Chính",
    value: "Hà Nội",
  },
];

export const SERVICE_OPTIONS: string[] = [
  "Tư vấn giải pháp tổng thể",
  "Lắp đặt Camera An ninh",
  "Thi công Mạng / WiFi",
  "IT Support / Bảo trì",
  "Mua bản quyền Phần mềm",
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Dịch Vụ",
    links: [
      "Camera An Ninh",
      "Hệ Thống Mạng WiFi",
      "Bảo Trì Máy Tính",
      "Bản Quyền Phần Mềm",
    ],
  },
  {
    title: "Giải Pháp",
    links: [
      "Cho Doanh Nghiệp SME",
      "Cho Nhà Máy / Xưởng",
      "Cho Hộ Kinh Doanh",
      "Smart Home",
    ],
  },
];

export const FOOTER_BOTTOM_LINKS: string[] = ["Điều khoản", "Bảo mật", "Cookies"];

export const FOOTER_DESC =
  "Đối tác tin cậy cung cấp giải pháp Công nghệ thông tin toàn diện, giúp doanh nghiệp bứt phá trong kỷ nguyên số.";
