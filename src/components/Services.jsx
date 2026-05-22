const icons = [
  "◉",
  "◫",
  "⬡",
  "◆",
  "◈",
  "◌",
  "⬜",
  "◇",
  "⬡",
  "◉",
  "◫",
  "◆",
  "◈",
  "◌",
  "⬜",
  "◇",
];

export default function Services({ t }) {
  const services = [
    { name: t.services.s1name, desc: t.services.s1desc },
    { name: t.services.s2name, desc: t.services.s2desc },
    { name: t.services.s3name, desc: t.services.s3desc },
    { name: t.services.s4name, desc: t.services.s4desc },
    { name: t.services.s5name, desc: t.services.s5desc },
    { name: t.services.s6name, desc: t.services.s6desc },
    { name: t.services.s7name, desc: t.services.s7desc },
    { name: t.services.s8name, desc: t.services.s8desc },
    { name: t.services.s9name, desc: t.services.s9desc },
    { name: t.services.s10name, desc: t.services.s10desc },
    { name: t.services.s11name, desc: t.services.s11desc },
    { name: t.services.s12name, desc: t.services.s12desc },
    { name: t.services.s13name, desc: t.services.s13desc },
    { name: t.services.s14name, desc: t.services.s14desc },
    { name: t.services.s15name, desc: t.services.s15desc },
    { name: t.services.s16name, desc: t.services.s16desc },
  ];

  return (
    <section className="services" id="services">
      <div className="services-intro">
        <div>
          <p className="section-tag">{t.services.tag}</p>
          <h2 className="section-title">{t.services.title}</h2>
        </div>
        <p className="services-desc">{t.services.desc}</p>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="service-number">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="service-icon">{icons[i]}</div>
            <div className="service-name">{s.name}</div>
            <p className="service-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
