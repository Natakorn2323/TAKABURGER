 'use client'
 import { menuItems } from '@/lib/menuData'
import { useCart } from '@/context/CartContext'

export default function OrderMenuList() {
  const { cart, addToCart, decrease } = useCart()

  return (
    <div className="order-menu">
      <h2 className="order-title">เลือกเมนู <em>ที่ต้องการ</em></h2>

      <div className="order-grid">
        {menuItems.map((item) => {
          const inCart = cart.find((c) => c.title === item.title)
          return (
            <div key={item.title} className="order-card">
              {item.badge && <span className="card-badge">{item.badge}</span>}
              {/*<span className="order-card-emoji">{item.emoji}</span>*/} 
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="order-card-footer">
                <span className="order-price">฿{item.price}</span>
                {inCart ? (
                  <div className="qty-control">
                    <button onClick={() => decrease(item.title)}>−</button>
                    <span>{inCart.qty}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                ) : (
                  <button className="add-btn" onClick={() => addToCart(item)}>+</button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
