mport Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <span className="hero-tag">🌿 Handcrafted · Premium · Bangkok</span>
        <h1>
          เบอร์เกอร์
          <em>ที่ปั้นด้วยใจ</em>
        </h1>
        <p className="hero-desc">
          วัตถุดิบสดใหม่คัดพิเศษทุกวัน เนื้อแพตตี้ย่างสดใหม่ในทุกออเดอร์ รสชาติที่คุณจะจำไม่รู้ลืม
        </p>
        <div className="hero-btns">
          <Link href="#menu" className="btn-primary">ดูเมนูทั้งหมด</Link>
          <Link href="#about" className="btn-ghost">เรื่องราวของเรา</Link>
        </div>
      </div>

      <div className="hero-visual">
        <div className="burger-wrap">
          <div className="burger-ring" />
          <div className="burger-emoji">🍔</div>
          <div className="stat-chip chip-1">
            <div className="num">4.9</div>
            <div className="lbl">★ Rating</div>
          </div>
          <div className="stat-chip chip-2">
            <div className="num">2K+</div>
            <div className="lbl">Orders Delivered</div>
          </div>
        </div>
      </div>
    </section>
  )
}<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
