'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <Link href="/" className="logo">
        TAKA<span>burger</span>
      </Link>
      <ul>
        <li><a href="#menu">เมนู</a></li>
        <li><a href="#about">เรื่องราวเรา</a></li>
        <li><a href="#delivery">เดลิเวอรี่</a></li>
        {/* <li><a href="#reviews">รีวิว</a></li> */}
        <li><a href="#delivery" className="nav-cta">สั่งเลย 🍔</a></li>
      </ul>
    </nav>
  )
}
