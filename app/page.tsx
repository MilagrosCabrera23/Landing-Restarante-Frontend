import Hero from '../components/sections/hero'
import About from '../components/sections/about'
import Menu from '../components/sections/menu'
import Galería from '@/components/sections/gallery';
import Contact from '../components/sections/contact'


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Menu />
      <Galería />
      <Contact />
    </main>
  );
}
