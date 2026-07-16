import Image from "next/image";
import { HeaderControls } from "@/components/header-controls";
import { LocalizedText } from "@/components/localized-text";
import {
  contact,
  credentials,
  experiences,
  metrics,
  navigation,
  projects,
  skillGroups,
} from "@/data/portfolio";
import { portrait } from "@/data/portrait";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Le Anh Tuan",
  jobTitle: "Frontend Developer",
  email: `mailto:${contact.email}`,
  telephone: contact.phone,
  address: { "@type": "PostalAddress", addressLocality: "Ha Noi", addressCountry: "VN" },
  knowsAbout: ["React", "Next.js", "TypeScript", "Web Performance", "Responsive Design"],
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}
const Label = ({ number, en, vi }: { number: string; en: string; vi: string }) => (
  <div className="section-label">
    <span>{number}</span>
    <LocalizedText text={{ en, vi }} />
  </div>
);

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Le Anh Tuan — Home">
            <span>LT</span>
            <span>
              <strong>Le Anh Tuan</strong>
              <small>Frontend Developer</small>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                <LocalizedText text={item.label} />
              </a>
            ))}
          </nav>
          <HeaderControls />
        </div>
      </header>

      <main id="main">
        <section className="hero shell" id="top" aria-labelledby="hero-title">
          <div className="hero-copy motion-in">
            <p className="availability">
              <i />
              <span data-copy="en">Available for select opportunities</span>
              <span data-copy="vi">Sẵn sàng cho cơ hội phù hợp</span>
            </p>
            <h1 id="hero-title">
              <span data-copy="en">
                Frontend engineering for products that need to feel <em>clear and fast.</em>
              </span>
              <span data-copy="vi">
                Kỹ thuật frontend cho những sản phẩm cần <em>rõ ràng và nhanh.</em>
              </span>
            </h1>
            <p className="hero-lead">
              <span data-copy="en">
                I turn complex requirements into scalable React and Next.js experiences—with
                performance and usability built in.
              </span>
              <span data-copy="vi">
                Tôi biến yêu cầu phức tạp thành trải nghiệm React và Next.js có khả năng mở rộng—với
                hiệu năng và tính dễ dùng ngay từ nền tảng.
              </span>
            </p>
            <div className="actions">
              <a className="button primary" href="#work">
                <span data-copy="en">Explore selected work</span>
                <span data-copy="vi">Xem dự án tiêu biểu</span>
                <ArrowIcon />
              </a>
              <a className="button secondary" href="/le-anh-tuan-cv.pdf" download>
                <span data-copy="en">Download CV</span>
                <span data-copy="vi">Tải CV</span>
              </a>
            </div>
            <dl className="hero-meta">
              <div>
                <dt>BASED IN</dt>
                <dd>Ha Noi, Vietnam</dd>
              </div>
              <div>
                <dt>FOCUS</dt>
                <dd>React · Next.js · Performance</dd>
              </div>
            </dl>
          </div>
          <div className="portrait-card motion-in delay-1">
            <div className="frame-label">
              <span>PORTRAIT / 2026</span>
              <span>01</span>
            </div>
            <div className="portrait-canvas">
              {portrait.image ? (
                <>
                  <span className="portrait-image-wrap" data-copy="en">
                    <Image
                      src={portrait.image}
                      alt={portrait.alt.en}
                      fill
                      sizes="(max-width: 767px) 92vw, 38vw"
                      className="portrait-image"
                    />
                  </span>
                  <span className="portrait-image-wrap" data-copy="vi">
                    <Image
                      src={portrait.image}
                      alt={portrait.alt.vi}
                      fill
                      sizes="(max-width: 767px) 92vw, 38vw"
                      className="portrait-image"
                    />
                  </span>
                </>
              ) : (
                <div className="portrait-placeholder" aria-hidden="true">
                  <span>LAT</span>
                  <i />
                  <i />
                </div>
              )}
            </div>
            <p>
              <span data-copy="en">Frontend developer · Ha Noi</span>
              <span data-copy="vi">Lập trình viên Frontend · Hà Nội</span>
            </p>
          </div>
        </section>

        <section className="work section dark-section" id="work" aria-labelledby="work-title">
          <div className="shell">
            <Label number="01" en="Selected work" vi="Dự án tiêu biểu" />
            <div className="section-heading">
              <h2 id="work-title">
                <span data-copy="en">Proof lives in the work.</span>
                <span data-copy="vi">Năng lực thể hiện qua sản phẩm.</span>
              </h2>
              <p>
                <span data-copy="en">
                  Production and academic work, focused on the decisions and outcomes that mattered.
                </span>
                <span data-copy="vi">
                  Dự án thực tế và học thuật, tập trung vào quyết định và kết quả quan trọng.
                </span>
              </p>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <article className={`project-card project-${index + 1}`} key={project.id}>
                  <div className="project-art" aria-hidden="true">
                    <span>0{index + 1}</span>
                    {index === 0 ? (
                      <div className="bars">
                        <i />
                        <i />
                        <i />
                        <i />
                        <b>+10–20%</b>
                      </div>
                    ) : (
                      <div className="booking-art">
                        <i />
                        <i />
                        <i />
                        <b>4H</b>
                      </div>
                    )}
                  </div>
                  <div className="project-content">
                    <p className="eyebrow">
                      <LocalizedText text={project.eyebrow} />
                    </p>
                    <h3>{project.title}</h3>
                    <p>
                      <LocalizedText text={project.summary} />
                    </p>
                    <blockquote>
                      <LocalizedText text={project.impact} />
                    </blockquote>
                    <ul>
                      {project.technologies.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {project.href ? (
                      <a href={project.href} target="_blank" rel="noreferrer">
                        <span data-copy="en">Open repository</span>
                        <span data-copy="vi">Mở repository</span>
                        <ArrowIcon />
                      </a>
                    ) : (
                      <span className="private-tag">PRIVATE CASE STUDY</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about section shell" id="about" aria-labelledby="about-title">
          <Label number="02" en="About & approach" vi="Giới thiệu & cách làm" />
          <div className="about-grid">
            <div>
              <h2 id="about-title">
                <span data-copy="en">Simple on the surface. Deliberate underneath.</span>
                <span data-copy="vi">Đơn giản ở bề mặt. Có chủ đích ở bên trong.</span>
              </h2>
              <p className="large-copy">
                <span data-copy="en">
                  I build production interfaces where usability, performance, and maintainability
                  reinforce each other. I am growing toward full-stack engineering to own more of
                  the product journey.
                </span>
                <span data-copy="vi">
                  Tôi xây dựng giao diện thực tế nơi tính dễ dùng, hiệu năng và khả năng bảo trì hỗ
                  trợ lẫn nhau. Tôi đang phát triển theo hướng Fullstack để làm chủ nhiều hơn hành
                  trình sản phẩm.
                </span>
              </p>
            </div>
            <div className="metrics">
              {metrics.map((metric) => (
                <div key={metric.value}>
                  <strong>{metric.value}</strong>
                  <span>
                    <LocalizedText text={metric.label} />
                  </span>
                </div>
              ))}
            </div>
          </div>
          <h3 className="subheading">
            <span data-copy="en">What I bring</span>
            <span data-copy="vi">Giá trị tôi mang lại</span>
          </h3>
          <div className="principles">
            <article>
              <span>01</span>
              <h4>
                <LocalizedText text={{ en: "Clarity first", vi: "Rõ ràng trước tiên" }} />
              </h4>
              <p>
                <LocalizedText
                  text={{
                    en: "Reduce friction before adding decoration.",
                    vi: "Giảm ma sát trước khi thêm trang trí.",
                  }}
                />
              </p>
            </article>
            <article>
              <span>02</span>
              <h4>
                <LocalizedText text={{ en: "Performance is UX", vi: "Hiệu năng là UX" }} />
              </h4>
              <p>
                <LocalizedText
                  text={{
                    en: "Fast experiences earn trust immediately.",
                    vi: "Trải nghiệm nhanh tạo niềm tin tức thì.",
                  }}
                />
              </p>
            </article>
            <article>
              <span>03</span>
              <h4>
                <LocalizedText text={{ en: "Built to evolve", vi: "Sẵn sàng phát triển" }} />
              </h4>
              <p>
                <LocalizedText
                  text={{
                    en: "Scalable decisions over short-lived fixes.",
                    vi: "Quyết định bền vững hơn bản vá ngắn hạn.",
                  }}
                />
              </p>
            </article>
          </div>
        </section>

        <section className="experience section" id="experience" aria-labelledby="experience-title">
          <div className="shell">
            <Label number="03" en="Experience" vi="Kinh nghiệm" />
            <div className="experience-grid">
              <div className="sticky-copy">
                <h2 id="experience-title">
                  <span data-copy="en">Building, learning, shipping.</span>
                  <span data-copy="vi">Xây dựng, học hỏi, triển khai.</span>
                </h2>
                <p>
                  <span data-copy="en">
                    From internship recognition to measurable improvements in production.
                  </span>
                  <span data-copy="vi">
                    Từ thành tích thực tập đến cải tiến đo lường được trong sản phẩm thực tế.
                  </span>
                </p>
              </div>
              <div className="timeline">
                {experiences.map((item, index) => (
                  <article key={item.id}>
                    <div>
                      <span>0{index + 1}</span>
                      <time>
                        <LocalizedText text={item.period} />
                      </time>
                    </div>
                    <h3>
                      <LocalizedText text={item.role} />
                    </h3>
                    <p className="company">{item.company}</p>
                    <ul>
                      {item.highlights.map((highlight) => (
                        <li key={highlight.en}>
                          <LocalizedText text={highlight} />
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="credentials section shell"
          id="credentials"
          aria-labelledby="credentials-title"
        >
          <Label number="04" en="Capabilities & credentials" vi="Năng lực & hồ sơ" />
          <div className="section-heading">
            <h2 id="credentials-title">
              <span data-copy="en">A practical toolkit for digital products.</span>
              <span data-copy="vi">Bộ công cụ thực tế cho sản phẩm số.</span>
            </h2>
            <p>
              <span data-copy="en">
                Technology is the means. A clear, fast, maintainable product is the outcome.
              </span>
              <span data-copy="vi">
                Công nghệ là phương tiện. Sản phẩm rõ ràng, nhanh và dễ bảo trì là kết quả.
              </span>
            </p>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <article key={group.title.en}>
                <span>0{index + 1}</span>
                <h3>
                  <LocalizedText text={group.title} />
                </h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="credential-list">
            {credentials.map((item) => (
              <article key={item.title.en}>
                <h3>
                  <LocalizedText text={item.title} />
                </h3>
                <p>
                  <LocalizedText text={item.detail} />
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="contact section dark-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="shell contact-inner">
            <Label number="05" en="Start a conversation" vi="Bắt đầu trao đổi" />
            <h2 id="contact-title">
              <span data-copy="en">Have a useful product to build?</span>
              <span data-copy="vi">Bạn có một sản phẩm hữu ích cần xây dựng?</span>
            </h2>
            <a className="email-link" href={`mailto:${contact.email}`}>
              {contact.email}
              <ArrowIcon />
            </a>
            <address>
              <a href={`tel:${contact.phone}`}>
                <small>PHONE</small>
                {contact.displayPhone}
              </a>
              <div>
                <small>LOCATION</small>
                <LocalizedText text={contact.location} />
              </div>
              <a href="/le-anh-tuan-cv.pdf" download>
                <small>DOCUMENT</small>
                <span data-copy="en">Download CV</span>
                <span data-copy="vi">Tải CV</span>
              </a>
            </address>
          </div>
        </section>
      </main>
      <footer className="footer shell">
        <span>© {new Date().getFullYear()} Le Anh Tuan</span>
        <span>Designed & engineered with care</span>
        <a href="#top">Back to top ↑</a>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
