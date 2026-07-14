import { Button } from "@mantine/core";
import { HeaderControls } from "@/components/header-controls";
import { LocalizedText } from "@/components/localized-text";
import { contact, credentials, experiences, metrics, navigation, projects, skillGroups } from "@/data/portfolio";
import styles from "./page.module.css";

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
    <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a className={styles.skipLink} href="#main">Skip to content</a>
      <header className={styles.siteHeader}>
        <div className={styles.headerInner}>
          <a className={styles.brand} href="#top" aria-label="Le Anh Tuan — Home">
            <span className={styles.brandMark}>LT</span>
            <span className={styles.brandText}><strong>Le Anh Tuan</strong><small>Frontend Developer</small></span>
          </a>
          <nav className={styles.desktopNav} aria-label="Primary navigation">
            {navigation.slice(0, 4).map((item) => <a key={item.href} href={item.href}><LocalizedText text={item.label} /></a>)}
          </nav>
          <HeaderControls />
        </div>
      </header>

      <main id="main">
        <section className={styles.hero} id="top" aria-labelledby="hero-title">
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <div className={styles.availability}><span /><span data-copy="en">Available for select opportunities</span><span data-copy="vi">Sẵn sàng cho cơ hội phù hợp</span></div>
              <h1 id="hero-title">
                <span data-copy="en">I craft fast, thoughtful <em>digital products.</em></span>
                <span data-copy="vi">Tôi kiến tạo sản phẩm số <em>nhanh và tinh tế.</em></span>
              </h1>
              <p className={styles.heroLead}>
                <span data-copy="en">Frontend engineer specializing in React and Next.js — turning complex requirements into clear, scalable experiences.</span>
                <span data-copy="vi">Kỹ sư Frontend chuyên React và Next.js — biến yêu cầu phức tạp thành trải nghiệm rõ ràng, có khả năng mở rộng.</span>
              </p>
              <div className={styles.heroActions}>
                <Button component="a" href="#work" size="lg" className={styles.primaryButton} rightSection={<ArrowIcon />}>
                  <span data-copy="en">View selected work</span><span data-copy="vi">Xem dự án tiêu biểu</span>
                </Button>
                <Button component="a" href="/le-anh-tuan-cv.pdf" download variant="subtle" size="lg" className={styles.secondaryButton}>
                  <span data-copy="en">Download CV</span><span data-copy="vi">Tải CV</span>
                  <svg aria-hidden="true" viewBox="0 0 20 20" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M10 3v10M6 9l4 4 4-4M4 17h12" /></svg>
                </Button>
              </div>
              <div className={styles.heroMeta}>
                <div><span>BASED IN</span><strong>Ha Noi, Vietnam</strong></div>
                <div><span>FOCUS</span><strong>React · Next.js · Performance</strong></div>
              </div>
            </div>

            <div className={styles.portraitCard}>
              <div className={styles.portraitTop}><span>PORTRAIT / 2026</span><span>01</span></div>
              <div className={styles.portraitCanvas} role="img" aria-label="Portrait placeholder for Le Anh Tuan">
                <div className={styles.orbit} /><div className={styles.orbitSmall} />
                <div className={styles.portraitMonogram}>LAT</div>
                <span className={styles.coordinate}>21.0285° N<br />105.8542° E</span>
              </div>
              <div className={styles.portraitBottom}><span data-copy="en">Your next frontend partner</span><span data-copy="vi">Đối tác frontend tiếp theo của bạn</span><i /></div>
            </div>
          </div>
          <div className={styles.metricBar}>
            {metrics.map((metric) => <div key={metric.value}><strong>{metric.value}</strong><span><LocalizedText text={metric.label} /></span></div>)}
          </div>
        </section>

        <section className={styles.about} id="about" aria-labelledby="about-title">
          <div className={styles.sectionIntro}><span>01</span><p><LocalizedText text={{ en: "About & approach", vi: "Giới thiệu & cách làm" }} /></p></div>
          <div className={styles.aboutGrid}>
            <h2 id="about-title">
              <span data-copy="en">Good interfaces feel simple.<br />The engineering behind them rarely is.</span>
              <span data-copy="vi">Giao diện tốt luôn dễ dùng.<br />Kỹ thuật phía sau thì không hề đơn giản.</span>
            </h2>
            <div className={styles.aboutCopy}>
              <p data-copy="en">I build production interfaces where usability, performance, and maintainability reinforce each other. My experience spans B2B systems, REST API integration, responsive architecture, and cross-team product delivery.</p>
              <p data-copy="vi">Tôi xây dựng giao diện thực tế nơi tính dễ dùng, hiệu năng và khả năng bảo trì hỗ trợ lẫn nhau. Kinh nghiệm của tôi trải rộng từ hệ thống B2B, tích hợp REST API đến kiến trúc responsive và phát triển sản phẩm liên nhóm.</p>
              <p data-copy="en">I am growing toward full-stack engineering to own more of the product journey — from the first interaction to long-term system decisions.</p>
              <p data-copy="vi">Tôi đang phát triển theo hướng Fullstack để làm chủ nhiều hơn hành trình sản phẩm — từ tương tác đầu tiên đến các quyết định hệ thống dài hạn.</p>
              <a href="#experience"><span data-copy="en">Explore my experience</span><span data-copy="vi">Khám phá kinh nghiệm</span><ArrowIcon /></a>
            </div>
          </div>
          <div className={styles.principles}>
            <article><span>01</span><h3><LocalizedText text={{ en: "Clarity first", vi: "Rõ ràng trước tiên" }} /></h3><p><LocalizedText text={{ en: "Reduce friction before adding decoration.", vi: "Giảm ma sát trước khi thêm trang trí." }} /></p></article>
            <article><span>02</span><h3><LocalizedText text={{ en: "Performance is UX", vi: "Hiệu năng là UX" }} /></h3><p><LocalizedText text={{ en: "Fast experiences earn trust immediately.", vi: "Trải nghiệm nhanh tạo niềm tin tức thì." }} /></p></article>
            <article><span>03</span><h3><LocalizedText text={{ en: "Built to evolve", vi: "Sẵn sàng phát triển" }} /></h3><p><LocalizedText text={{ en: "Scalable decisions over short-lived fixes.", vi: "Quyết định bền vững hơn bản vá ngắn hạn." }} /></p></article>
          </div>
        </section>

        <section className={styles.work} id="work" aria-labelledby="work-title">
          <div className={styles.sectionIntroLight}><span>02</span><p><LocalizedText text={{ en: "Selected work", vi: "Dự án tiêu biểu" }} /></p></div>
          <div className={styles.workHeading}>
            <h2 id="work-title"><span data-copy="en">Work that moves<br />the metric.</span><span data-copy="vi">Sản phẩm tạo nên<br />kết quả.</span></h2>
            <p><span data-copy="en">A focused selection of production and academic work — judged by outcomes, not decoration.</span><span data-copy="vi">Một số dự án thực tế và học thuật tiêu biểu — được đánh giá bằng kết quả, không chỉ hình thức.</span></p>
          </div>
          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <article className={styles.projectCard} key={project.id}>
                <div className={styles.projectArtwork}>
                  <span className={styles.projectNumber}>0{index + 1}</span>
                  {index === 0 ? <div className={styles.performanceGraph}><i /><i /><i /><i /><b>+10–20%</b></div> : <div className={styles.clinicVisual}><i /><i /><i /><b>4H</b></div>}
                  <span className={styles.projectType}><LocalizedText text={project.eyebrow} /></span>
                </div>
                <div className={styles.projectBody}>
                  <div><h3>{project.title}</h3><p><LocalizedText text={project.summary} /></p></div>
                  <p className={styles.projectImpact}><LocalizedText text={project.impact} /></p>
                  <ul>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
                  {project.href ? <a href={project.href} target="_blank" rel="noreferrer"><span data-copy="en">Open repository</span><span data-copy="vi">Mở repository</span><ArrowIcon /></a> : <span className={styles.privateTag}>PRIVATE CASE STUDY</span>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.experience} id="experience" aria-labelledby="experience-title">
          <div className={styles.sectionIntro}><span>03</span><p><LocalizedText text={{ en: "Experience", vi: "Kinh nghiệm" }} /></p></div>
          <div className={styles.experienceLayout}>
            <div className={styles.experienceSticky}><h2 id="experience-title"><span data-copy="en">Where I have<br />made an impact.</span><span data-copy="vi">Nơi tôi đã<br />tạo dấu ấn.</span></h2><p><span data-copy="en">From internship recognition to production performance improvements.</span><span data-copy="vi">Từ thành tích thực tập đến những cải tiến hiệu năng trong sản phẩm thực tế.</span></p></div>
            <div className={styles.timeline}>
              {experiences.map((experience, index) => (
                <article key={experience.id}>
                  <div className={styles.timelineTop}><span>0{index + 1}</span><time><LocalizedText text={experience.period} /></time></div>
                  <h3><LocalizedText text={experience.role} /></h3><p className={styles.company}>{experience.company}</p>
                  <ul>{experience.highlights.map((highlight) => <li key={highlight.en}><LocalizedText text={highlight} /></li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.credentials} id="credentials" aria-labelledby="credentials-title">
          <div className={styles.sectionIntro}><span>04</span><p><LocalizedText text={{ en: "Capabilities", vi: "Năng lực" }} /></p></div>
          <div className={styles.capabilityHeader}><h2 id="credentials-title"><span data-copy="en">A practical toolkit<br />for digital products.</span><span data-copy="vi">Bộ công cụ thực tế<br />cho sản phẩm số.</span></h2><p><span data-copy="en">Technology is a means. The outcome is a product that remains clear, fast, and easy to evolve.</span><span data-copy="vi">Công nghệ là phương tiện. Kết quả là sản phẩm rõ ràng, nhanh và dễ phát triển lâu dài.</span></p></div>
          <div className={styles.capabilityGrid}>
            {skillGroups.map((group, index) => <article key={group.title.en} className={styles.skillCard}><span>0{index + 1}</span><h3><LocalizedText text={group.title} /></h3><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}
            <article className={styles.educationCard}>
              <span className={styles.educationLabel}><LocalizedText text={{ en: "Education & beyond", vi: "Học vấn & hoạt động" }} /></span>
              {credentials.map((credential) => <div key={credential.title.en}><h3><LocalizedText text={credential.title} /></h3><p><LocalizedText text={credential.detail} /></p></div>)}
            </article>
          </div>
        </section>

        <section className={styles.contact} id="contact" aria-labelledby="contact-title">
          <div className={styles.contactOrb} aria-hidden="true" />
          <div className={styles.contactInner}>
            <div className={styles.contactLabel}><span /><LocalizedText text={{ en: "Let’s build something useful", vi: "Cùng tạo nên điều hữu ích" }} /></div>
            <h2 id="contact-title"><span data-copy="en">Have a project<br />worth discussing?</span><span data-copy="vi">Bạn có dự án<br />đáng để trao đổi?</span></h2>
            <a className={styles.emailLink} href={`mailto:${contact.email}`}>{contact.email}<ArrowIcon /></a>
            <address>
              <a href={`tel:${contact.phone}`}><small>PHONE</small>{contact.displayPhone}</a>
              <div><small>LOCATION</small><LocalizedText text={contact.location} /></div>
              <a href="/le-anh-tuan-cv.pdf" download><small>DOCUMENT</small><span data-copy="en">Download CV</span><span data-copy="vi">Tải CV</span></a>
            </address>
          </div>
        </section>
      </main>

      <footer className={styles.footer}><span>© {new Date().getFullYear()} Le Anh Tuan</span><span>Designed & engineered with care</span><a href="#top">Back to top ↑</a></footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }} />
    </>
  );
}
