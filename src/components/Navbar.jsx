import logo from "../assets/logo.png";

export default function Navbar({ t, lang, setLang }) {
  return (
    <>
      <div className="lang-bar">
        {["ka", "en", "ru", "tr"].map((l) => (
          <button
            key={l}
            className={`lang-btn ${lang === l ? "active" : ""}`}
            onClick={() => setLang(l)}
          >
            {l === "ka" ? "ქართ" : l.toUpperCase()}
          </button>
        ))}
      </div>

      <nav className="navbar">
        <a href="#hero" className="nav-logo">
          <img src={logo} alt="Logo" />
        </a>

        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <a href="#about">{t.nav.about}</a>
            </li>
            <li>
              <a href="#services">{t.nav.services}</a>
            </li>
            <li>
              <a href="#blog">{t.nav.blog}</a>
            </li>
            <li>
              <a href="#team">{t.nav.team}</a>
            </li>
            <li>
              <a href="#contact">{t.nav.contact}</a>
            </li>
          </ul>
          <a href="#contact" className="nav-cta">
            {t.nav.consultation}
          </a>
        </div>
      </nav>
    </>
  );
}
