'use client'

import { useState, useRef } from 'react'
import MenuCard from './MenuCard'
import { menuItems } from '@/lib/menuData'

export default function MenuSection() {
  const sliderRef = useRef<HTMLDivElement>(null)

  // ── Drag state ──
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const onMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return
    isDragging.current = true
    startX.current = e.pageX - sliderRef.current.offsetLeft
    scrollLeft.current = sliderRef.current.scrollLeft
    sliderRef.current.style.cursor = 'grabbing'
    sliderRef.current.style.userSelect = 'none'
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return
    e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    const walk = (x - startX.current) * 1.2 // ความเร็วในการ drag
    sliderRef.current.scrollLeft = scrollLeft.current - walk
  }

  const onMouseUp = () => {
    if (!sliderRef.current) return
    isDragging.current = false
    sliderRef.current.style.cursor = 'grab'
    sliderRef.current.style.userSelect = ''
  }

  return (
    <section className="menu-section" id="menu">
      <div className="reveal">
        <span className="section-tag">— เมนูของเรา</span>
        <h2 className="section-title">
          ซิกเนเจอร์<em>ขายดี</em>
        </h2>
      </div>

      {/* Drag hint */}
      {/* <p style={{ color: 'var(--text-muted)', fontSize: '1.5rem', marginTop: '1.5rem' }}>
        ← กดค้างแล้วลากเพื่อดูเมนูเพิ่มเติม →
      </p>*/}

      <div
        className="menu-slider"
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        style={{ cursor: 'grab' }}
      >
        <div className="menu-grid">
          {menuItems.map((item) => (
            <MenuCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}