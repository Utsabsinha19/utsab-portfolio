"use client";

import { useState } from "react";

/* ================= TYPES ================= */
type RoleKey =
  | "Data Analyst"
  | "Quantitative Research"
  | "Software Engineer";

type RoleData = {
  file: string;
  desc: string;
  skills: string[];
};

type Experience = {
  name: string;
  logo: string;
  file: string;
  recruiterDesc: string;
  devDesc: string;
  tech: string[]; // ✅ REQUIRED
};


export default function Home() {
  const [verifyMode, setVerifyMode] = useState(false);
  const [devMode, setDevMode] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] =
    useState<RoleKey>("Data Analyst");

  /* ================= ROLE DATA ================= */
  const roles: Record<RoleKey, RoleData> = {
    "Data Analyst": {
      file: "/resumes/utsab-data-analyst.pdf",
      desc:
        "Focused on analytics, dashboards, SQL, business intelligence, and decision support.",
      skills: ["Python", "SQL", "Tableau", "Snowflake"],
    },
    "Quantitative Research": {
      file: "/resumes/utsab-quant-research.pdf",
      desc:
        "Focused on financial data, statistical modelling, risk analysis, and quantitative reasoning.",
      skills: ["Python", "SQL", "Applied AI / ML"],
    },
    "Software Engineer": {
      file: "/resumes/utsab-software-engineer.pdf",
      desc:
        "Focused on system design, frontend/backend development, and scalable applications.",
      skills: ["React", "Node.js", "Java"],
    },
  };

  /* ================= SKILL → EXPERIENCE MAP ================= */
  const skillMap: Record<string, string[]> = {
    Python: ["JP Morgan Chase & Co.", "Deloitte", "British Airways"],
    SQL: ["JP Morgan Chase & Co.", "Deloitte"],
    Tableau: ["Deloitte", "Siemens"],
    Snowflake: ["JP Morgan Chase & Co."],
    Java: ["Siemens"],
    React: ["Portfolio Website"],
    "Node.js": ["Portfolio Website"],
    "Applied AI / ML": ["British Airways", "JP Morgan Chase & Co."],
  };

