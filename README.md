# RETHorizon

An independent game studio website featuring an original game portfolio, studio updates, and contact information.

Built with React, TypeScript (strict) and Vite. The Home page has a WebGL2 dot field (`src/webgl/scene.ts`): a wireframe cube of white particles that reacts to the pointer and disperses into a star field as you scroll. It shows a still frame with reduced motion and is skipped if WebGL2 is unavailable. A loading curtain opens onto a swarm of glowing particles flying through a violet nebula. The games, studio, and closing sections each have their own particle shape, while procedural clouds frame the studio updates.

## Getting started

### Prerequisites

Node.js 20 or newer and npm.

### Installation

```bash
npm ci
```

## Usage

```bash
npm run dev      # start the dev server
npm run build    # type-check and build to dist/
npm run preview  # serve the production build
```

Studio branding is centralized in `src/data/brand.json`; update the name, tagline, descriptor, or contact email there. Game portfolio data lives in `src/data/games.ts`. Replace the sample projects and studio updates with approved company information and media. The Deploy workflow publishes to GitHub Pages at `https://<owner>.github.io/<repository>/` and derives the correct asset and canonical URLs from the repository automatically. The build emits a real `games/index.html` and a `404.html` fallback, so deep links work on GitHub Pages.

## Development

```bash
npm run lint && npm run build
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to propose changes.

## License

Released under the MIT license. See [LICENSE](LICENSE).

## Releases

Versions follow [Semantic Versioning](https://semver.org/) and every change is recorded in [CHANGELOG.md](CHANGELOG.md). To release: move the `Unreleased` notes under a new version heading in `CHANGELOG.md`, bump `version` in `package.json`, and merge to `main`. Then open the Actions tab, choose **Release**, click **Run workflow**, enter the version tag (e.g. `v0.2.0`) and the commit SHA or branch to release. The workflow creates the tag at that commit and publishes a GitHub Release using that changelog section. The Deploy workflow publishes the site to GitHub Pages on every push to `main`.
