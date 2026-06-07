const items = [
  'เบอร์เกอร์สดใหม่',
  'FRESH DAILY',
  'วัตถุดิบพรีเมียม',
  'FREE DELIVERY',
  'สั่งผ่าน Grab & LINE MAN',
  'TAKA BURGER BANGKOK',
]

export default function Marquee() {
  // ทำซ้ำ 2 รอบเพื่อให้ seamless loop
  const doubled = [...items, ...items]

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div className="marquee-item" key={i}>
            {item}
            <span className="marquee-dot" />
          </div>
        ))}
      </div>
    </div>
  )
}
