const features = [
  { icon: '🥩', label: 'เนื้อสด', desc: 'บดใหม่ทุกวัน' },
  { icon: '🌿', label: 'ออร์แกนิค', desc: 'ผักสดออร์แกนิค' },
  { icon: '⚡', label: 'เดลิเวอรี่เร็ว', desc: 'ภายใน 30 นาที' },
]

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-visual reveal">
        <div className="about-img-box">🧑‍🍳</div>
        <div className="about-float">
          <div className="big">100%</div>
          <div className="sm">Fresh Every Day</div>
        </div>
      </div>

      <div className="about-text reveal">
        <span className="section-tag">— เรื่องราวของเรา</span>
        <h2 className="section-title">
          ปั้น<em>ด้วยใจ</em>
          <br />
          ส่งถึง<em>มือคุณ</em>
        </h2>
        <p>
          TAKA BURGER เกิดจากความหลงใหลในเบอร์เกอร์คุณภาพสูงที่ทุกคนเข้าถึงได้
          เราเชื่อว่าอาหารดีๆ ไม่จำเป็นต้องมีร้านหรู แค่ต้องมีใจที่ใส่ใจในทุกขั้นตอน
        </p>
        <p>
          แพตตี้ทุกชิ้นบดและปั้นใหม่ทุกวัน ขนมปังอบสดจากเบเกอรี่พาร์ทเนอร์ที่เราเลือกมาเอง
          วัตถุดิบทุกอย่างผ่านการคัดสรรอย่างพิถีพิถัน
        </p>
        <div className="about-features">
          {features.map((f) => (
            <div className="feature" key={f.label}>
              <span className="feature-icon">{f.icon}</span>
              <span className="feature-label">{f.label}</span>
              <span className="feature-desc">{f.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
