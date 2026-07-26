import { useEffect } from 'react'
import './App.css'

const metrics = [
  { value: '5+', label: 'Years building digital products' },
  { value: '20+', label: 'Launches shipped with measurable impact' },
  { value: '100%', label: 'Focused on exceptional UX' },
]

const skills = [
  'React',
  'TypeScript',
  'Node.js',
  'UI Systems',
  'Motion Design',
  'Performance Optimization',
]

const projects = [
  {
    title: 'Nebula Commerce',
    summary: 'A futuristic storefront with immersive storytelling and conversion-first flows.',
    stack: ['React', 'Node', 'Design Systems'],
  },
  {
    title: 'SignalOS Analytics',
    summary: 'A real-time dashboard that turns complex data into calm, strategic decisions.',
    stack: ['TypeScript', 'D3', 'AI Insights'],
  },
  {
    title: 'Pulse Studio',
    summary: 'A motion-rich brand experience that helped a startup launch faster and scale smarter.',
    stack: ['Framer Motion', 'Next.js', 'CMS'],
  },
]

const experience = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Northstar Labs',
    period: '2022 — Present',
    points: ['Led design-system modernization for three flagship products.', 'Improved core web vitals and cut load time by 42%.'],
  },
  {
    role: 'Product Engineer',
    company: 'BrightForge',
    period: '2019 — 2022',
    points: ['Built interactive onboarding journeys with measurable growth uplift.', 'Collaborated with product, design, and growth to ship quickly.'],
  },
]

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.16 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-shell">
      <div className="background-grid" aria-hidden="true" />
      <header className="topbar reveal">
        <a className="brand" href="#home">
          <span className="brand-mark" />
          <span>Portfolio / Resume</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero reveal">
          <div className="hero-copy">
            <p className="eyebrow">Frontend engineer • Product builder • UI systems thinker</p>
            <h1>I create polished digital experiences that feel fast, clear, and unmistakably modern.</h1>
            <p className="hero-text">
              I blend strategy, design, and engineering to turn ambitious ideas into compelling web products with thoughtful motion and measurable impact.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore work</a>
              <a className="button secondary" href="mailto:hello@yourdomain.com">Get in touch</a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-card">
              <p className="panel-label">Current focus</p>
              <h2>High-performance experiences for startups, SaaS, and modern brands.</h2>
            </div>
            <div className="metrics-grid">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section reveal">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Designed for clarity, built for momentum.</h2>
          </div>
          <div className="about-grid">
            <p>
              I’m a multidisciplinary engineer who enjoys building interfaces that feel effortless from the first interaction. My work combines clean architecture, elevated visuals, and strong product thinking to support growth.
            </p>
            <p>
              Whether launching a new idea or refining an established product, I focus on making every experience feel intentional, responsive, and memorable.
            </p>
          </div>
        </section>

        <section id="skills" className="section reveal">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Tools and craft I bring to the work.</h2>
          </div>
          <div className="pill-list">
            {skills.map((skill) => (
              <span key={skill} className="pill">{skill}</span>
            ))}
          </div>
        </section>

        <section id="projects" className="section reveal">
          <div className="section-heading">
            <p className="eyebrow">Selected projects</p>
            <h2>Recent work with a strong visual and product point of view.</h2>
          </div>
          <div className="card-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="chip-row">
                  {project.stack.map((item) => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section reveal">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Execution shaped by collaboration, speed, and detail.</h2>
          </div>
          <div className="timeline-list">
            {experience.map((item) => (
              <article key={item.role} className="timeline-card">
                <div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                </div>
                <span className="period">{item.period}</span>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section reveal">
          <div className="contact-card">
            <p className="eyebrow">Contact</p>
            <h2>Let’s build something exceptional together.</h2>
            <p>Open to freelance collaborations, product partnerships, and exciting full-time opportunities.</p>
            <a className="button primary" href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
