import type {
  Contact,
  Credential,
  Experience,
  Metric,
  NavigationItem,
  Project,
  SkillGroup,
} from "@/types/portfolio";

export const navigation: readonly NavigationItem[] = [
  { href: "#about", label: { en: "About", vi: "Giới thiệu" } },
  { href: "#experience", label: { en: "Experience", vi: "Kinh nghiệm" } },
  { href: "#work", label: { en: "Selected work", vi: "Dự án" } },
  { href: "#credentials", label: { en: "Profile", vi: "Hồ sơ" } },
  { href: "#contact", label: { en: "Contact", vi: "Liên hệ" } },
] as const;

export const metrics: readonly Metric[] = [
  { value: "10–20%", label: { en: "faster page loads", vi: "cải thiện tốc độ tải" } },
  { value: "900", label: { en: "TOEIC Listening & Reading", vi: "TOEIC Nghe & Đọc" } },
  { value: "2024", label: { en: "working in production", vi: "bắt đầu làm sản phẩm thực tế" } },
  { value: "B2B", label: { en: "product experience", vi: "kinh nghiệm sản phẩm" } },
] as const;

export const experiences: readonly Experience[] = [
  {
    id: "cvv",
    role: { en: "Front-end Developer", vi: "Lập trình viên Front-end" },
    company: "Computer Vision Vietnam JSC",
    period: { en: "Oct 2024 — Present", vi: "10/2024 — Hiện tại" },
    highlights: [
      {
        en: "Improved page-load performance by approximately 10–20% through Next.js rendering optimization, code splitting, and focused UI refinements.",
        vi: "Cải thiện khoảng 10–20% tốc độ tải trang qua tối ưu render Next.js, code splitting và tinh chỉnh UI có trọng tâm.",
      },
      {
        en: "Integrated RESTful APIs and worked closely with backend engineers to maintain reliable data exchange and system stability.",
        vi: "Tích hợp RESTful API và phối hợp cùng đội backend để duy trì luồng dữ liệu ổn định, nhất quán.",
      },
      {
        en: "Contributed to sprint planning and cross-team delivery in an Agile/Scrum environment using Git, Jira, and Trello.",
        vi: "Tham gia lập kế hoạch sprint và phối hợp liên nhóm trong môi trường Agile/Scrum với Git, Jira và Trello.",
      },
    ],
  },
  {
    id: "fpt",
    role: { en: "Java Developer Intern", vi: "Thực tập sinh Java" },
    company: "FPT Software",
    period: { en: "Jan 2023 — Apr 2023", vi: "01/2023 — 04/2023" },
    highlights: [
      {
        en: "Completed intensive Java Spring Boot training while strengthening HTML, CSS, JavaScript, SQL, and API integration fundamentals.",
        vi: "Hoàn thành chương trình đào tạo Java Spring Boot chuyên sâu, đồng thời củng cố HTML, CSS, JavaScript, SQL và tích hợp API.",
      },
      {
        en: "Built a full-stack mock application with mentors and teammates; recognized as a Top 3 project and Top 3 individual contributor.",
        vi: "Xây dựng ứng dụng full-stack cùng mentor và đồng đội; đạt Top 3 dự án và Top 3 cá nhân xuất sắc trong kỳ thực tập.",
      },
    ],
  },
] as const;

export const projects: readonly Project[] = [
  {
    id: "performance",
    eyebrow: { en: "01 / Performance system", vi: "01 / Hệ thống hiệu năng" },
    title: "A faster B2B experience",
    summary: {
      en: "A production performance initiative for a B2B web application, presented without confidential product details.",
      vi: "Sáng kiến tối ưu hiệu năng cho ứng dụng web B2B thực tế, được trình bày không kèm thông tin sản phẩm nội bộ.",
    },
    impact: {
      en: "Combined rendering improvements, code splitting, lazy loading, and responsive component refinements to reduce page-load time by about 10–20%.",
      vi: "Kết hợp tối ưu render, code splitting, lazy loading và cải tiến component responsive để giảm khoảng 10–20% thời gian tải trang.",
    },
    technologies: ["Next.js", "React", "REST APIs", "Performance"],
  },
  {
    id: "4health",
    eyebrow: { en: "02 / Capstone project", vi: "02 / Đồ án tốt nghiệp" },
    title: "4Health Clinic Booking",
    summary: {
      en: "A web application for booking and managing clinic services, designed from interface prototype through implementation.",
      vi: "Ứng dụng web đặt lịch và quản lý dịch vụ phòng khám, được phát triển từ prototype giao diện đến triển khai.",
    },
    impact: {
      en: "Designed responsive flows in Figma, built a PWA with Blazor WebAssembly, and handled foundational SQL operations for a complete booking journey.",
      vi: "Thiết kế luồng responsive trên Figma, xây dựng PWA bằng Blazor WebAssembly và xử lý các thao tác SQL nền tảng cho hành trình đặt lịch hoàn chỉnh.",
    },
    technologies: ["Blazor", "WebAssembly", "PWA", "SQL", "Figma"],
    href: "https://github.com/datnht2602/Booking-Clinic.git",
  },
] as const;

export const skillGroups: readonly SkillGroup[] = [
  { title: { en: "Interface engineering", vi: "Kỹ thuật giao diện" }, skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
  { title: { en: "Product delivery", vi: "Phát triển sản phẩm" }, skills: ["Redux", "React Query", "REST APIs", "Responsive Design", "Web Performance"] },
  { title: { en: "Collaboration", vi: "Cộng tác" }, skills: ["Git", "Figma", "Agile / Scrum", "Jira", "Trello"] },
] as const;

export const credentials: readonly Credential[] = [
  {
    title: { en: "BSc in Information Technology", vi: "Cử nhân Công nghệ Thông tin" },
    detail: { en: "FPT University · 2020–2024 · GPA 7.19/10", vi: "Đại học FPT · 2020–2024 · GPA 7.19/10" },
  },
  {
    title: { en: "User Experience Research and Design", vi: "Nghiên cứu và Thiết kế Trải nghiệm Người dùng" },
    detail: { en: "Coursera · November 2023", vi: "Coursera · 11/2023" },
  },
  {
    title: { en: "Web Design for Everybody", vi: "Web Design for Everybody" },
    detail: { en: "Coursera · March 2022", vi: "Coursera · 03/2022" },
  },
  {
    title: { en: "Technology Team Volunteer", vi: "Tình nguyện viên Đội Công nghệ" },
    detail: { en: "Vietnam Museum of Ethnology · February 2025", vi: "Bảo tàng Dân tộc học Việt Nam · 02/2025" },
  },
] as const;

export const contact: Contact = {
  email: "tuanlea22@gmail.com",
  phone: "+84948796341",
  displayPhone: "+84 948 796 341",
  location: { en: "Phuong Liet Ward, Ha Noi, Vietnam", vi: "Phường Phương Liệt, Hà Nội, Việt Nam" },
};
