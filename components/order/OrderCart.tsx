'use client'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'

type Props = {
  onSubmit: () => void
}

export default function OrderCart({ onSubmit }: Props) {
  const { cart, decrease, clearCart, totalItems, total } = useCart()
  const [note, setNote] = useState('')

  return (
    <div className="order-sidebar">
      <div className="order-cart">
        <h3 className="cart-title">🛒 ตะกร้าของคุณ</h3>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <span>🍽️</span>
            <p>ยังไม่มีรายการ<br />เลือกเมนูที่ต้องการได้เลย</p>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {cart.map((c) => (
                <li key={c.title} className="cart-item">
                  <span className="cart-emoji">{c.emoji}</span>
                  <div className="cart-info">
                    <span className="cart-name">{c.title}</span>
                    <span className="cart-sub">x{c.qty} · ฿{c.price * c.qty}</span>
                  </div>
                  <button className="cart-remove" onClick={() => decrease(c.title)}>×</button>
                </li>
              ))}
            </ul>

            <button className="cart-clear" onClick={clearCart}>
              ล้างตะกร้า
            </button>

            <div className="cart-note">
              <label>📝 หมายเหตุ</label>
              <textarea
                placeholder="เช่น ไม่ใส่หอม, เผ็ดน้อย..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={2}
              />
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>รวม {totalItems} รายการ</span>
                <span>฿{total}</span>
              </div>
              <div className="summary-row delivery">
                <span>ค่าจัดส่ง</span>
                <span className="free">ฟรี!</span>
              </div>
              <div className="summary-row total">
                <span>ยอดรวม</span>
                <span>฿{total}</span>
              </div>
            </div>

            <button className="btn-primary order-submit" onClick={onSubmit}>
              สั่งอาหาร ฿{total}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
