import aboutPhoto from "../assets/Photo.jpg";

export default function About({ t }) {
  return (
    <section className="about" id="about">
      <p className="section-tag">{t.about.tag}</p>

      <div className="about-grid">
        <div className="about-photo-wrap">
          <img
            src={aboutPhoto}
            alt="Tamar Khachirashvili Juridical Bureau"
            className="about-photo"
          />
        </div>

        <div className="about-text">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
          <p>{t.about.p4}</p>
          <p>{t.about.p5}</p>
          <p>{t.about.p6}</p>

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
      </div>
    </section>
  );
}
