export default function Hero() {
  const downloadResume = () => {
    const a = document.createElement("a");
    a.href = "#";
    a.click();
  };

  return (
    <section
      style={{
        minHeight: "91vh",
        display: "flex",
        alignItems: "center",
        padding: "5rem 2rem",
        maxWidth: 1140,
        margin: "0 auto",
        gap: "5rem",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: 1, minWidth: 280 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            border: "1px solid var(--border2)",
            background: "var(--tag-bg)",
            color: "var(--accent)",
            fontSize: ".72rem",
            fontWeight: 600,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            padding: "6px 16px",
            borderRadius: 100,
            marginBottom: "1.75rem",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#4ade80",
              animation: "pulse 2s infinite",
              display: "inline-block",
            }}
          />
          Open to opportunities
        </div>

        <h1
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(2.8rem,5.5vw,4.8rem)",
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: -3,
            color: "var(--text)",
            marginBottom: "1.25rem",
          }}
        >
          Frontend
          <br />
          <span style={{ color: "var(--accent)" }}>Developer</span>
          <br />
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: "1.5px var(--accent)",
            }}
          >
            &amp; UI Engineer
          </span>
        </h1>

        <p
          style={{
            fontSize: ".96rem",
            color: "var(--text2)",
            lineHeight: 1.8,
            maxWidth: 460,
            marginBottom: "2rem",
          }}
        >
          I craft pixel-perfect UI screens and wire up REST APIs that just work.
          Specializing in React.js, TypeScript &amp; Redux — building
          responsive, scalable web apps users love.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="mailto:giridontala9848@gmail.com" className="btn-primary">
            Get in touch
          </a>
          <a
            href="www.linkedin.com/in/giri-dontala-19b148198"
            className="btn-outline"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {[
          { num: "3.5+", label: "Years experience" },
          { num: "500+", label: "Users supported" },
          { num: "30%", label: "API load reduced" },
          { num: "5", label: "Production apps" },
        ].map((s) => (
          <div
            key={s.num}
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: 18,
              padding: "1.4rem 1.5rem",
              minWidth: 150,
            }}
          >
            <div
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "2.1rem",
                fontWeight: 800,
                color: "var(--accent)",
                lineHeight: 1,
              }}
            >
              {s.num}
            </div>
            <div
              style={{
                fontSize: ".75rem",
                color: "var(--text2)",
                marginTop: 5,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
