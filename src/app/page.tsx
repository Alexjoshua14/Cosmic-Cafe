import Image from 'next/image'
import Hero from '@/components/sections/hero'
import ProductShowcase from '@/components/sections/productShowcase'
import Recipes from '@/components/sections/recipes'
import About from '@/components/sections/about'
import SocialFeed from '@/components/sections/socialFeed'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <ProductShowcase />
      <Recipes />
      <About />
      <SocialFeed />
      <Footer />
    </main >
  )
}