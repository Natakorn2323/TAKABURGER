'use client'

import { useState, useRef } from 'react'
import { useCart } from '@/context/CartContext'

type Props = {
  onClose: () => void
  onSuccess: (orderId: string) => void
}

// ── PromptPay QR payload generator ──
function generatePromptPayPayload(phoneNumber: string, amount: number): string {
  const phone = phoneNumber.replace('+66', '0').replace(/-/g, '')
  const target = `0066${phone.substring(1)}`
  const amountStr = amount.toFixed(2)

  const payload = [
    '000201',
    '010212',
    `2937${String('0016A000000677010111' + '01' + String(target.length).padStart(2, '0') + target).length.toString().padStart(2, '0')}0016A000000677010111` +
    `01${String(target.length).padStart(2, '0')}${target}`,
    '5303764',
    `5405${amountStr}`,
    '5802TH',
    '6304',
  ].join('')

  return payload
}

type Step = 'qr' | 'upload' | 'verifying'

export default function PaymentModal({ onClose, onSuccess }: Props) {
  const { cart, total, clearCart } = useCart()
  const [step, setStep] = useState<Step>('qr')
  const [slipFile, setSlipFile] = useState<File | null>(null)
  const [slipPreview, setSlipPreview] = useState<string | null>(null)
  const [error, setError] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  // PromptPay config — เปลี่ยนเป็นเบอร์ร้านได้เลย
  const PROMPTPAY_PHONE = '0909750393'
  const qrUrl = `https://promptpay.io/${PROMPTPAY_PHONE}/${total}.png`

  // ── อัพโหลดสลิป ──
  const handleSlipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setSlipFile(file)
    setSlipPreview(URL.createObjectURL(file))
    setError('')
  }

  // ── ส่งคำสั่งซื้อ ──
  const handleSubmit = async () => {
    if (!slipFile) {
      setError('กรุณาแนบสลิปก่อนครับ')
      return
    }

    setStep('verifying')

    try {
      // ── บันทึก Order ลง Supabase ──
      const formData = new FormData()
      formData.append('slip', slipFile)
      formData.append('items', JSON.stringify(cart))
      formData.append('total', String(total))

      const res = await fetch('/api/orders', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'เกิดข้อผิดพลาด')

      clearCart()
      onSuccess(data.orderId)

    } catch (err: any) {
      setError(err.message)
      setStep('upload')
    }
  }

  return (
    <div className="payment-overlay" onClick={onClose}>
      <div className="payment-modal" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="payment-header">
          <h3>ชำระเงิน</h3>
          <button className="payment-close" onClick={onClose}>×</button>
        </div>

        {/* ยอดรวม */}
        <div className="payment-total">
          <span>ยอดที่ต้องชำระ</span>
          <span className="payment-amount">฿{total}</span>
        </div>

        {/* Step 1 — QR Code */}
        {(step === 'qr' || step === 'upload') && (
          <>
            <div className="payment-qr-wrap">
              <img
                src={qrUrl}
                alt="QR PromptPay"
                className="payment-qr"
              />
              <p className="payment-qr-label">
                📱 สแกน QR ด้วย Mobile Banking
              </p>
              <p className="payment-phone">
                PromptPay: {PROMPTPAY_PHONE}
              </p>
            </div>

            {/* Step 2 — Upload Slip */}
            <div className="payment-slip">
              <p className="payment-slip-label">📎 แนบสลิปหลังจ่ายเงิน</p>

              {slipPreview ? (
                <div className="slip-preview-wrap">
                  <img src={slipPreview} alt="slip" className="slip-preview" />
                  <button
                    className="slip-change"
                    onClick={() => fileRef.current?.click()}
                  >
                    เปลี่ยนสลิป
                  </button>
                </div>
              ) : (
                <button
                  className="slip-upload-btn"
                  onClick={() => fileRef.current?.click()}
                >
                  📷 อัพโหลดสลิป
                </button>
              )}

              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleSlipChange}
              />

              {error && <p className="payment-error">{error}</p>}
            </div>

            <button
              className="btn-primary payment-submit"
              onClick={handleSubmit}
              disabled={!slipFile}
            >
              ยืนยันการชำระเงิน
            </button>
          </>
        )}

        {/* Step 3 — Verifying */}
        {step === 'verifying' && (
          <div className="payment-verifying">
            <div className="verifying-spinner" />
            <p>กำลังตรวจสอบการชำระเงิน...</p>
            <small>กรุณารอสักครู่</small>
          </div>
        )}

      </div>
    </div>
  )
}
