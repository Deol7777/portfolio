// Sections — Hero, Ecosystem (Stack), Foundations, Growth (Experience), Branches (Projects), Canopy (Contact)
const { LeafMark, Sprig, GithubIcon, LinkedinIcon, MailIcon, FileIcon,
  DownloadIcon, ArrowRight, TwitterIcon,
  StackIcon, NodesIcon, SparkIcon, CloudIcon, WindIcon,
  ServerIcon, InfraIcon, HumanIcon,
  DatabaseIcon, MountainIcon, ChevronDown, GlobeIcon } = window.Ico;
const { HeroTree, RootsScene, FoundationsTree, RiverScene, TimelineTree, Divider,
  ArtAI, ArtBackend, ArtFrontend, ArtFood, ArtEvents, ArtCommerce, ArtEyecare, ArtBuilders, ArtTelecoms } = window.Scenery;

/* ---------- SectionHead — nav label primary, thematic subtitle below ---------- */
function SectionHead({ title, themeTitle, lede }) {
  const t = window.useTweakCtx ? window.useTweakCtx() : {};
  const show = t.showThemeSubtitles !== false;
  return (
    <div className="section__head">
      <h2 className="section__title">{title} <span className="sprig"><Sprig size={26} /></span></h2>
      {themeTitle && show &&
      <p className="section__sub">— {themeTitle}</p>
      }
      {lede && <p className="section__lede">{lede}</p>}
    </div>);

}

/* ---------- intersection-observer hook ---------- */
function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    // Immediately reveal anything already in (or above) the viewport.
    const reveal = (el) => {el.classList.add("is-in");};
    const vh = window.innerHeight;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.9) reveal(el);
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          reveal(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => {if (!el.classList.contains("is-in")) io.observe(el);});
    return () => io.disconnect();
  }, []);
}

/* ---------- NAV ---------- */
function Nav({ activeId }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = [
  ["home", "Home"],
  ["growth", "Experience"],
  ["ecosystem", "Stack"],
  ["foundations", "Foundations"],
  ["branches", "Projects"],
  ["canopy", "Contact"]];

  return (
    <header className={"nav" + (scrolled ? " is-scrolled" : "")}>
      <a href="#home" className="nav__brand">
        <span className="leaf-mark"><LeafMark size={22} /></span>
        <span>GD</span>
      </a>
      <nav className="nav__links">
        {items.map(([id, label]) =>
        <a key={id} href={"#" + id} className={activeId === id ? "is-active" : ""}>{label}</a>
        )}
      </nav>
      <a href="#canopy" className="nav__cta">
        Let's Connect <LeafMark size={14} />
      </a>
    </header>);

}

/* ---------- DRIFTING LEAVES (hero ambient) ---------- */
function DriftingLeaves({ count = 14 }) {
  const leaves = React.useMemo(() => Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: 5 + Math.random() * 90,
    top: -5 - Math.random() * 30,
    size: 10 + Math.random() * 14,
    dx: -40 + Math.random() * 80,
    dy: 220 + Math.random() * 260,
    dr: -240 + Math.random() * 480,
    dur: 10 + Math.random() * 14,
    delay: -Math.random() * 16,
    hue: Math.random() > 0.5 ? "#7a955a" : "#a4b58a",
    op: 0.5 + Math.random() * 0.4
  })), [count]);

  return (
    <>
      {leaves.map((l) =>
      <span key={l.id} className="leaf"
      style={{
        left: `${l.left}%`, top: `${l.top}%`,
        width: l.size, height: l.size,
        color: l.hue, opacity: l.op,
        "--dx": `${l.dx}px`, "--dy": `${l.dy}px`, "--dr": `${l.dr}deg`,
        animation: `drift ${l.dur}s linear ${l.delay}s infinite`
      }}>
        
          <svg viewBox="0 0 24 24" width={l.size} height={l.size}>
            <path d="M3 21c1-9 8-15 18-18-1 10-8 17-18 18z" fill="currentColor" />
            <path d="M5 19c4-4 9-9 14-14" stroke="rgba(0,0,0,0.3)" strokeWidth="0.8" fill="none" />
          </svg>
        </span>
      )}
    </>);

}

