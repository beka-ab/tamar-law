import { useState } from "react";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import { translations } from "./translations/index";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Blog from "./components/Blog.jsx";
import Team from "./components/Team.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  const [lang, setLang] = useState("ka");
  const t = translations[lang];

  return (
    <div className="app">
      <Navbar t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <About t={t} />
      <Services t={t} />
      <Blog t={t} />
      <Team t={t} />
      <Contact t={t} />
      <Footer />
    </div>
  );
}

export default App;
