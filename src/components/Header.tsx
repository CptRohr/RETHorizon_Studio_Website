import { NavLink } from '../router'
import brand from '../data/brand.json'
import whiteLogo from '../../img/logo/RETHorizon Studio Logo White.png'
import blackLogo from '../../img/logo/RETHorizon Studio Logo Black.png'

interface Props {
  open: boolean
  onToggle: () => void
  onClose: () => void
}

export default function Header({ open, onToggle, onClose }: Props) {
  return (
    <>
      <header>
        <NavLink to="home" className="lg" aria-label={`${brand.name} home`}>
          <img className="lg-logo" src={whiteLogo} alt={brand.name} />
          <img className="lg-notes" src={blackLogo} alt="" aria-hidden="true" />
        </NavLink>
        <button className="bg" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mn" onClick={onToggle}>
          <i />
          <i />
        </button>
      </header>
      <nav className={`mn${open ? ' open' : ''}`} id="mn" aria-label="Main" onClick={onClose}>
        <NavLink to="home">Home.</NavLink>
        <NavLink to="games">Games.</NavLink>
        <NavLink to="home" section="about">About.</NavLink>
        <NavLink to="home" section="updates">Updates.</NavLink>
        <NavLink to="home" section="contact">Contact.</NavLink>
      </nav>
    </>
  )
}
