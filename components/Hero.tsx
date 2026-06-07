import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <span className="hero-tag">🌿  streets food </span>
        <h1>
          เบอร์เกอร์
          <em>ที่ตรงใจคุณ</em>
        </h1>
        <p className="hero-desc">
          วัตถุดิบสดใหม่คัดพิเศษทุกวัน เนื้อแพตตี้ย่างสดใหม่ในทุกออเดอร์ รสชาติที่คุณจะจำไม่รู้ลืม
        </p>
        <div className="hero-btns">
          <Link href="#menu" className="btn-primary">ALL MENU</Link>
          <Link href="#about" className="btn-ghost">เรื่องราวของเรา</Link>
        </div>
      </div>
      <div className="hero-visual">
        <div className="burger-wrap">
          {/* <div className="burger-ring" /> */}
          <div className="burger-emoji">
            <img src="/burger.png" alt="burger" /></div>
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
}