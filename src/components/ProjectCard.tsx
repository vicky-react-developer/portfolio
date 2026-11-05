import { useState } from "react";
import type { Project, Screen } from "../data";
import Lifecycle from "./Lifecycle";

// Renders nothing if the image file has not been added yet, so missing
// screenshots never show as broken images.
function Shot({ screen }: { screen: Screen }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <figure className={`shot ${screen.kind}`}>
      <a href={screen.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full size: ${screen.alt}`}>
        <img
          src={screen.src}
          alt={screen.alt}
          width={screen.width}
          height={screen.height}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      </a>
      <figcaption>{screen.caption}</figcaption>
    </figure>
  );
}

function Screens({ screens }: { screens: Screen[] }) {
  const web = screens.filter((s) => s.kind === "web");
  const phone = screens.filter((s) => s.kind === "phone");
  return (
    <>
      <div className="screens web-grid">
        {web.map((s) => (
          <Shot key={s.src} screen={s} />
        ))}
      </div>
      <div className={`screens phone-grid${phone.length === 6 ? " cols3" : ""}`}>
        {phone.map((s) => (
          <Shot key={s.src} screen={s} />
        ))}
      </div>
    </>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const features = (
    <ul className="feat">
      {project.features.map((f) => (
        <li key={f.text}>
          {f.label ? <b>{f.label}: </b> : null}
          {f.text}
        </li>
      ))}
    </ul>
  );
  const stack = (
    <div className="stack" aria-label="Technologies">
      {project.stack.map((s) => (
        <span key={s}>{s}</span>
      ))}
    </div>
  );

  return (
    <article className="project">
      <div className="meta">
        {project.tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
      <h3>{project.title}</h3>
      <p>
        {project.summary.map((s, i) => (s.bold ? <b key={i}>{s.text}</b> : <span key={i}>{s.text}</span>))}
      </p>
      <div className="cols">
        <div>
          {features}
          {stack}
          {project.links ? (
            <div className="links">
              {project.links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
        {project.lifecycle ? <Lifecycle /> : null}
      </div>
      {project.screens ? <Screens screens={project.screens} /> : null}
    </article>
  );
}
