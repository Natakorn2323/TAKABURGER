import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import MenuSection from '@/components/MenuSection'
import Menuset from '@/components/Menuset'
import AboutSection from '@/components/AboutSection'
import DeliveryBanner from '@/components/DeliveryBanner'
import ReviewsSection from '@/components/ReviewsSection'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'


export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <Marquee />
      <MenuSection />
      <Menuset />
      <AboutSection />
      <DeliveryBanner />
      {/* <ReviewsSection /> */}
      <Footer />
    </main>
  )
}
