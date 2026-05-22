export default function Blog({ t }) {
  return (
    <section className="blog" id="blog">
      <p className="section-tag">{t.blog.tag}</p>
      <h2 className="section-title">{t.blog.title}</h2>
      <p className="blog-desc">{t.blog.desc}</p>

      <div className="blog-grid">
        {t.blog.posts.map((post, i) => (
          <div className="blog-card" key={i}>
            <div className="blog-card-top">
              <span className="blog-category">{post.category}</span>
              <span className="blog-date">{post.date}</span>
            </div>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>
            <a href="#contact" className="blog-read-more">
              {t.blog.readMore} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
