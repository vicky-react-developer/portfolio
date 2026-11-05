import ProjectCard from "./components/ProjectCard";
import { education, experience, facts, profile, projects, skills } from "./data";

export default function App() {
  return (
    <div className="wrap">
      <header className="top">
        <span className="brand">{profile.name}</span>
        <nav aria-label="Sections">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div className="hero">
        <span className="label">{profile.role}</span>
        <h1 style={{ marginTop: 16 }}>{profile.headline}</h1>
        <p className="lead">
          {profile.lead.map((p, i) => (typeof p === "string" ? <span key={i}>{p}</span> : <b key={i}>{p.b}</b>))}
        </p>
        <div className="cta">
          <a className="btn primary" href="#projects">
            See projects
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="facts">
          {facts.map((f) => (
            <span key={f.b}>
              <b>{f.b}</b> {f.rest}
            </span>
          ))}
        </div>
      </div>

      <section id="projects">
        <span className="label">Selected work</span>
        <h2>Projects</h2>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </section>

      <section id="experience">
        <span className="label">Where I have worked</span>
        <h2>Experience</h2>
        <div className="job">
          <div className="when">
            {experience.when[0]}
            <br />
            {experience.when[1]}
          </div>
          <div>
            <h3>{experience.title}</h3>
            <ul>
              {experience.points.map((pt, i) => (
                <li key={i}>
                  {pt.map((s, j) => (s.bold ? <b key={j}>{s.text}</b> : <span key={j}>{s.text}</span>))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="skills">
        <span className="label">Toolbox</span>
        <h2>Skills</h2>
        <div className="skills">
          {skills.map((s) => (
            <div key={s.group}>
              <h3>{s.group}</h3>
              <p>{s.items}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="education">
        <span className="label">Background</span>
        <h2>Education</h2>
        <div className="edu">
          <div className="when">{education.when}</div>
          <div>
            <h3>{education.title}</h3>
            <p>{education.school}</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <span className="label">Open to React Developer roles</span>
        <h2>Contact</h2>
        <div className="big">{profile.email}</div>
        <ul>
          <li>
            <span>Phone</span>
            {profile.phone}
          </li>
          <li>
            <span>LinkedIn</span>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              {profile.linkedin.replace("https://www.", "")}
            </a>
          </li>
          <li>
            <span>GitHub</span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              {profile.github.replace("https://", "")}
            </a>
          </li>
        </ul>
      </section>

      <footer>
        {profile.name} · {profile.role}
      </footer>
    </div>
  );
}
