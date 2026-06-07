import { reviews } from '@/lib/menuData'

export default function ReviewsSection() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-header reveal">
        <span className="section-tag">— ลูกค้าพูดถึงเรา</span>
        <h2 className="section-title">
          รีวิวจาก<em>ลูกค้าจริง</em>
        </h2>
      </div>

      <div className="reviews-grid">
        {reviews.map((r) => (
          <div className="review-card reveal" key={r.name}>
            <div className="stars">★★★★★</div>
            <div className="review-text">{r.text}</div>
            <div className="reviewer">
              <div className="avatar">{r.avatar}</div>
              <div>
                <div className="reviewer-name">{r.name}</div>
                <div className="reviewer-date">{r.source} · {r.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
