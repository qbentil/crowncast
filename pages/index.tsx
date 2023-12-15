import { MainLayout } from '../layouts'
import { Features, Hero, Testimonial, FAQs, Ad } from '../components'

export default function Home() {
  return (
    <MainLayout page={'Home'} >
      <Hero />
      <Features />
      <Testimonial />
      <FAQs />
      <Ad />  
    </MainLayout>
  )
}
