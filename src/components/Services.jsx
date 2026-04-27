const icons = ["⬡", "◉", "◫", "⬜", "◌", "◆"];

export default function Services({ t }) {
  const services = [
    { name: t.services.s1name, desc: t.services.s1desc },
    { name: t.services.s2name, desc: t.services.s2desc },
    { name: t.services.s3name, desc: t.services.s3desc },
    { name: t.services.s4name, desc: t.services.s4desc },
    { name: t.services.s5name, desc: t.services.s5desc },
    { name: t.services.s6name, desc: t.services.s6desc },
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
            <div className="service-number">0{i + 1}</div>
            <div className="service-icon">{icons[i]}</div>
            <div className="service-name">{s.name}</div>
            <p className="service-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
