export default function Nav({ dark, setDark }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  //   const downloadResume = () => {
  //     const resumeHTML = `<!DOCTYPE html>
  // <html lang="en">
  // <head>
  // <meta charset="UTF-8">
  // <title>Giri Dontala - Resume</title>
  // <style>
  //   body { font-family: Arial, sans-serif; max-width: 860px; margin: 40px auto; padding: 0 30px; color: #1a1a1a; line-height: 1.5; }
  //   h1 { font-size: 2rem; margin-bottom: 4px; }
  //   .subtitle { color: #555; font-size: 1rem; margin-bottom: 6px; }
  //   .contact { font-size: .85rem; color: #555; margin-bottom: 20px; }
  //   h2 { font-size: 1rem; text-transform: uppercase; letter-spacing: 2px; border-bottom: 2px solid #7c3aed; padding-bottom: 4px; margin: 24px 0 12px; color: #7c3aed; }
  //   .exp-header { display: flex; justify-content: space-between; }
  //   .company { font-weight: 700; font-size: .95rem; }
  //   .role { color: #7c3aed; font-size: .85rem; }
  //   .period { font-size: .8rem; color: #777; }
  //   ul { padding-left: 18px; margin-top: 6px; }
  //   li { font-size: .85rem; margin-bottom: 4px; }
  //   .skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
  //   .skill-item { font-size: .82rem; padding: 4px 10px; background: #f3f0ff; border-radius: 4px; color: #5b21b6; }
  //   .proj { margin: 8px 0; }
  //   .proj-name { font-weight: 700; font-size: .88rem; }
  //   .proj-client { font-size: .78rem; color: #7c3aed; }
  //   .proj-desc { font-size: .82rem; color: #555; }
  //   @media print { body { margin: 20px; } }
  // </style>
  // </head>
  // <body>
  // <h1>Giri Dontala</h1>
  // <div class="subtitle">Frontend Developer | React.js | TypeScript | Redux | Node.js | REST API Integration</div>
  // <div class="contact">📧 giridontala9848@gmail.com &nbsp;|&nbsp; 📞 7337473154 &nbsp;|&nbsp; 📍 Hyderabad, India &nbsp;|&nbsp; LinkedIn: linkedin.com/in/giri-dontala-19b148198</div>

  // <h2>Professional Summary</h2>
  // <p style="font-size:.88rem">Frontend Developer with 3.5+ years of experience building scalable, responsive web applications using React.js, TypeScript, and Redux. Skilled in converting Figma designs into pixel-perfect UI screens and integrating REST APIs for dynamic data rendering. Delivered production-grade applications for global clients, improving UI responsiveness by 20% and reducing API load times by 30%.</p>

  // <h2>Technical Skills</h2>
  // <div class="skills-grid">
  //   <span class="skill-item">React.js</span><span class="skill-item">TypeScript</span><span class="skill-item">JavaScript</span>
  //   <span class="skill-item">Redux</span><span class="skill-item">Angular</span><span class="skill-item">Vue.js</span>
  //   <span class="skill-item">HTML5 / CSS3</span><span class="skill-item">Tailwind CSS</span><span class="skill-item">SCSS / Bootstrap</span>
  //   <span class="skill-item">Node.js</span><span class="skill-item">Express.js</span><span class="skill-item">REST APIs</span>
  //   <span class="skill-item">SQL / MySQL</span><span class="skill-item">Git</span><span class="skill-item">Figma to UI</span>
  //   <span class="skill-item">Postman</span><span class="skill-item">Linux</span><span class="skill-item">Agile / Scrum</span>
  // </div>

  // <h2>Professional Experience</h2>
  // <div class="exp-header">
  //   <div><div class="company">Tata Consultancy Services</div><div class="role">Assistant System Engineer — Frontend Developer</div></div>
  //   <div class="period">Sep 2022 – Present | Ahmedabad, India</div>
  // </div>
  // <ul>
  //   <li>Developed end-to-end web applications using React.js, TypeScript, and Redux from Figma designs with scalable, responsive architecture.</li>
  //   <li>Integrated and optimized REST APIs, reducing load time by 30% and improving overall application efficiency.</li>
  //   <li>Built dashboards with advanced filtering and real-time data handling, improving UI responsiveness by 20%.</li>
  //   <li>Reduced UI-related defects by 25% through collaboration with QA and backend teams.</li>
  //   <li>Managed deployments across DEV, SIT, UAT, and Production supporting 500+ users.</li>
  // </ul>

  // <div style="margin-top:12px;font-weight:600;font-size:.85rem">Key Projects:</div>
  // <div class="proj"><div class="proj-name">Partner Portal <span class="proj-client">(Community Fibre Ltd., UK)</span></div><div class="proj-desc">End-to-end React.js + Redux app with real-time dashboards. Improved UI responsiveness 20%, API load time 30%.</div></div>
  // <div class="proj"><div class="proj-name">Enterprise Portal <span class="proj-client">(Orange Guinee, West Africa)</span></div><div class="proj-desc">Role-based login and dynamic API-driven UI rendering.</div></div>
  // <div class="proj"><div class="proj-name">CPQ <span class="proj-client">(Community Fibre Ltd., UK)</span></div><div class="proj-desc">UI screens and REST API integration for configure-price-quote workflows.</div></div>
  // <div class="proj"><div class="proj-name">CIRCUIT <span class="proj-client">(Internal)</span></div><div class="proj-desc">API orchestration platform with chaining and JS response transformation.</div></div>
  // <div class="proj"><div class="proj-name">Fabricator <span class="proj-client">(Internal)</span></div><div class="proj-desc">Product, offer and discount configuration from Excel data.</div></div>

  // <div style="margin-top:16px">
  // <div class="exp-header">
  //   <div><div class="company">Tata Technologies</div><div class="role">PLM Intern</div></div>
  //   <div class="period">Jan 2020 – Mar 2020 | Hyderabad, India</div>
  // </div>
  // <ul><li>Worked on PLM tools including BOM and change management workflows.</li></ul>
  // </div>

  // <h2>Education</h2>
  // <div class="exp-header">
  //   <div><div class="company">MLR Institute of Technology</div><div class="role">Bachelor of Technology — Mechanical Engineering</div></div>
  //   <div class="period">Jul 2017 – Jun 2021 | GPA: 7.0/10</div>
  // </div>
  // </body>
  // </html>`;
  //     const blob = new Blob([resumeHTML], { type: "text/html" });
  //     const url = URL.createObjectURL(blob);
  //     const a = document.createElement("a");
  //     a.href = url;
  //     a.download = "Giri_Dontala_Resume.html";
  //     a.click();
  //     URL.revokeObjectURL(url);
  //   };

  return (
    <nav
      style={{
        background: "var(--nav-bg)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
        padding: "0 2rem",
        height: 62,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          fontFamily: "'Syne',sans-serif",
          fontWeight: 800,
          fontSize: "1.2rem",
          color: "var(--text)",
        }}
      >
        GD<span style={{ color: "var(--accent)" }}>.</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        {["exp", "skills", "edu", "contact"].map((id) => (
          <a
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              fontSize: ".83rem",
              fontWeight: 500,
              color: "var(--text2)",
              textDecoration: "none",
              cursor: "pointer",
              textTransform: "capitalize",
            }}
          >
            {id === "exp"
              ? "Experience"
              : id === "edu"
                ? "Education"
                : id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
        {/* <button
          onClick={downloadResume}
          style={{
            background: "var(--accent)",
            color: "#fff",
            padding: "7px 16px",
            borderRadius: 8,
            fontSize: ".78rem",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
          }}
        >
          ↓ Resume
        </button> */}
        <button
          onClick={() => window.open("/resume.pdf", "_blank")}
          style={{
            background: "var(--accent)",
            color: "#fff",
            padding: "7px 16px",
            borderRadius: 8,
            fontSize: ".78rem",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
          }}
        >
          Resume
        </button>
        <button
          onClick={() => setDark(!dark)}
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "1px solid var(--border2)",
            background: "var(--card2)",
            cursor: "pointer",
            fontSize: 15,
            color: "var(--text)",
          }}
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
