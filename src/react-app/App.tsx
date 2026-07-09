import "./App.css";

const particleBase = "/assets/screenshots/particle-life-random-center-50-clean/webp";
const slimeBase = "/assets/screenshots/slime-mold-presets-ui-hidden/webp";

const heroImage = `${particleBase}/44-particle-life-random-center.webp`;
const capsuleImage = `${particleBase}/40-particle-life-random-center.webp`;

const productDetails = [
	{
		title: "Reactive particle worlds",
		body: "Particle Life produces dense, self-organizing species fields from randomized attraction and repulsion rules.",
	},
	{
		title: "Organic simulation presets",
		body: "Slime Mold presets generate branching trails, cellular blooms, and high-contrast growth patterns.",
	},
	{
		title: "Built for visual exploration",
		body: "The page now leads with captured simulation imagery while the Steam wishlist link remains staged.",
	},
];

const gallerySlots = [
	{
		label: "Particle Life",
		src: `${particleBase}/44-particle-life-random-center.webp`,
		ratio: "wide",
	},
	{
		label: "Slime Mold",
		src: `${slimeBase}/12-venom.webp`,
		ratio: "square",
	},
	{
		label: "Particle Life",
		src: `${particleBase}/41-particle-life-random-center.webp`,
		ratio: "tall",
	},
];

const showcaseImages = [
	{ label: "Particle Life", src: `${particleBase}/43-particle-life-random-center.webp` },
	{ label: "Particle Life", src: `${particleBase}/39-particle-life-random-center.webp` },
	{ label: "Slime Mold", src: `${slimeBase}/02-firecracker-trees.webp` },
	{ label: "Slime Mold", src: `${slimeBase}/06-net.webp` },
	{ label: "Particle Life", src: `${particleBase}/36-particle-life-random-center.webp` },
	{ label: "Slime Mold", src: `${slimeBase}/08-healthy-fungus.webp` },
	{ label: "Particle Life", src: `${particleBase}/32-particle-life-random-center.webp` },
	{ label: "Slime Mold", src: `${slimeBase}/11-cascades.webp` },
];

const launchNotes = ["Steam page pending", "Wishlist link pending", "Trailer slot ready"];

const specifications = [
	["Platform", "Steam"],
	["Store CTA", "Coming Soon"],
	["Wishlist link", "Pending Steam store URL"],
	["Screenshots", "Particle Life and Slime Mold"],
];

function App() {
	return (
		<main className="page">
			<header className="topbar" aria-label="Primary navigation">
				<a className="brand" href="#top" aria-label="Vizza home">
					<span className="brand-mark">V</span>
					<span>Vizza</span>
				</a>
				<nav className="nav-links" aria-label="Product sections">
					<a href="#details">Details</a>
					<a href="#gallery">Gallery</a>
					<a href="#buy">Reserve</a>
				</nav>
			</header>

			<section className="hero" id="top" aria-labelledby="hero-title">
				<div className="hero-copy">
					<p className="eyebrow">Generative simulation suite</p>
					<h1 id="hero-title">Vizza</h1>
					<p className="hero-lede">
						A visual playground of reactive particles, branching slime trails,
						and simulation presets, coming soon to Steam.
					</p>
					<div className="hero-actions" aria-label="Primary actions">
						<button className="button button-primary steam-button" type="button" disabled>
							<span className="steam-label">Steam</span>
							Coming Soon
						</button>
						<a className="button button-secondary" href="#gallery">
							View gallery
						</a>
					</div>
				</div>

				<figure className="hero-visual" aria-label="Particle Life simulation screenshot">
					<img src={heroImage} alt="Vizza Particle Life simulation forming a dense golden particle bloom" />
				</figure>
			</section>

			<section className="proof-strip" aria-label="Launch highlights">
				<div>
					<strong>Steam</strong>
					<span>Platform</span>
				</div>
				<div>
					<strong>Soon</strong>
					<span>Release status</span>
				</div>
				<div>
					<strong>22</strong>
					<span>Captured WebPs</span>
				</div>
				<div>
					<strong>Preset</strong>
					<span>Simulation gallery</span>
				</div>
			</section>

			<section className="section section-split" id="details">
				<div className="section-heading">
					<p className="eyebrow">Product story</p>
					<h2>Lead with the Steam launch moment.</h2>
				</div>
				<div className="detail-grid">
					{productDetails.map((detail) => (
						<article className="detail-card" key={detail.title}>
							<h3>{detail.title}</h3>
							<p>{detail.body}</p>
						</article>
					))}
				</div>
			</section>

			<section className="section gallery-section" id="gallery">
				<div className="section-heading">
					<p className="eyebrow">Gallery</p>
					<h2>Captured screenshots from the current simulations.</h2>
				</div>
				<div className="gallery-grid">
					{gallerySlots.map((slot) => (
						<figure className={`gallery-item ${slot.ratio}`} key={slot.src}>
							<img src={slot.src} alt={`${slot.label} screenshot from Vizza`} loading="lazy" />
							<figcaption>{slot.label}</figcaption>
						</figure>
					))}
				</div>
				<div className="showcase-grid" aria-label="Additional Vizza screenshots">
					{showcaseImages.map((image) => (
						<figure className="showcase-item" key={image.src}>
							<img src={image.src} alt={`${image.label} screenshot from Vizza`} loading="lazy" />
							<figcaption>{image.label}</figcaption>
						</figure>
					))}
				</div>
			</section>

			<section className="section buy-section" id="buy">
				<div className="buy-copy">
					<p className="eyebrow">Steam</p>
					<h2>Hold the wishlist action until the store page is live.</h2>
					<p>
						The button is intentionally disabled for now. Once the Steam page
						is public, this section can switch to a live wishlist link.
					</p>
				</div>

				<div className="buy-panel" aria-label="Steam release summary">
					<div className="mini-product">
						<img className="mini-product-image" src={capsuleImage} alt="Vizza Particle Life screenshot thumbnail" loading="lazy" />
					</div>

					<div className="status-pills" aria-label="Launch status">
						{launchNotes.map((note) => (
							<span key={note}>{note}</span>
						))}
					</div>

					<dl className="spec-list">
						{specifications.map(([label, value]) => (
							<div key={label}>
								<dt>{label}</dt>
								<dd>{value}</dd>
							</div>
						))}
					</dl>

					<button className="button button-primary button-full" type="button" disabled>
						Coming Soon
					</button>
				</div>
			</section>
		</main>
	);
}

export default App;
