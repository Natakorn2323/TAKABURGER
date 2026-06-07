'use client'

import { useRef } from 'react'
import Link from 'next/link'
import type { CartItem } from '@/context/CartContext'

type Props = {
  orderId: string
  items: CartItem[]
  total: number
  createdAt: string
}

export default function OrderReceipt({ orderId, items, total, createdAt }: Props) {
  const receiptRef = useRef<HTMLDivElement>(null)

  // ── Save เป็น PNG ──
  const saveAsImage = async () => {
    const html2canvas = (await import('html2canvas')).default
    if (!receiptRef.current) return
    const canvas = await html2canvas(receiptRef.current, {
      backgroundColor: '#e1eae6',
      scale: 2,
    })
    const link = document.createElement('a')
    link.download = `receipt-${orderId}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  // ── Save เป็น PDF ──
  const saveAsPDF = async () => {
    const html2canvas = (await import('html2canvas')).default
    const jsPDF = (await import('jspdf')).default
    if (!receiptRef.current) return

    const canvas = await html2canvas(receiptRef.current, {
      backgroundColor: '#d8dddb',
      scale: 2,
    })
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p', 'mm', 'a5')
    const w = pdf.internal.pageSize.getWidth()
    const h = (canvas.height * w) / canvas.width
    pdf.addImage(imgData, 'PNG', 0, 0, w, h)
    pdf.save(`receipt-${orderId}.pdf`)
  }

  return (
    <div className="receipt-page">

      {/* ── ใบเสร็จ ── */}
      <div className="receipt-wrap" ref={receiptRef}>
        <div className="receipt-header">
          <div className="receipt-logo">GRÜN<span>burger</span></div>
          <p className="receipt-tagline">Crafted with Soul</p>
        </div>

        <div className="receipt-divider" />

        <div className="receipt-meta">
          <div className="receipt-meta-row">
            <span>Order ID</span>
            <span>#{orderId.slice(0, 8).toUpperCase()}</span>
          </div>
          <div className="receipt-meta-row">
            <span>วันที่</span>
            <span>{new Date(createdAt).toLocaleDateString('th-TH', {
              year: 'numeric', month: 'long', day: 'numeric',
              hour: '2-digit', minute: '2-digit',
            })}</span>
          </div>
        </div>

        <div className="receipt-divider" />

        {/* รายการ */}
        <ul className="receipt-items">
          {items.map((item) => (
            <li key={item.title} className="receipt-item">
              <span className="receipt-item-emoji">{item.emoji}</span>
              <span className="receipt-item-name">{item.title}</span>
              <span className="receipt-item-qty">x{item.qty}</span>
              <span className="receipt-item-price">฿{item.price * item.qty}</span>
            </li>
          ))}
        </ul>

        <div className="receipt-divider" />

        {/* ยอดรวม */}
        <div className="receipt-summary">
          <div className="receipt-summary-row">
            <span>ค่าจัดส่ง</span>
            <span className="free">ฟรี</span>
          </div>
          <div className="receipt-summary-row total">
            <span>ยอดรวม</span>
            <span>฿{total}</span>
          </div>
        </div>

        <div className="receipt-divider" />

        <div className="receipt-footer">
          <div className="receipt-paid">✅ ชำระเงินแล้ว</div>
          <p>ขอบคุณที่ใช้บริการ GRÜN Burger</p>
          <p>🌿 Made with Soul in Bangkok</p>
        </div>
      </div>

      {/* ── ปุ่ม Save ── */}
      <div className="receipt-actions">
        <button className="receipt-btn image" onClick={saveAsImage}>
          📷 บันทึกเป็นรูปภาพ
        </button>
        <button className="receipt-btn pdf" onClick={saveAsPDF}>
          📄 บันทึกเป็น PDF
        </button>
        <Link href="/" className="receipt-btn home">
          🏠 กลับหน้าหลัก
        </Link>
      </div>

    </div>
  )
}
