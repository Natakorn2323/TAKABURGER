'use client'

import { useState } from 'react'
import type { MenuItem } from '@/lib/menuData'

export default function MenuCard({ image, title, description, price, unit, badge }: MenuItem) {
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 900)
  }

  return (
    <div className="menu-card reveal">
      {badge && <span className="card-badge">{badge}</span>}
      <img src={image} alt={title} className="menu-img" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="card-footer">
        <div className="price">
          ฿{price} <small>/ {unit}</small>
        </div>
        
      </div>
    </div>
  )
}
