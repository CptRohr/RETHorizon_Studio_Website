import { useEffect, useRef, useState } from 'react'
import Games from './components/Games'
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Loader from './components/Loader'
import { useBootPhase } from './boot'
import { useReveal } from './hooks'
import { scrollToSection, takePendingSection, useRoute } from './router'
import brand from './data/brand.json'

export default function App() {
  const route = useRoute()
  const [menu, setMenu] = useState(false)
  const first = useRef(true)
  const phase = useBootPhase()
  const needsScene = useRef(route === 'home')

  useEffect(() => {
    setMenu(false)
    document.title = route === 'games' ? `Games — ${brand.name}` : route === 'notfound' ? `Not found — ${brand.name}` : `${brand.name} — ${brand.descriptor}`
    if (first.current) {
      first.current = false // keep the browser's own scroll restoration on load/refresh
      return
    }
    const section = takePendingSection()
    if (section) requestAnimationFrame(() => scrollToSection(section))
    else scrollTo(0, 0)
  }, [route])

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : ''
    document.body.classList.toggle('menu-open', menu)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenu(false)
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [menu])

  useEffect(() => {
    document.documentElement.classList.toggle('booting', phase !== 'live')
  }, [phase])

  useReveal(route)

  return (
    <>
      <div inert={phase !== 'live'}>
        <Header open={menu} onToggle={() => setMenu((m) => !m)} onClose={() => setMenu(false)} />
        {route === 'games' ? <Games /> : route === 'notfound' ? <NotFound /> : <Home />}
      </div>
      <Loader needsScene={needsScene.current} />
    </>
  )
}
