import { useState } from "react";

export default function Contact({ t }) {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    area: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✓ " + t.contact.send);
    setForm({ fname: "", lname: "", email: "", area: "", message: "" });
  };

  const phone = "+995 595 037 177";
  const phoneDisplay = "995595 037 177";

  return (
    <section className="contact" id="contact">
      <p className="section-tag">{t.contact.tag}</p>
      <h2 className="section-title">{t.contact.title}</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <div>
            <div className="contact-label">{t.contact.addrLabel}</div>
            <div className="contact-val">{t.contact.addrVal}</div>
          </div>
          <div>
            <div className="contact-label">{t.contact.phoneLabel}</div>
            <div className="contact-val">{phoneDisplay}</div>
          </div>
          <div>
            <div className="contact-label">{t.contact.emailLabel}</div>
            <div className="contact-val">tamarkhachirashvili5@gmail.com </div>
          </div>
          <div>
            <div className="contact-label">{t.contact.hoursLabel}</div>
            <div className="contact-val">{t.contact.hoursVal}</div>
          </div>
          <div>
            <div className="contact-label">{t.contact.connectTitle}</div>
            <div className="contact-buttons">
              <a
                href={"tel:+" + phone}
                className="contact-btn contact-btn-call"
              >
                📞 Call
              </a>
              <a
                href={"https://wa.me/" + phone}
                target="_blank"
                rel="noreferrer"
                className="contact-btn contact-btn-whatsapp"
              >
                WhatsApp
              </a>
              <a
                href={"viber://chat?number=" + phone}
                className="contact-btn contact-btn-viber"
              >
                Viber
              </a>
            </div>
          </div>
          <div>
            <div className="contact-label">{t.contact.followTitle}</div>
            <div className="contact-social">
              <a
                href="https://www.facebook.com/people/%E1%83%90%E1%83%93%E1%83%95%E1%83%9D%E1%83%99%E1%83%90%E1%83%A2%E1%83%98-%E1%83%97%E1%83%90%E1%83%9B%E1%83%90%E1%83%A0-%E1%83%AE%E1%83%90%E1%83%A9%E1%83%98%E1%83%A0%E1%83%90%E1%83%A8%E1%83%95%E1%83%98%E1%83%9A%E1%83%98Lawyer-Tamar-Khachirashvili/100041307078223/?mibextid=wwXIfr&rdid=xBJF9gGTe3L0eimX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BRDNxia5M%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">{t.contact.fname}</label>
              <input
                className="form-input"
                type="text"
                name="fname"
                value={form.fname}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">{t.contact.lname}</label>
              <input
                className="form-input"
                type="text"
                name="lname"
                value={form.lname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">{t.contact.email}</label>
            <input
              className="form-input"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">{t.contact.area}</label>
            <select
              className="form-input"
              name="area"
              value={form.area}
              onChange={handleChange}
            >
              <option value="">—</option>
              {t.contact.areas.map((a, i) => (
                <option key={i} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">{t.contact.message}</label>
            <textarea
              className="form-input"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button className="form-submit" type="submit">
            {t.contact.send}
          </button>
        </form>
      </div>
    </section>
  );
}
