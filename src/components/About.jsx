export default function About({ t }) {
  return (
    <section className="about" id="about">
      <p className="section-tag">{t.about.tag}</p>
      <h2 className="section-title">{t.about.title}</h2>

      <div className="about-grid">
        <div className="about-text">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>

          <div className="about-values">
            <div className="value-item">
              <div className="value-icon">⚖</div>
              <div>
                <div className="value-title">{t.about.v1title}</div>
                <div className="value-desc">{t.about.v1desc}</div>
              </div>
            </div>
            <div className="value-item">
              <div className="value-icon">◈</div>
              <div>
                <div className="value-title">{t.about.v2title}</div>
                <div className="value-desc">{t.about.v2desc}</div>
              </div>
            </div>
            <div className="value-item">
              <div className="value-icon">◇</div>
              <div>
                <div className="value-title">{t.about.v3title}</div>
                <div className="value-desc">{t.about.v3desc}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-visual">
          <div className="about-quote">{t.about.quote}</div>
          <div className="about-attribution">— William Blackstone</div>
          <div className="about-corner"></div>
        </div>
      </div>
    </section>
  );
}
