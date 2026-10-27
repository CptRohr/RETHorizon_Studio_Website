import type { CSSProperties } from 'react'
import { games } from '../data/games'
import brand from '../data/brand.json'
import { NavLink } from '../router'
import DotField from './DotField'
import instagramIcon from '../../img/social-icons/Instagram.svg'
import xIcon from '../../img/social-icons/Twitter.svg'
import youtubeIcon from '../../img/social-icons/Youtube.svg'
import websiteIcon from '../../img/social-icons/WWW.svg'
import emailIcon from '../../img/social-icons/Gmail.svg'

const UPDATES: ReadonlyArray<readonly [string, string, string]> = [
  ['What we create', 'More than games', 'We make games, short films, songs, and books—free for everyone to enjoy.'],
  ['Our community', 'Eight people, many talents', 'Our team includes writers, programmers, an artist, a game designer, a playtester, and an investor.'],
  ['The journey', 'Every step counts', 'We learn from every setback and keep striving to make our next project better. Stay tuned.'],
]

const Heading = ({ title, sub }: { title: string; sub: string }) => (
  <div className="hd2 rv">
    <h2>{title}</h2>
    <p><i />{sub}<i /></p>
  </div>
)

export default function Home() {
  return (
    <main id="home">
      <DotField />
      <section className="hero">
        <div className="w">
          <h1>Interactive experiences<br />That reflect reality.</h1>
          <div className="sub"><i />Games that challenge perspectives, and stay with you.</div>
        </div>
      </section>

      <section className="sec side" id="games">
        <div className="w">
          <Heading title="Our games." sub="Wait for more!" />
          <div className="rv">
            {games.filter((game) => game.featured).slice(0, 3).map((game, i) => (
              <div className="row" key={game.slug}>
                <span className="mo">0{i + 1}</span>
                <span>{game.title}<small>{game.tagline}</small></span>
                <span className="mo">{game.status}</span>
              </div>
            ))}
          </div>
          <div className="cta rv"><NavLink to="games" className="btn">Explore our games →</NavLink></div>
        </div>
      </section>

      <section className="sec side" id="about">
        <div className="w">
          <Heading title="About." sub="who we are" />
          <div className="ab rv">
            <div><h3>Independent and indie</h3><p>{brand.name} is a small, independent studio creating games, short films, songs, and books.</p></div>
            <div><h3>Free to enjoy</h3><p>Everything we make is free. Donations or ad support help us keep creating.</p></div>
            <div><h3>Made by contributors</h3><p>Our eight-person team brings together writers, programmers, an artist, a game designer, a playtester, and an investor.</p></div>
          </div>
        </div>
      </section>

      <section className="sec" id="updates">
        <div className="w" style={{ maxWidth: 860 }}>
          <Heading title="Studio notes." sub="from the worlds we’re making" />
          <div className="updates">
            {UPDATES.map(([type, title, copy], i) => (
              <article className="update rv" key={title} style={{ '--i': i } as CSSProperties}>
                <span className="mo">{type}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="close side" id="contact">
        <div className="w">
          <h2 className="rv">Have a world to <em>share?</em></h2>
          <a className="btn" href={`mailto:${brand.contactEmail}`}>Get in touch ↗</a>
        </div>
      </section>

      <footer className="ftr">
        <div className="w">
          <div className="fc">
            <div><span className="mo">Navigate</span><NavLink to="home">Home</NavLink><NavLink to="games">Games</NavLink><NavLink to="home" section="about">About</NavLink><NavLink to="home" section="updates">Updates</NavLink></div>
            <div>
              <span className="mo">Find us</span>
              <a className="social-link" href="https://www.instagram.com/rethorizon.studio/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="" />rethorizon.studio</a>
              <a className="social-link" href="https://x.com/RETHorizon" target="_blank" rel="noopener noreferrer"><img src={xIcon} alt="" />@RETHorizon</a>
              <a className="social-link" href="https://www.youtube.com/@RETHorizonStudioOfficial" target="_blank" rel="noopener noreferrer"><img src={youtubeIcon} alt="" />@RETHorizonStudioOfficial</a>
              <a className="social-link" href="https://rethorizon-studio.itch.io/" target="_blank" rel="noopener noreferrer"><img src={websiteIcon} alt="" />RETHorizon Studio (itch.io)</a>
              <a className="social-link" href={`mailto:${brand.contactEmail}`}><img src={emailIcon} alt="" />{brand.contactEmail}</a>
            </div>
            <div><span className="mo">Studio</span><span>Independent game company</span><span>Original experiences</span></div>
            <div><span className="mo">Say hello</span><NavLink to="home" section="contact">Work with us ↗</NavLink></div>
          </div>
          <div className="leg mo">© {new Date().getFullYear()} {brand.name}. All rights reserved.</div>
        </div>
      </footer>
    </main>
  )
}
