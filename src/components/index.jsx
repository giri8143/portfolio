// SkillsMarquee.jsx
const TECHS_ROW1 = [
  {
    name: "React.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Redux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "SCSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  {
    name: "Angular",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Vue.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
];

const TECHS_ROW2 = [
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    invert: true,
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Linux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    name: "Postman",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  { name: "REST APIs", logo: null, color: "#f97316", letter: "API" },
];

function Pill({ tech, dark }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "9px 18px",
        borderRadius: 100,
        border: "1px solid var(--border)",
        background: "var(--bg)",
        fontSize: ".8rem",
        fontWeight: 500,
        color: "var(--text)",
        whiteSpace: "nowrap",
      }}
    >
      {tech.logo ? (
        <img
          src={tech.logo}
          alt={tech.name}
          width={20}
          height={20}
          style={{
            objectFit: "contain",
            borderRadius: 3,
            filter: tech.invert && dark ? "invert(1)" : "none",
          }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      ) : (
        <span
          style={{
            width: 20,
            height: 20,
            borderRadius: 5,
            background: tech.color,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 9,
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          {tech.letter}
        </span>
      )}
      {tech.name}
    </div>
  );
}

export function SkillsMarquee({ dark }) {
  const wrapStyle = { position: "relative", overflow: "hidden" };
  const fadeStyle = (dir) => ({
    content: "",
    position: "absolute",
    top: 0,
    bottom: 0,
    zIndex: 2,
    width: 120,
    pointerEvents: "none",
    background: `linear-gradient(to ${dir}, var(--card), transparent)`,
    [dir === "right" ? "left" : "right"]: 0,
  });

  return (
    <section
      style={{
        padding: "2.75rem 0",
        overflow: "hidden",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--card)",
      }}
      id="skills"
    >
      <div
        style={{
          textAlign: "center",
          fontSize: ".65rem",
          fontWeight: 600,
          letterSpacing: "3.5px",
          textTransform: "uppercase",
          color: "var(--text2)",
          marginBottom: "1.5rem",
        }}
      >
        Tech Stack
      </div>
      {[TECHS_ROW1, TECHS_ROW2].map((row, i) => (
        <div key={i} style={{ ...wrapStyle, marginBottom: i === 0 ? 10 : 0 }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 120,
              zIndex: 2,
              background: "linear-gradient(to right, var(--card), transparent)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: 120,
              zIndex: 2,
              background: "linear-gradient(to left, var(--card), transparent)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              display: "flex",
              width: "max-content",
              gap: 10,
              animation: `${i === 0 ? "scroll1" : "scroll2"} ${i === 0 ? 45 : 38}s linear infinite`,
            }}
          >
            {[...row, ...row].map((t, j) => (
              <Pill key={j} tech={t} dark={dark} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export function Experience() {
  const projects = [
    {
      icon: "🌐",
      name: "Partner Portal",
      client: "Community Fibre Ltd., UK",
      desc: "Built end-to-end using React.js & Redux. Dashboards with advanced filtering — improved UI responsiveness 20%, API load time 30%. Supported 500+ users across environments.",
      tags: ["React.js", "Redux", "REST APIs", "Figma to UI"],
    },
    {
      icon: "🏢",
      name: "Enterprise Portal",
      client: "Orange Guinee, West Africa",
      desc: "Role-based login system with dynamic API-driven UI rendering based on user permissions.",
      tags: ["React.js", "Role-based Auth", "REST APIs"],
    },
    {
      icon: "⚙️",
      name: "CPQ",
      client: "Community Fibre Ltd., UK",
      desc: "Developed UI screens and integrated REST APIs to support configure, price & quote business workflows.",
      tags: ["React.js", "API Integration"],
    },
    {
      icon: "🔗",
      name: "CIRCUIT",
      client: "Internal Platform",
      desc: "API orchestration platform — configured chaining and JS response transformation, reducing frontend API calls.",
      tags: ["API Orchestration", "JavaScript"],
    },
    {
      icon: "🛒",
      name: "Fabricator",
      client: "Internal Tool",
      desc: "Configured products, offers and discounts from client Excel data — streamlined internal product setup pipeline.",
      tags: ["React.js", "Configuration"],
    },
  ];

  return (
    <section className="section" id="exp">
      <div className="sec-label">Work History</div>
      <div className="sec-title">Experience</div>

      <div
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 22,
          padding: "2.25rem",
          position: "relative",
          marginBottom: "1.5rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 3,
            background:
              "linear-gradient(to bottom,var(--accent),var(--accent3))",
            borderRadius: "0 3px 3px 0",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: ".4rem",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "1.15rem",
                fontWeight: 800,
                color: "var(--text)",
              }}
            >
              Tata Consultancy Services
            </div>
            <div
              style={{
                fontSize: ".83rem",
                color: "var(--accent)",
                fontWeight: 500,
                marginBottom: ".65rem",
              }}
            >
              Assistant System Engineer — Frontend Developer
            </div>
          </div>
          <div
            style={{
              fontSize: ".72rem",
              color: "var(--text2)",
              background: "var(--bg)",
              padding: "4px 13px",
              borderRadius: 100,
              border: "1px solid var(--border)",
              whiteSpace: "nowrap",
              height: "fit-content",
            }}
          >
            Sep 2022 – Present · Ahmedabad
          </div>
        </div>
        <p
          style={{
            fontSize: ".86rem",
            color: "var(--text2)",
            lineHeight: 1.75,
            marginBottom: "1.25rem",
          }}
        >
          Delivered production-grade web applications for global clients. Built
          responsive UI screens from Figma designs, integrated REST APIs, and
          managed deployments across DEV → SIT → UAT → Production supporting
          500+ users with zero critical issues.
        </p>
        <div className="tags">
          {[
            "React.js",
            "TypeScript",
            "Redux",
            "REST APIs",
            "Tailwind CSS",
            "SCSS",
            "Figma to UI",
            "Agile/Scrum",
          ].map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <div
          style={{
            fontSize: ".63rem",
            fontWeight: 600,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "var(--text2)",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          Projects at TCS
          <span
            style={{
              flex: 1,
              height: 1,
              background: "var(--border)",
              display: "block",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {projects.map((p) => (
            <div
              key={p.name}
              style={{
                background: "var(--proj-bg)",
                border: "1px solid var(--border)",
                borderRadius: 14,
                padding: "1.1rem 1.25rem",
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  flexShrink: 0,
                  borderRadius: 10,
                  background: "var(--tag-bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 17,
                }}
              >
                {p.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 6,
                    marginBottom: 4,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontSize: ".9rem",
                      fontWeight: 700,
                      color: "var(--text)",
                    }}
                  >
                    {p.name}
                  </div>
                  <span
                    style={{
                      fontSize: ".67rem",
                      fontWeight: 600,
                      color: "var(--accent)",
                      background: "var(--tag-bg)",
                      padding: "3px 10px",
                      borderRadius: 100,
                    }}
                  >
                    {p.client}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: ".78rem",
                    color: "var(--text2)",
                    lineHeight: 1.65,
                    marginBottom: 8,
                  }}
                >
                  {p.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: ".65rem",
                        fontWeight: 500,
                        padding: "3px 9px",
                        borderRadius: 100,
                        background: "var(--border)",
                        color: "var(--text2)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 22,
          padding: "2.25rem",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 3,
            background:
              "linear-gradient(to bottom,var(--accent),var(--accent3))",
            borderRadius: "0 3px 3px 0",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: ".4rem",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "1.15rem",
                fontWeight: 800,
                color: "var(--text)",
              }}
            >
              Tata Technologies
            </div>
            <div
              style={{
                fontSize: ".83rem",
                color: "var(--accent)",
                fontWeight: 500,
              }}
            >
              PLM Intern
            </div>
          </div>
          <div
            style={{
              fontSize: ".72rem",
              color: "var(--text2)",
              background: "var(--bg)",
              padding: "4px 13px",
              borderRadius: 100,
              border: "1px solid var(--border)",
              whiteSpace: "nowrap",
              height: "fit-content",
            }}
          >
            Jan 2020 – Mar 2020 · Hyderabad
          </div>
        </div>
        <p
          style={{
            fontSize: ".86rem",
            color: "var(--text2)",
            lineHeight: 1.75,
            marginBottom: "1.25rem",
            marginTop: ".65rem",
          }}
        >
          Worked on Product Lifecycle Management tools including BOM and change
          management workflows.
        </p>
        <div className="tags">
          {["PLM Tools", "BOM Management", "Change Management"].map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section className="section" id="edu" style={{ paddingTop: 0 }}>
      <div className="sec-label">Academics</div>
      <div className="sec-title">Education</div>
      <div
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 18,
          padding: "1.75rem",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: 14,
            background: "var(--tag-bg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 26,
            flexShrink: 0,
          }}
        >
          🎓
        </div>
        <div>
          <div
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: "1.05rem",
              fontWeight: 700,
              color: "var(--text)",
              marginBottom: 3,
            }}
          >
            MLR Institute of Technology
          </div>
          <div
            style={{
              fontSize: ".83rem",
              color: "var(--text2)",
              marginBottom: 4,
            }}
          >
            Bachelor of Technology — Mechanical Engineering
          </div>
          <div
            style={{
              fontSize: ".75rem",
              color: "var(--accent)",
              fontWeight: 600,
            }}
          >
            Jul 2017 – Jun 2021 · GPA: 7.0 / 10
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section
      style={{
        background: "var(--card)",
        borderTop: "1px solid var(--border)",
        padding: "5.5rem 2rem",
        textAlign: "center",
      }}
      id="contact"
    >
      <div style={{ maxWidth: 540, margin: "0 auto" }}>
        <div className="sec-label" style={{ textAlign: "center" }}>
          Get in touch
        </div>
        <div
          className="sec-title"
          style={{ textAlign: "center", marginBottom: "1rem" }}
        >
          Let's build
          <br />
          something great
        </div>
        <p
          style={{ color: "var(--text2)", fontSize: ".9rem", lineHeight: 1.75 }}
        >
          Open to Frontend Developer roles focused on UI development and API
          integration. Feel free to reach out!
        </p>
        <a
          href="mailto:giridontala9848@gmail.com"
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "1.35rem",
            fontWeight: 800,
            color: "var(--accent)",
            margin: "1.5rem 0",
            display: "block",
            textDecoration: "none",
          }}
        >
          giridontala9848@gmail.com
        </a>
        <p style={{ color: "var(--text2)", fontSize: ".82rem" }}>
          📞 7337473154 &nbsp;·&nbsp; 📍 Hyderabad, India
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            marginTop: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://www.linkedin.com/in/giri-dontala-19b148198"
            className="btn-outline"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="mailto:giridontala9848@gmail.com" className="btn-primary">
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}
