import "./App.css";

const steamUrl = "https://store.steampowered.com/app/4945920";
const githubUrl = "https://github.com/Velfi/vizza-dot-page";
const siteUrl = "https://vizza.page";

const particleBase =
  "/assets/screenshots/particle-life-random-center-50-clean/webp";
const slimeBase = "/assets/screenshots/slime-mold-presets-ui-hidden/webp";
const grayScottBase = "/assets/screenshots/gray-scott/webp";
const flowBase = "/assets/screenshots/flow-field-random-noise-50-clean/webp";
const pelletsBase = "/assets/screenshots/pellets-random-10-clean/webp";
const voronoiBase = "/assets/screenshots/voronoi-ca-random-10-clean/webp";
const moireBase = "/assets/screenshots/moire-random-10-clean/webp";
const vectorsBase = "/assets/screenshots/vectors-random-10-clean/webp";
const primordialBase = "/assets/screenshots/primordial-random-10-clean/webp";
const steamBase = "/assets/steam";

const steamAssets = {
  pageBackground: `${steamBase}/store_page_background.png`,
  heroLogo: `${steamBase}/library_logo_transparent.png`,
  storeCapsuleMain: `${steamBase}/store_capsule_main.png`,
  storeCapsuleVertical: `${steamBase}/store_capsule_vertical.png`,
};

const heroImage = steamAssets.pageBackground;

const mediaHighlights = [
  {
    title: "Vizza",
    src: steamAssets.storeCapsuleMain,
    alt: "Vizza Steam capsule key art with the Vizza wordmark over colorful particles",
    width: 1232,
    height: 706,
  },
  {
    title: "Particle Life",
    src: `${particleBase}/44-particle-life-random-center.webp`,
    alt: "Particle Life simulation forming a bright clustered field of colored particles on black",
    width: 6000,
    height: 4000,
  },
  {
    title: "Gray-Scott",
    src: `${grayScottBase}/03-gray-scott-maze-stripes.webp`,
    alt: "Gray-Scott reaction-diffusion simulation forming dense pink and yellow maze stripes",
    width: 3456,
    height: 2168,
  },
];

type Simulation = {
  name: string;
  body: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  variant?: string;
};

const simulations: Simulation[] = [
  {
    name: "Slime Mold",
    body: "Make branching maps, fake roots, transit-diagram nonsense, and backgrounds that grow across the screen.",
    src: `${slimeBase}/08-healthy-fungus.webp`,
    alt: "Slime Mold simulation creating green luminous clusters inside a dark web of trails",
  },
  {
    name: "Gray-Scott",
    body: "Grow spots, stripes, bubbles, and soft organic textures.",
    src: `${grayScottBase}/02-gray-scott-cells.webp`,
    alt: "Gray-Scott reaction-diffusion simulation with glowing blue cell-like spots on a dark field",
    width: 3456,
    height: 2168,
  },
  {
    name: "Particle Life",
    body: "Find swarms, clusters, orbiting bits, and little moving systems for ambient loops.",
    src: `${particleBase}/43-particle-life-random-center.webp`,
    alt: "Particle Life simulation with dense pastel particle species moving in a dark field",
  },
  {
    name: "Flow Field",
    body: "Paint currents, smoke trails, and motion backdrops that point somewhere.",
    src: `${flowBase}/11-flow-field-random-noise.webp`,
    alt: "Flow-field simulation with purple and magenta trails curling into a vortex",
  },
  {
    name: "Pellets",
    body: "Play with digital particles. Throw them around and watch the waves that form.",
    src: `${pelletsBase}/06-pellets-random.webp`,
    alt: "Pellets simulation with dense multicolor particles scattered across a dark field",
  },
  {
    name: "Voronoi",
    body: "Make map-like cells, stained-glass regions, and crisp animated borders.",
    src: `${voronoiBase}/03-voronoi-ca-random.webp`,
    alt: "Voronoi simulation forming bright green and purple polygonal regions",
  },
  {
    name: "Moire",
    body: "Use layered waves for optical shimmer, interference bands, and moody moving texture.",
    src: `${moireBase}/08-moire-random.webp`,
    alt: "Moire simulation with soft blue, green, and red interference swirls",
  },
  {
    name: "Vectors",
    body: "Turn direction fields into dense line textures, sketches, and readable motion maps.",
    src: `${vectorsBase}/08-vectors-random.webp`,
    alt: "Vector field simulation made of dense pale strokes on a dark background",
  },
  {
    name: "Primordial",
    body: "Build clustering particle clouds, rings, swarms, and colony-like motion.",
    src: `${primordialBase}/04-primordial-random.webp`,
    alt: "Primordial particle simulation forming a dense pink and yellow particle field",
  },
  {
    name: "Gradient Editor",
    body: "Make and save color schemes you can reuse across simulations.",
    variant: "gradient",
  },
];

const funReasons = [
  {
    title: "Find a backdrop",
    body: "Make something for a second monitor, stream scene, projection, or desktop wallpaper.",
  },
  {
    title: "Record a clip",
    body: "When a scene lands, capture the motion instead of trying to describe it.",
  },
  {
    title: "Save the recipe",
    body: "Keep the presets and palettes that work so you can come back to them later.",
  },
  {
    title: "Let it run",
    body: "Leave a screen doing something while you work, listen, think, or zone out.",
  },
];

const platforms = ["macOS", "Windows"];

