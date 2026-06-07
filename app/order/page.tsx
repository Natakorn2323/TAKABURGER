'use client'

import { useState } from 'react'
import { CartProvider, useCart } from '@/context/CartContext'
import OrderNavbar from '@/components/order/OrderNavbar'
import OrderMenuList from '@/components/order/OrderMenuList'
import OrderCart from '@/components/order/OrderCart'
import PaymentModal from '@/components/payment/PaymentModal'
import OrderReceipt from '@/components/payment/OrderReceipt'

type OrderResult = {
  orderId: string
  createdAt: string
}

function OrderContent() {
  const { cart, total } = useCart()
  const [showPayment, setShowPayment] = useState(false)
  const [orderResult, setOrderResult] = useState<OrderResult | null>(null)

  // ── หน้าสลิป / ใบเสร็จ ──
  if (orderResult) {
    return (
      <OrderReceipt
        orderId={orderResult.orderId}
        items={cart}
        total={total}
        createdAt={orderResult.createdAt}
      />
    )
  }

  return (
    <div className="order-page">
      <OrderNavbar />

      <div className="order-layout">
        <OrderMenuList />
        <OrderCart onSubmit={() => setShowPayment(true)} />
      </div>

      {/* Payment Modal */}
      {showPayment && (
        <PaymentModal
          onClose={() => setShowPayment(false)}
          onSuccess={(orderId) => {
            setShowPayment(false)
            setOrderResult({ orderId, createdAt: new Date().toISOString() })
          }}
        />
      )}
    </div>
  )
}

export default function OrderPage() {
  return (
    <CartProvider>
      <OrderContent />
    </CartProvider>
  )
}