/* ---------- HERO ---------- */
function Hero() {
  const sceneRef = React.useRef(null);
  const treeRef = React.useRef(null);
  const t = window.useTweakCtx();

  React.useEffect(() => {
    const onMove = (e) => {
      if (!sceneRef.current || !treeRef.current) return;
      if (t.reducedMotion) {treeRef.current.style.transform = "";return;}
      const r = sceneRef.current.getBoundingClientRect();
      const cx = (e.clientX - r.left) / r.width - 0.5;
      const cy = (e.clientY - r.top) / r.height - 0.5;
      treeRef.current.style.transform =
      `translate(${cx * 18}px, ${cy * 10}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [t.reducedMotion]);

  return (
    <section id="home" className="hero" data-screen-label="01 Hero">
      {t.showLeaves && !t.reducedMotion && <DriftingLeaves count={t.leafCount ?? 12} />}
      <div className="hero__grid">
        <div className="rise-in">
          <p className="hero__eyebrow">Hi, I'm</p>
          <h1 className="hero__name">Gurnoor <span className="accent">Deol</span></h1>
          <p className="hero__role">
            Full-Stack Software Engineer
            <span style={{ color: "var(--sage)" }}><LeafMark size={20} /></span>
          </p>
          <p className="hero__copy">
            I build scalable, human-centered systems that solve real-world problems.
            Passionate about clean architecture, thoughtful tooling, and the
            quiet craft of software that simply works.
          </p>
          <div className="hero__ctas">
            <a href="#branches" className="btn btn--primary">
              View My Work <LeafMark size={14} />
            </a>
            <a href="https://docs.google.com/document/d/1INLUbgrCy366AcTmcO4OFYZ-nDoG_O7Mh1mPM8BhBBQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              View Résumé <DownloadIcon size={14} />
            </a>
          </div>
          <div className="hero__socials">
            <a href="#" className="social" aria-label="GitHub" onClick={(e) => e.preventDefault()}><GithubIcon size={16} /></a>
            <a href="#" className="social" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}><LinkedinIcon size={16} /></a>
            <a href="#" className="social" aria-label="Email" onClick={(e) => e.preventDefault()}><MailIcon size={16} /></a>
            <a href="https://docs.google.com/document/d/1INLUbgrCy366AcTmcO4OFYZ-nDoG_O7Mh1mPM8BhBBQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="social" aria-label="Résumé"><FileIcon size={16} /></a>
          </div>
        </div>

        <div className="hero__scene" ref={sceneRef}>
          <div className="tree-wrap" ref={treeRef}
          style={{ transition: "transform 1.2s cubic-bezier(0.2,0.7,0.2,1)" }}>
            <HeroTree />
          </div>
        </div>
      </div>

      <SkillTiles />
      <div className="mist" style={{ bottom: 0 }} />
    </section>);

}

/* ---------- SKILL TILES (under hero) ---------- */
const TILES = [
{ icon: StackIcon, title: "Full Stack", hint: "// end-to-end" },
{ icon: NodesIcon, title: "Distributed Systems", hint: "// resilient mesh" },
{ icon: SparkIcon, title: "AI & Automation", hint: "// intelligent flow" },
{ icon: CloudIcon, title: "Cloud Infrastructure", hint: "// scalable sky" },
{ icon: WindIcon, title: "Frontend", hint: "// responsive canopy" },
{ icon: ServerIcon, title: "Backend", hint: "// deep roots" },
{ icon: InfraIcon, title: "DevOps", hint: "// underground systems" },
{ icon: HumanIcon, title: "Human-Centered", hint: "// sunlit research" }];

function SkillTiles() {
  return (
    <div className="tiles">
      {TILES.map((t, i) => {
        const I = t.icon;
        return (
          <div key={i} className="tile reveal" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="tile__icon"><I size={26} /></div>
            <h3 className="tile__title">{t.title}</h3>
            <div className="tile__hint">{t.hint}</div>
          </div>);

      })}
    </div>);

}

/* ---------- ECOSYSTEM (Stack) ---------- */
const ECO = [
{ icon: LeafMark, title: "Languages",
  body: "Java, JavaScript, TypeScript, Python, C/C++, SQL" },
{ icon: WindIcon, title: "Frontend",
  body: "React, Next.js, HTML, CSS, Tailwind, Framer Motion" },
{ icon: MountainIcon, title: "Backend",
  body: "Spring Boot, Node.js, REST APIs, RabbitMQ, Hibernate" },
{ icon: DatabaseIcon, title: "Databases",
  body: "PostgreSQL, MySQL, Redis, Firebase, MongoDB" },
{ icon: CloudIcon, title: "DevOps & Cloud",
  body: "Docker, Kubernetes, AWS, GitHub Actions, Jenkins CI/CD" },
{ icon: SparkIcon, title: "AI & Automation",
  body: "OpenAI API, Pinecone, ElevenLabs, n8n, RAG Pipelines" }];

function Ecosystem() {
  return (
    <section id="ecosystem" className="eco" data-screen-label="03 Stack">
      <div className="eco__bg"><RiverScene /></div>
      <div className="eco__grid">
        <div className="reveal">
          <SectionHead
            title="Stack"
            themeTitle="The Ecosystem"
            lede="Technologies flowing together like a living stream — each tool chosen for how naturally it joins the larger current." />
          
        </div>

        <div className="eco__cards">
          {ECO.map((e, i) => {
            const I = e.icon;
            return (
              <div key={e.title} className="eco__card reveal"
              style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="eco__card__head">
                  <div className="eco__card__icon"><I size={16} /></div>
                  <h4>{e.title}</h4>
                </div>
                <p>{e.body}</p>
              </div>);

          })}
        </div>
      </div>
    </section>);

}

/* ---------- FOUNDATIONS (CS concepts with sprawling-roots backdrop) ---------- */
const FOUNDATIONS = [
{ icon: InfraIcon, title: "System Design",
  body: "Designing for throughput, fault-tolerance, and humane operations at scale." },
{ icon: ServerIcon, title: "Data Structures & Algorithms",
  body: "The right shape for the data — and the right walk through it. Complexity as a tool." },
{ icon: NodesIcon, title: "Multithreading",
  body: "Threads, locks, atomics, async runtimes — coordinated work, race-free results." },
{ icon: CloudIcon, title: "Distributed Systems",
  body: "Replication, partitioning, consensus — surviving the network having a bad day." },
{ icon: StackIcon, title: "Clean Code",
  body: "Small functions, honest names, kind tests. Code that reads like it was written for the next person." },
{ icon: SparkIcon, title: "Object-Oriented Design",
  body: "Encapsulation, inheritance, polymorphism — grammar for systems that stay legible as they grow." }];


function Foundations() {
  return (
    <section id="foundations" className="foundations" data-screen-label="04 Foundations" style={{ backgroundSize: "cover", backgroundPosition: "center center", color: "rgb(28, 26, 22)" }}>
      <div className="foundations__scene" aria-hidden>
        <FoundationsTree />
      </div>

      <div className="foundations__wrap">
        <div className="foundations__head reveal">
          <SectionHead
            title="Foundations"
            themeTitle="The Roots"
            lede="Core computer science principles that root everything I build — quiet, deep, and always growing." />
          
        </div>

        <div className="found__cards">
          {FOUNDATIONS.map((f, i) => {
            const I = f.icon;
            return (
              <div key={f.title} className="found__card reveal"
              style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="found__card__icon"><I size={22} /></div>
                <h4 className="found__card__title">{f.title}</h4>
                <p className="found__card__body">{f.body}</p>
              </div>);

          })}
        </div>
      </div>
    </section>);

}

/* ---------- GROWTH (vertical timeline) ---------- */
const GROWTH = [
{ year: "2026 – Present", role: "Full Stack Developer", company: "Radius X · Part-Time",
  detail: "Building AI-powered voice systems and end-to-end automation pipelines for production use.",
  size: 1.0 },
{ year: "2022 – Present", role: "Full Stack Developer", company: "Cybersalt · Part-Time → Full-Time",
  detail: "Shipping web platforms, automation workflows, and third-party integrations for clients.",
  size: 0.9 },
{ year: "2023 – 2024", role: "Software Engineer Co-op", company: "Broadcom",
  detail: "Developed enterprise microservices and hardened internal services for security & scale.",
  size: 0.78 },
{ year: "2022 – 2023", role: "SDE Co-op", company: "Forgeahead Solutions",
  detail: "Built full-stack applications and reliable backend services for early-stage products.",
  size: 0.66 }];

function Growth() {
  return (
    <section id="growth" className="growth" data-screen-label="02 Experience">
      <div className="growth__head reveal">
        <SectionHead
          title="Experience"
          themeTitle="The Growth"
          lede="Every experience adds a new ring to the journey — a season of learning, building, and finding the right way to ship." />
        
      </div>

      <div className="growth__timeline">
        <div className="growth__spine" aria-hidden></div>
        {GROWTH.map((g, i) => {
          const side = i % 2 === 0 ? "left" : "right";
          return (
            <div key={i} className={`growth__row growth__row--${side} reveal`}
            style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="growth__card">
                <div className="growth__year">{g.year}</div>
                <h4 className="growth__role">{g.role}</h4>
                <div className="growth__company">{g.company}</div>
                <p className="growth__detail">{g.detail}</p>
              </div>
              <div className="growth__marker" aria-hidden>
                <span className="growth__marker__dot"></span>
                <span className="growth__marker__ring"></span>
              </div>
            </div>);

        })}
      </div>
    </section>);

}

/* ---------- BRANCHES (Projects — vertical grid) ---------- */
const PROJECTS = [
{
  title: "Voice AI Chatbot for Admissions",
  tags: ["ElevenLabs", "Pinecone RAG", "n8n"],
  desc: "Architected a voice chatbot with ElevenLabs TTS and a Pinecone vector RAG over university program data — piloted with 2 BC admissions teams. n8n workflows route leads via an LLM transcript evaluator, cutting manual triage by 85%+.",
  Art: ArtAI, kind: "ai",
  url: "https://www.radiusx.com/"
},
{
  title: "Milestones — Reflective Learning",
  tags: ["React", "Context API", "ACM CHI '25"],
  desc: "Co-authored and published at ACM CHI '25 — a React self-monitoring tool using Context API that helps online learners track sessions and reflect via interactive visual summaries.",
  Art: ArtFrontend, kind: "fe",
  url: "https://dl.acm.org/doi/10.1145/3706598.3714295"
},
{
  title: "Developing Telecoms",
  tags: ["Joomla 6", "Template Development", "Newsletter Integration"],
  desc: "Designed and developed a brand-new custom Joomla 6 template for Developing Telecoms, migrating the platform from Joomla 3 while preserving content structure and improving responsiveness. Integrated newsletter systems, optimized site performance, and modernized core functionality for a smoother editorial and user experience.",
  Art: ArtTelecoms, kind: "fe",
  url: "https://developingtelecoms.com/"
},
{
  title: "Flavour Dash",
  tags: ["React.js", "Firebase", "GitHub Pages"],
  desc: "Food ordering app with an interactive cart — pick from a curated menu, adjust quantities, see live totals, and enter delivery details in one flow.",
  Art: ArtFood, kind: "fe"
},
{
  title: "EventHub",
  tags: ["React", "Node.js", "Glass UI"],
  desc: "Full-stack events platform with secure authentication, glass-morphism design, and complete CRUD for creating and modifying events end-to-end.",
  Art: ArtEvents, kind: "fe",
  repo: "https://github.com/Deol7777/Events-Manager/tree/main"
},
{
  title: "PHP Web Design",
  tags: ["Joomla 5", "PayPal", "PHP"],
  desc: "Responsive storefront with PayPal integration — customers log in, purchase premium extensions, access secure downloads, and leave product feedback.",
  Art: ArtCommerce, kind: "be",
  url: "https://www.php-web-design.com/"
},
{
  title: "West Shore Eyecare",
  tags: ["Joomla 5", "Responsive", "Maps"],
  desc: "Clean, responsive practice site with contact form, embedded map, and sections for eyewear brands, services, and team profiles.",
  Art: ArtEyecare, kind: "fe",
  url: "https://westshoreeyecare.ca/"
}];

function Branches() {
  return (
    <section id="branches" className="branches" data-screen-label="05 Projects">
      <div className="branches__head wrap reveal">
        <SectionHead
          title="Projects"
          themeTitle="The Branches"
          lede="Projects that reach outward — solving real problems and growing into something useful for the people who use them." />
        
      </div>

      <div className="branches__grid wrap">
        {PROJECTS.map((p, i) => {
          const A = p.Art;
          return (
            <article key={p.title} className="proj reveal"
            style={{ transitionDelay: `${i % 3 * 100}ms` }}>
              <div className="proj__media"><A /></div>
              <div className="proj__body">
                <div className="proj__head">
                  <h3 className="proj__title">{p.title}</h3>
                  <div className="proj__links" aria-label="Project links">
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noopener noreferrer"
                         className="proj__link" aria-label="GitHub repository">
                        <GithubIcon size={13} />
                      </a>
                    )}
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noopener noreferrer"
                         className="proj__link" aria-label="Live site">
                        <GlobeIcon size={13} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="proj__tags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                <p className="proj__desc">{p.desc}</p>
              </div>
            </article>);

        })}
      </div>
    </section>);

}

/* ---------- FIREFLIES (canopy ambient) ---------- */
function Fireflies({ count = 22 }) {
  const flies = React.useMemo(() => Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    dx: -60 + Math.random() * 120,
    dy: -80 + Math.random() * 160,
    dur: 6 + Math.random() * 8,
    delay: -Math.random() * 10
  })), [count]);
  return flies.map((f) =>
  <span key={f.id} className="firefly"
  style={{
    left: `${f.left}%`, top: `${f.top}%`,
    "--dx": `${f.dx}px`, "--dy": `${f.dy}px`,
    animation: `glow ${f.dur}s ease-in-out ${f.delay}s infinite`
  }} />

  );
}

/* ---------- CANOPY (contact) ---------- */
function Canopy() {
  const FORMSPREE_ID = "mgoqrrzb";
  const t = window.useTweakCtx();
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [status, setStatus] = React.useState("idle"); // idle | sending | sent | error
  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message })
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };
  return (
    <section id="canopy" className="canopy" data-screen-label="06 Contact">
      {t.showFireflies && !t.reducedMotion && <Fireflies count={26} />}

      <svg viewBox="0 0 800 200" style={{ position: "absolute", top: 0, right: 0, width: "55%", height: 240, pointerEvents: "none" }} aria-hidden>
        <defs>
          <linearGradient id="hangBranch" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7a614a" />
            <stop offset="100%" stopColor="#3e2f20" />
          </linearGradient>
        </defs>
        <path d="M0 30 C 200 90, 420 70, 800 130" stroke="url(#hangBranch)" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.85" />
        {[120, 220, 340, 460, 580, 680].map((x, i) =>
        <g key={i} style={{ transformOrigin: `${x}px ${60 + i * 8}px`, animation: `sway ${5 + i % 3}s ease-in-out ${i * 0.4}s infinite` }}>
            <path d={`M ${x} ${60 + i * 8} q 6 16 -2 30`} stroke="#5e4a32" strokeWidth="1.4" fill="none" strokeLinecap="round" />
            <ellipse cx={x - 2} cy={94 + i * 8} rx="9" ry="14" fill="#7a955a" transform={`rotate(20 ${x - 2} ${94 + i * 8})`} />
            <ellipse cx={x + 12} cy={88 + i * 8} rx="7" ry="11" fill="#a4b58a" transform={`rotate(-20 ${x + 12} ${88 + i * 8})`} />
          </g>
        )}
      </svg>

      <div className="canopy__grid">
        <div className="reveal">
          <SectionHead
            title="Contact"
            themeTitle="The Canopy"
            lede="Always growing. Always building. Towards a future of scalable systems, ethical AI, and human-centered technology." />
          
          <div className="canopy__values">
            {[
            { I: NodesIcon, l: "Scalable\nSystems" },
            { I: SparkIcon, l: "AI &\nAutomation" },
            { I: HumanIcon, l: "Human-Centered\nDesign" },
            { I: InfraIcon, l: "Open Source\nContributor" }].
            map((v, i) =>
            <div className="value" key={i}>
                <div className="value__ico"><v.I size={20} /></div>
                <div className="value__label">{v.l.split("\n").map((s, j) => <div key={j}>{s}</div>)}</div>
              </div>
            )}
          </div>
        </div>

        <form className="canopy__form reveal" onSubmit={onSubmit}>
          <h3>Let's build something<br />meaningful together.</h3>
          <div className="field-row">
            <div className="field">
              <label htmlFor="cf-name">Name</label>
              <input id="cf-name" required value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="Your name" />
            </div>
            <div className="field">
              <label htmlFor="cf-email">Email</label>
              <input id="cf-email" required type="email" value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              placeholder="you@domain.com" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="cf-msg">Message</label>
            <textarea id="cf-msg" required rows={3} value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            placeholder="How can we collaborate?" />
          </div>
          <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : status === "sent" ? "Sent — talk soon" : "Get in Touch"} <LeafMark size={14} />
          </button>
          {status === "sent" && <div className="form-success">Thank you — a quiet ripple has been sent. ✿</div>}
          {status === "error" && <div className="form-error">Something went wrong — please try again or email directly.</div>}
        </form>
      </div>
    </section>);

}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="footer">
      <div>© 2026 Gurnoor Deol. Crafted with care. <span style={{ color: "var(--leaf-soft)" }}><LeafMark size={12} /></span></div>
      <div className="footer__socials">
        <a href="#" className="social" onClick={(e) => e.preventDefault()} aria-label="GitHub"><GithubIcon size={14} /></a>
        <a href="#" className="social" onClick={(e) => e.preventDefault()} aria-label="LinkedIn"><LinkedinIcon size={14} /></a>
        <a href="#" className="social" onClick={(e) => e.preventDefault()} aria-label="Email"><MailIcon size={14} /></a>
      </div>
    </footer>);

}

Object.assign(window, { Nav, Hero, Ecosystem, Foundations, Growth, Branches, Canopy, Footer, useReveal });