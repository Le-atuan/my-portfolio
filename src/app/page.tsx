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

export default function Home() {
  return (
    <>
      <a className={styles.skipLink} href="#main">Skip to content</a>
      <header className={styles.siteHeader}>
        <a className={styles.wordmark} href="#top" aria-label="Le Anh Tuan — Home">
          <span>LAT</span><span>/26</span>
        </a>
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}><LocalizedText text={item.label} /></a>
          ))}
        </nav>
        <HeaderControls />
      </header>

      <main id="main">
        <section className={styles.hero} id="top" aria-labelledby="hero-title">
          <div className={styles.heroIndex} aria-hidden="true">PORTFOLIO / 2026</div>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span className={styles.liveDot} /> Available for meaningful work</p>
            <h1 id="hero-title">LE ANH<br /><span>TUAN</span></h1>
            <p className={styles.heroStatement}>
              <span data-copy="en">Frontend engineer shaping complex systems into fast, clear digital experiences.</span>
              <span data-copy="vi">Kỹ sư Frontend biến hệ thống phức tạp thành trải nghiệm số nhanh, rõ ràng.</span>
            </p>
            <div className={styles.heroActions}>
              <Button component="a" href="#work" size="lg" className={styles.primaryButton}>
                <span data-copy="en">Explore selected work</span><span data-copy="vi">Khám phá dự án</span>
              </Button>
              <Button component="a" href="/le-anh-tuan-cv.pdf" download variant="subtle" size="lg" className={styles.textButton}>
                <span data-copy="en">Download CV ↓</span><span data-copy="vi">Tải CV ↓</span>
              </Button>
            </div>
          </div>
          <div className={styles.portraitPlaceholder} role="img" aria-label="Portrait placeholder for Le Anh Tuan">
            <div className={styles.portraitGrid} />
            <div className={styles.initials}>LAT</div>
            <div className={styles.portraitNote}>
              <span>PORTRAIT</span><span>COMING SOON</span>
            </div>
          </div>
          <div className={styles.heroSideNote}>
            <span>REACT / NEXT.JS</span><span>HANOI, VIETNAM</span>
          </div>
        </section>

        <section className={styles.metrics} aria-label="Professional highlights">
          {metrics.map((metric, index) => (
            <div key={metric.value} className={styles.metric}>
              <span className={styles.metricIndex}>{String(index + 1).padStart(2, "0")}</span>
              <strong>{metric.value}</strong>
              <span><LocalizedText text={metric.label} /></span>
            </div>
          ))}
        </section>

        <section className={styles.about} id="about" aria-labelledby="about-title">
          <div className={styles.sectionLabel}>01 — <LocalizedText text={{ en: "About", vi: "Giới thiệu" }} /></div>
          <div className={styles.aboutBody}>
            <h2 id="about-title">
              <span data-copy="en">Building the front. Learning the whole system.</span>
              <span data-copy="vi">Làm chủ giao diện. Tiến tới toàn bộ hệ thống.</span>
            </h2>
            <div className={styles.aboutText}>
              <p data-copy="en">I specialize in React and Next.js for scalable B2B applications. My work sits where interface craft, performance, and dependable engineering meet.</p>
              <p data-copy="vi">Tôi chuyên React và Next.js cho các ứng dụng B2B có khả năng mở rộng. Công việc của tôi nằm tại giao điểm giữa trải nghiệm giao diện, hiệu năng và kỹ thuật đáng tin cậy.</p>
              <p data-copy="en">Now I am expanding toward full-stack development — connecting thoughtful UI/UX decisions with backend knowledge and long-term system architecture.</p>
              <p data-copy="vi">Hiện tại, tôi đang phát triển theo hướng Fullstack — kết nối các quyết định UI/UX có chủ đích với kiến thức backend và kiến trúc hệ thống dài hạn.</p>
            </div>
          </div>
        </section>

        <section className={styles.experience} id="experience" aria-labelledby="experience-title">
          <div className={styles.sectionLabel}>02 — <LocalizedText text={{ en: "Experience", vi: "Kinh nghiệm" }} /></div>
          <h2 id="experience-title" className={styles.sectionTitle}>
            <span data-copy="en">Production notes</span><span data-copy="vi">Dấu ấn thực tế</span>
          </h2>
          <div className={styles.timeline}>
            {experiences.map((experience, index) => (
              <article className={styles.timelineItem} key={experience.id}>
                <div className={styles.timelineMeta}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <time><LocalizedText text={experience.period} /></time>
                </div>
                <div className={styles.timelineContent}>
                  <h3><LocalizedText text={experience.role} /></h3>
                  <p className={styles.company}>{experience.company}</p>
                  <ul>
                    {experience.highlights.map((highlight) => <li key={highlight.en}><LocalizedText text={highlight} /></li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.work} id="work" aria-labelledby="work-title">
          <div className={styles.sectionLabel}>03 — <LocalizedText text={{ en: "Selected work", vi: "Dự án tiêu biểu" }} /></div>
          <h2 id="work-title" className={styles.sectionTitle}>
            <span data-copy="en">Evidence over decoration.</span><span data-copy="vi">Hiệu quả hơn trang trí.</span>
          </h2>
          <div className={styles.projectList}>
            {projects.map((project, index) => (
              <article className={styles.project} key={project.id}>
                <div className={styles.projectVisual} aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div className={styles.projectDiagram}>
                    <i /><i /><i /><i />
                  </div>
                </div>
                <div className={styles.projectCopy}>
                  <p className={styles.projectEyebrow}><LocalizedText text={project.eyebrow} /></p>
                  <h3>{project.title}</h3>
                  <p className={styles.projectSummary}><LocalizedText text={project.summary} /></p>
                  <p><LocalizedText text={project.impact} /></p>
                  <ul className={styles.techList} aria-label="Technologies">
                    {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                  {project.href ? <a className={styles.caseLink} href={project.href} target="_blank" rel="noreferrer">View repository ↗</a> : <span className={styles.privateLabel}>CONFIDENTIAL / ANONYMIZED</span>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.credentials} id="credentials" aria-labelledby="credentials-title">
          <div className={styles.sectionLabel}>04 — <LocalizedText text={{ en: "Profile", vi: "Hồ sơ" }} /></div>
          <h2 id="credentials-title" className={styles.sectionTitle}>
            <span data-copy="en">Tools, learning, perspective.</span><span data-copy="vi">Công cụ, học hỏi, góc nhìn.</span>
          </h2>
          <div className={styles.profileGrid}>
            <div className={styles.skillsColumn}>
              {skillGroups.map((group) => (
                <div className={styles.skillGroup} key={group.title.en}>
                  <h3><LocalizedText text={group.title} /></h3>
                  <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                </div>
              ))}
            </div>
            <div className={styles.credentialList}>
              {credentials.map((credential, index) => (
                <article key={credential.title.en}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3><LocalizedText text={credential.title} /></h3><p><LocalizedText text={credential.detail} /></p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.contact} id="contact" aria-labelledby="contact-title">
          <div className={styles.contactHeader}>
            <div className={styles.sectionLabel}>05 — <LocalizedText text={{ en: "Contact", vi: "Liên hệ" }} /></div>
            <span className={styles.contactStatus}><i /> OPEN TO CONVERSATIONS</span>
          </div>
          <div className={styles.contactMain}>
            <h2 id="contact-title">
              <span data-copy="en">Have a role, a product, or a hard problem?</span>
              <span data-copy="vi">Bạn có vị trí, sản phẩm hay bài toán khó?</span>
            </h2>
            <a className={styles.emailLink} href={`mailto:${contact.email}`}>{contact.email} ↗</a>
          </div>
          <address className={styles.contactDetails}>
            <a href={`tel:${contact.phone}`}><span>PHONE</span>{contact.displayPhone}</a>
            <a href={`mailto:${contact.email}`}><span>EMAIL</span>{contact.email}</a>
            <div><span>LOCATION</span><LocalizedText text={contact.location} /></div>
          </address>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Le Anh Tuan. All rights reserved.</span>
        <a href="#top">Back to top ↑</a>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }} />
    </>
  );
}
