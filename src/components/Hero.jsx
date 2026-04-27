export default function Hero({ t }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-rule"></div>
      <p className="hero-tag">{t.hero.tag}</p>
      <h1 className="hero-headline">
        {t.hero.headline1}
        <br />
        {t.hero.headline2}
        <br />
        <em>{t.hero.headline3}</em>
      </h1>
      <p className="hero-body">{t.hero.body}</p>
      <a href="#contact" className="btn-primary">
        {t.hero.cta}
      </a>

      <div className="hero-stats">
        <div>
          <div className="stat-num">{t.hero.stat1num}</div>
          <div className="stat-label">{t.hero.stat1label}</div>
        </div>
        <div>
          <div className="stat-num">{t.hero.stat2num}</div>
          <div className="stat-label">{t.hero.stat2label}</div>
        </div>
        <div>
          <div className="stat-num">{t.hero.stat3num}</div>
          <div className="stat-label">{t.hero.stat3label}</div>
        </div>
      </div>
    </section>
  );
}
