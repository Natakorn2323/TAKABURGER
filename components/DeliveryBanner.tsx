import Link from 'next/link'

const apps = [
  { icon: '🟢', label: 'สั่งผ่าน', name: 'Grab Food', href: '#' },
  { icon: '🟡', label: 'สั่งผ่าน', name: 'LINE MAN', href: '#' },
  { icon: '📷', label: 'ติดตามเรา', name: 'Instagram', href: './order' },
]

export default function DeliveryBanner() {
  return (
    <div className="delivery-section reveal" id="delivery">
      <div className="delivery-text">
        <span className="section-tag">— สั่งออนไลน์ได้เลย</span>
        <h2>
          สั่งผ่านแพลตฟอร์ม
          <br />
          ที่คุณถนัด
        </h2>
        <p>
          ส่งถึงบ้านทุกวัน ตั้งแต่ 10.00 – 22.00 น.
          <br />
          Free Delivery สำหรับออเดอร์แรก!
        </p>
      </div>

      <div className="delivery-apps">
        {apps.map((app) => (
          <Link key={app.name} href={app.href} className="app-btn">
            <span className="app-icon">{app.icon}</span>
            <div className="app-info">
              <small>{app.label}</small>
              <strong>{app.name}</strong>
            </div>
          </Link>
        ))}
      </div>
      {/* ── Map ── */}
      <div className="delivery-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1076.5859268497597!2d100.4372538590026!3d13.681257406243647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2bd845d6d0353%3A0x111338466f39c147!2z4Lil4Li44Lih4Lie4Li04LiZ4Li1IOC4hOC4reC4meC5guC4lOC4l-C4suC4p-C4meC5jCDguYDguK3guIHguIrguLHguKIgNDg!5e0!3m2!1sth!2sth!4v1775302768865!5m2!1sth!2sth"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '1rem' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        
      </div>
    </div>

  )
}
