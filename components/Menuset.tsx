import Image from 'next/image'

const sets = [
  { id: 1, image: '/images/sets/set1.jpg', alt: 'Set 1' },
  { id: 2, image: '/images/sets/set2.jpg', alt: 'Set 2' },
  { id: 3, image: '/images/sets/set3.jpg', alt: 'Set 3' },
  { id: 4, image: '/images/sets/set4.jpg', alt: 'Set 4' },
]

export default function MenuSet() {
  return (
    <section className="menuset-section" id="sets">
      <div className="menuset-grid">
        {sets.map((set) => (
          <div key={set.id} className="menuset-card">
            <Image
              src={set.image}
              alt={set.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}