function SteamCta({ className = "" }: { className?: string }) {
  return (
    <a
      className={`button button-primary ${className}`}
      href={steamUrl}
      rel="noreferrer"
      target="_blank"
    >
      Open Steam page
    </a>
  );
}

function App() {
  return (
    <div className="page">
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Vizza home">
          <span className="brand-mark" aria-hidden="true">
            V
          </span>
          <span className="brand-name">Vizza</span>
        </a>
        <nav className="nav-links" aria-label="Product sections">
          <a href="#about">What it is</a>
          <a href="#simulations">Things inside</a>
          <a href="#support">Platforms</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <figure className="hero-backdrop">
            <img
              src={heroImage}
              alt="Vizza particle simulation artwork with green, blue, and yellow clusters"
              width="1438"
              height="810"
              loading="eager"
              decoding="async"
            />
          </figure>

          <div className="hero-content">
            <p className="eyebrow">Eine kleine collection of simulations</p>
            <div className="hero-logo-frame">
              <img
                className="hero-logo-image"
                src={steamAssets.heroLogo}
                alt="Vizza"
                width="1280"
                height="720"
              />
            </div>
            <h1 id="hero-title">
              Is it a game?<br/>
              A screensaver?<br/>
              A psychedelic trip into a digital wonderland?<br/>
              You decide!
            </h1>
            <p><sub><em>It's free so all you have to lose is your time!</em></sub></p>
            <p className="hero-lede">
              Pick a simulation, start from a preset, then push motion and color
              until it works as a backdrop, clip, reference image, or just
              something nice to leave running.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <SteamCta />
              <a
                className="button button-secondary"
                href={githubUrl}
                rel="noreferrer"
                target="_blank"
              >
                View the source
              </a>
            </div>
          </div>

          <div
            className="hero-media-row"
            aria-label="Captured Vizza screenshots"
          >
            {mediaHighlights.map((item) => (
              <figure className="hero-media" key={item.src}>
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section
          className="intro section-band"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-heading">
            <p className="eyebrow">What is Vizza?</p>
            <h2 id="about-title">A place to grow pretty moving images.</h2>
          </div>
          <div className="intro-copy">
            <p>
              Vizza collects my favorite simulations into one playground. Use it
              to create art, or just have fun exploring and messing around to
              see what happens.
            </p>
            <div className="stat-row" aria-label="Vizza highlights">
              <div>
                <strong>Desktop</strong>
                <span>macOS and Windows</span>
              </div>
              <div>
                <strong>Presets</strong>
                <span>jump to a look</span>
              </div>
              <div>
                <strong>Color</strong>
                <span>save the mood</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section"
          id="simulations"
          aria-labelledby="simulations-title"
        >
          <div className="section-heading wide-heading">
            <p className="eyebrow">Things inside</p>
            <h2 id="simulations-title">
              Pick the kind of image you want to make.
            </h2>
          </div>
          <div className="simulation-grid">
            {simulations.map((simulation) => (
              <article className="simulation-card" key={simulation.name}>
                {simulation.src ? (
                  <img
                    src={simulation.src}
                    alt={simulation.alt ?? ""}
                    width={simulation.width ?? 6000}
                    height={simulation.height ?? 4000}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div
                    className={`generated-visual ${simulation.variant ?? ""}`}
                    aria-hidden="true"
                  />
                )}
                <div>
                  <h3>{simulation.name}</h3>
                  <p>{simulation.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="fun section-band"
          id="fun"
          aria-labelledby="fun-title"
        >
          <div className="section-heading">
            <p className="eyebrow">A bit of fun</p>
            <h2 id="fun-title">
              Start with motion, then find somewhere to use it.
            </h2>
            <p className="fun-copy">
              Pick a starting point, nudge one rule, watch the scene react, then
              keep pushing until it fits the thing you are making.
            </p>
          </div>
          <div className="fun-grid">
            {funReasons.map((reason, index) => (
              <article className="fun-card" key={reason.title}>
                <span className="fun-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="platforms section"
          id="support"
          aria-labelledby="platforms-title"
        >
          <div className="section-heading">
            <p className="eyebrow">For desktops</p>
            <h2 id="platforms-title">macOS and Windows for now.</h2>
            <p>
              Steam starts with macOS, and Windows packages are part of the
              current release work. I am leaving other platforms off until there
              is a real package behind them.
            </p>
          </div>
          <ul className="platform-list" aria-label="Supported app platforms">
            {platforms.map((platform) => (
              <li key={platform}>{platform}</li>
            ))}
          </ul>
        </section>

        <section className="final-cta" aria-labelledby="final-cta-title">
          <div>
            <p className="eyebrow">Steam</p>
            <h2 id="final-cta-title">
              Check Vizza on Steam if this sounds like your kind of thing.
            </h2>
            <p>
              Fair warning: Steam may redirect you until Valve publishes the
              page.
            </p>
          </div>
          <div className="final-media">
            <img
              className="final-capsule"
              src={steamAssets.storeCapsuleVertical}
              alt="Vizza vertical Steam capsule art"
              width="748"
              height="896"
              loading="lazy"
              decoding="async"
            />
            <div className="final-actions">
              <SteamCta className="button-large" />
              <a
                className="button button-secondary"
                href={githubUrl}
                rel="noreferrer"
                target="_blank"
              >
                View the source
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Vizza</p>
        <nav aria-label="Footer links">
          <a href={siteUrl}>Website</a>
          <a href={githubUrl} rel="noreferrer" target="_blank">
            Source
          </a>
          <a href={steamUrl} rel="noreferrer" target="_blank">
            Steam
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
