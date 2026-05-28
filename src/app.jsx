const TweakCtx = React.createContext({});
window.useTweakCtx = () => React.useContext(TweakCtx);

function App() {
  // Tweaks
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);

  // expose to non-context consumers (SectionHead reads ctx, but just in case)
  React.useEffect(() => { window.__tweaks = t; }, [t]);

  // Apply CSS variable for moss accent
  React.useEffect(() => {
    document.documentElement.style.setProperty("--moss", t.accentColor);
  }, [t.accentColor]);

  // Toggle reduced motion class on body
  React.useEffect(() => {
    document.body.classList.toggle("reduced-motion", !!t.reducedMotion);
  }, [t.reducedMotion]);

  // scroll-spy for nav
  const [activeId, setActiveId] = React.useState("home");
  React.useEffect(() => {
    const ids = ["home","growth","ecosystem","foundations","branches","canopy"];
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e => {
        if (e.isIntersecting) setActiveId(e.target.id);
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    ids.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  window.useReveal();

  return (
    <TweakCtx.Provider value={t}>
      <Nav activeId={activeId}/>
      <main>
        <Hero/>
        <Growth/>
        <Ecosystem/>
        <Foundations/>
        <Branches/>
        <Canopy/>
      </main>
      <Footer/>
      <TweaksPanel title="Tweaks">
        <TweakSection label="Section titles" />
        <TweakToggle label="Show thematic subtitle" value={t.showThemeSubtitles}
                     onChange={(v)=>setTweak("showThemeSubtitles", v)} />

        <TweakSection label="Ambience" />
        <TweakToggle label="Drifting leaves (hero)" value={t.showLeaves}
                     onChange={(v)=>setTweak("showLeaves", v)} />
        <TweakToggle label="Fireflies (canopy)" value={t.showFireflies}
                     onChange={(v)=>setTweak("showFireflies", v)} />
        <TweakSlider label="Leaf count" value={t.leafCount} min={0} max={30} step={1}
                     onChange={(v)=>setTweak("leafCount", v)} />
        <TweakToggle label="Reduce motion" value={t.reducedMotion}
                     onChange={(v)=>setTweak("reducedMotion", v)} />

        <TweakSection label="Theme" />
        <TweakColor label="Accent" value={t.accentColor}
                    options={["#3f5a2b", "#5a6e3a", "#2c5e4a", "#6b4a2a", "#3a4a5e"]}
                    onChange={(v)=>setTweak("accentColor", v)} />
      </TweaksPanel>
    </TweakCtx.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
