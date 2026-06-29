import heroPhoto from "../assets/hero-photo.png";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <img
        src={heroPhoto}
        alt="Tamar Khachirashvili Juridical Bureau"
        className="hero-fullimg"
      />
    </section>
  );
}
