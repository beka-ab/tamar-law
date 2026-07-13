export default function Team({ t }) {
  const withPhoto = [
    { name: t.team.m1name, bio: t.team.m1bio, photo: "/src/assets/tamar.jpg" },
    { name: t.team.m2name, bio: t.team.m2bio, photo: "/src/assets/nano.PNG" },
    { name: t.team.m3name, bio: t.team.m3bio, photo: "/src/assets/teona.JPG" },
  ];

  const noPhoto = [
    { name: t.team.m4name, bio: t.team.m4bio, initials: "მა" },
    { name: t.team.m5name, bio: t.team.m5bio, initials: "იხ" },
    { name: t.team.m6name, bio: t.team.m6bio, initials: "ბმ" },
  ];

  return (
    <section className="team" id="team">
      <p className="section-tag">{t.team.tag}</p>

      <div className="team-grid">
        {withPhoto.map((m, i) => (
          <div className="team-card" key={i}>
            <div className="team-photo-img">
              <img src={m.photo} alt={m.name} />
            </div>
            <div className="team-body">
              <div className="team-name">{m.name}</div>
              <p className="team-bio">{m.bio}</p>
            </div>
          </div>
        ))}
        {noPhoto.map((m, i) => (
          <div className="team-card" key={i + 3}>
            <div
              className="team-photo"
              style={{
                background: "linear-gradient(160deg, #162540, #0d1b2e)",
              }}
            >
              <div className="team-initials">{m.initials}</div>
            </div>
            <div className="team-body">
              <div className="team-name">{m.name}</div>
              <p className="team-bio">{m.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