const experiences: Experience[] = [
  {
    name: "JP Morgan Chase & Co.",
    logo: "/logos/jp-morgan.png",
    file: "/internships/jp-morgan-quantitative-research.pdf.pdf",
    recruiterDesc:
      "Quantitative Research Internship — financial data analysis, risk assessment, and modelling.",
    devDesc:
      "Used Python and SQL for quantitative analysis, statistical modelling, and risk metrics.",
    tech: ["Python", "SQL", "Statistics"],
  },
  {
    name: "Deloitte",
    logo: "/logos/deloitte.png",
    file: "/internships/deloitte-data-analytics.pdf",
    recruiterDesc:
      "Data analytics simulation involving dashboards and operational metrics.",
    devDesc:
      "Built analytics workflows using SQL, Python, and Tableau.",
    tech: ["SQL", "Python", "Tableau"],
  },
  {
    name: "Siemens",
    logo: "/logos/siemens.png",
    file: "/internships/siemens-project-management.pdf",
    recruiterDesc:
      "Project management simulation with KPI tracking and reporting.",
    devDesc:
      "Worked with KPI dashboards and structured reporting systems.",
    tech: ["Tableau", "KPIs"],
  },
  {
    name: "British Airways",
    logo: "/logos/british-airways.png",
    file: "/internships/british-airways-data-science.pdf",
    recruiterDesc:
      "Data science simulation analysing customer behaviour.",
    devDesc:
      "Applied Python and ML concepts to analyse customer behaviour patterns.",
    tech: ["Python", "Machine Learning"],
  },
];

  return (
    <main className={verifyMode ? "verify-mode" : ""}>
      {/* ================= TOP CONTROLS ================= */}
      <div className="top-controls">
        <div className="verify-toggle">
          <span>Verification</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={verifyMode}
              onChange={() => setVerifyMode(!verifyMode)}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="verify-toggle">
          <span>{devMode ? "Developer Mode" : "Recruiter Mode"}</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={devMode}
              onChange={() => {
                setDevMode(!devMode);
                setActiveSkill(null);
              }}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      {/* ================= HERO (ALWAYS VISIBLE) ================= */}
<section className="section hero hero-grid">
  <div>
    <h1>Utsab Sinha</h1>

    <p className="subtitle">
      Software Engineer • Business Intelligence & Data Analysis
    </p>

    <p className="subtitle">
      {devMode
        ? "I build systems where data, code, and decision-making intersect — focusing on clarity, scalability, and ethical impact."
        : "Computer Science undergraduate (CSE ’27) at UEM Jaipur, focused on data-driven problem solving and real-world impact."}
    </p>
  </div>

  <div className="profile-wrapper">
    <img
      src="/profile.jpg"
      alt="Utsab Sinha"
      className="profile-img"
    />
  </div>
</section>
{/* ================= CONTACT & SOCIAL ================= */}
<section className="section contact">
  <h2>Contact</h2>

  <p className="subtitle">
    Howrah, West Bengal, India <br />
    Open to remote / hybrid opportunities
  </p>

  <div className="contact-grid">
    {/* EMAIL */}
    <a
      href="mailto:utsabsinha468@gmail.com"
      className="contact-card"
    >
      <span className="contact-icon">📧</span>
      <div>
        <strong>Email</strong>
        <p className="subtitle">utsabsinha468@gmail.com</p>
      </div>
    </a>

    {/* LINKEDIN */}
    <a
      href="https://www.linkedin.com/in/utsab-sinha-9801a5287/"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
      <span className="contact-icon">🔗</span>
      <div>
        <strong>LinkedIn</strong>
        <p className="subtitle">utsab-sinha</p>
      </div>
    </a>

    {/* GITHUB */}
    <a
      href="https://github.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
      <span className="contact-icon">💻</span>
      <div>
        <strong>GitHub</strong>
        <p className="subtitle">github.com</p>
      </div>
    </a>
  </div>
</section>

{/* ================= EXPERIENCE ================= */}
<section className="section">
  <h2>Experience Highlights</h2>

  <div className="grid skills-grid">
    {experiences.map((item) => (
      <a
        key={item.name}
        href={item.file}
        target="_blank"
        rel="noopener noreferrer"
        className={`card experience-card ${
          activeSkill &&
          skillMap[activeSkill]?.includes(item.name)
            ? "highlight"
            : ""
        }`}
      >
        <img
          src={item.logo}
          alt={item.name}
          className="company-logo"
        />

        <strong>{item.name}</strong>

        {/* DESCRIPTION */}
        <p className="subtitle">
          {devMode ? item.devDesc : item.recruiterDesc}
        </p>

        {/* TECH STACK — DEV MODE ONLY */}
        {devMode && (
          <div className="tech-stack">
            {item.tech.map((t: string) => (
              <span
                key={t}
                className={`tech-pill ${
                  activeSkill === t ? "active" : ""
                }`}
                onMouseEnter={() => setActiveSkill(t)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </a>
    ))}
  </div>
</section>

      {/* ================= CONTACT ================= */}
<section className="section contact">
  <h2>Contact</h2>

  <p className="subtitle">
    Howrah, West Bengal, India <br />
    Open to remote / hybrid opportunities
  </p>

  <div className="contact-links">
    <a href="mailto:utsabsinha468@gmail.com">
      📧 utsabsinha468@gmail.com
    </a>

    <a
      href="https://www.linkedin.com/in/utsab-sinha-9801a5287/"
      target="_blank"
      rel="noopener noreferrer"
    >
      🔗 LinkedIn
    </a>

    <a
      href="https://github.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      💻 GitHub
    </a>
  </div>
</section>

    </main>
  );
}
