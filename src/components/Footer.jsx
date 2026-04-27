export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">თამარ ხაჩირაშვილის საადვოკატო ბიურო</div>
      <div className="footer-copy">
        © {new Date().getFullYear()} · Tbilisi, Georgia
      </div>
    </footer>
  );
}
