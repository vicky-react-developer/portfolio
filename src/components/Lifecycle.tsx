import { useState } from "react";
import { lifecycleSteps } from "../data";

export default function Lifecycle() {
  const [cur, setCur] = useState(0);
  const last = lifecycleSteps.length - 1;

  return (
    <div className="life">
      <h4>Appointment lifecycle</h4>
      <small>Step through how one booking moves between roles.</small>
      <ol className="steps">
        {lifecycleSteps.map((s, i) => (
          <li key={s.t} className={i < cur ? "done" : i === cur ? "now" : undefined}>
            <span className="dot" />
            <span>{s.t}</span>
            <span className="who">{s.w}</span>
          </li>
        ))}
      </ol>
      <button type="button" onClick={() => setCur(cur >= last ? 0 : cur + 1)}>
        {cur >= last ? "Start over" : "Next step"}
      </button>
    </div>
  );
}
