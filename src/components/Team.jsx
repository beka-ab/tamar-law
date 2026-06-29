const colors = [
  "linear-gradient(160deg, #162540, #0d1b2e)",
  "linear-gradient(160deg, #1e3255, #162540)",
  "linear-gradient(160deg, #0d1b2e, #1e3255)",
  "linear-gradient(160deg, #1e3255, #0d1b2e)",
];

export default function Team({ t }) {
  const members = [
    { name: t.team.m1name, bio: t.team.m1bio, initials: "თხ" },
    { name: t.team.m2name, bio: t.team.m2bio, initials: "იხ" },
    { name: t.team.m3name, bio: t.team.m3bio, initials: "მა" },
    { name: t.team.m4name, bio: t.team.m4bio, initials: "ნლ" },
  ];

  return (
    <section className="team" id="team">
      <p className="section-tag">{t.team.tag}</p>
      <h2 className="section-title">{t.team.title}</h2>

      <div className="team-grid">
        {members.map((m, i) => (
          <div className="team-card" key={i}>
            <div className="team-photo" style={{ background: colors[i] }}>
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
