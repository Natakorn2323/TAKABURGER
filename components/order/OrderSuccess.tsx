'use client'
import Link from 'next/link'

export default function OrderSuccess() {
  return (
    <div className="order-success">
      <div className="success-box">
        <div className="success-emoji">🎉</div>
        <h2>สั่งอาหารสำเร็จ!</h2>
        <p>เราได้รับออเดอร์ของคุณแล้ว<br />รอรับอาหารได้เลยครับ 🍔</p>
        <Link href="/" className="btn-primary">กลับหน้าหลัก</Link>
      </div>
    </div>
  )
}
