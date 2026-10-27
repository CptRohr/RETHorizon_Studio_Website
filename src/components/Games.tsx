import { games } from '../data/games'

export default function Games() {
  return (
    <main id="games">
      <div className="w">
        <span className="mo" style={{ color: 'var(--ac)' }}>Our portfolio</span>
        <h1>Games.</h1>
        <p className="games-intro">Original worlds, built to be explored. Here’s what we’re working on.</p>
        <div className="grid">
          {games.map((game) => (
            <article className="card" key={game.slug}>
              <div className="th" aria-hidden="true" style={{ background: `radial-gradient(circle at 70% 30%, ${game.accent}, transparent 60%), #121216` }}>
                <span>{game.title}</span>
              </div>
              <div className="cb">
                <span className="mo">{game.status}</span>
                <h2>{game.title}</h2>
                <p>{game.tagline}</p>
                <p className="game-description">{game.description}</p>
                <div className="game-tags">
                  {game.genres.map((genre) => <span className="mo" key={genre}>{genre}</span>)}
                  {game.platforms.map((platform) => <span className="mo" key={platform}>{platform}</span>)}
                </div>
                {(game.storeUrl || game.trailerUrl) && (
                  <div className="cf">
                    {game.storeUrl && <a className="mo" href={game.storeUrl} target="_blank" rel="noopener noreferrer">Visit store ↗</a>}
                    {game.trailerUrl && <a className="mo" href={game.trailerUrl} target="_blank" rel="noopener noreferrer">Watch trailer ↗</a>}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
