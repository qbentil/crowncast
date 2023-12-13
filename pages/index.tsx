import { MainLayout } from '../layouts'
import { Features, Hero, Testimonial, FAQs } from '../components'

export default function Home() {
  return (
    <MainLayout page={'Home'} >
      <Hero />
      <Features />
      <Testimonial />
      <FAQs />
    </MainLayout>
  )
}
