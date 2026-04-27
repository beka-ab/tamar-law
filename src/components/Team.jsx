const colors = [
  "linear-gradient(160deg, #162540, #0d1b2e)",
  "linear-gradient(160deg, #1e3255, #162540)",
  "linear-gradient(160deg, #0d1b2e, #1e3255)",
];

export default function Team({ t }) {
  const members = [
    {
      name: t.team.m1name,
      role: t.team.m1role,
      bio: t.team.m1bio,
      initials: "თხ",
    },
    {
      name: t.team.m2name,
      role: t.team.m2role,
      bio: t.team.m2bio,
      initials: "—",
    },
    {
      name: t.team.m3name,
      role: t.team.m3role,
      bio: t.team.m3bio,
      initials: "—",
    },
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
              <div className="team-role">{m.role}</div>
              <p className="team-bio">{m.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
