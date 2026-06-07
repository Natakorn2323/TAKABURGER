'use client'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function OrderNavbar() {
  const { totalItems } = useCart()

  return (
    <div className="order-navbar">
      <Link href="/" className="order-back">← กลับ</Link>
      <div className="order-logo">GRÜN<span>burger</span></div>
      <div className="order-cart-badge">
        🛒
        <span>{totalItems}</span>
      </div>
    </div>
  )
}
