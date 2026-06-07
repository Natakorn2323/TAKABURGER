import Link from 'next/link'

const menuLinks = ['The Classic Grün', 'Avocado Smash', 'Garden Beast', 'Bangkok Fire']
const orderLinks = ['Grab Food', 'LINE MAN', 'Instagram DM']
const contactLinks = ['@takaburger.bkk', 'LINE: @takaburger']

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-brand">
          <Link href="/" className="logo">
            TAKA<span>burger</span>
          </Link>
          <p>เบอร์เกอร์พรีเมียมส่งถึงบ้าน ปั้นด้วยใจในทุกชิ้น วัตถุดิบสดใหม่คัดพิเศษทุกวัน กรุงเทพมหานคร</p>
        </div>

        <div>
          <h4>เมนู</h4>
          <ul>
            {menuLinks.map((item) => (
              <li key={item}><a href="#menu">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4>สั่งอาหาร</h4>
          <ul>
            {orderLinks.map((item) => (
              <li key={item}><Link href="#OrderMenuSection">{item}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4>ติดต่อเรา</h4>
          <ul>
            {contactLinks.map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>
      </footer>

      <div className="footer-bottom">
        <span>© 2026 TAKA Burger. All rights reserved.</span>
        <span>Made with  in hand</span>
      </div>
    </>
  )
}
