// Scenery — reusable SVG illustrations for the nature/engineering metaphor.
// All stylized with simple shapes + soft gradients. No photo-real attempts.

/* -------- HERO TREE -------- */
const HeroTree = () =>
<svg viewBox="0 0 700 760" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="sunglow" cx="65%" cy="20%" r="55%">
        <stop offset="0%" stopColor="#fff5d6" stopOpacity="0.85" />
        <stop offset="40%" stopColor="#fbecc8" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#f6f3ec" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="bark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7a614a" />
        <stop offset="100%" stopColor="#4d3b29" />
      </linearGradient>
      <linearGradient id="treeCanopyFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#b8c89a" />
        <stop offset="60%" stopColor="#7a955a" />
        <stop offset="100%" stopColor="#4f6b3c" />
      </linearGradient>
      <linearGradient id="treeCanopyFill2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#cdd9b1" />
        <stop offset="100%" stopColor="#7d9560" />
      </linearGradient>
      <linearGradient id="mountains" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#cfd5c9" />
        <stop offset="100%" stopColor="#e2e3d8" />
      </linearGradient>
      <linearGradient id="hill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#a9b88a" />
        <stop offset="100%" stopColor="#7d9560" />
      </linearGradient>
      <filter id="soft" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur stdDeviation="6" />
      </filter>
    </defs>

    {/* sun glow */}
    <rect width="700" height="760" fill="url(#sunglow)" style={{ width: "701px" }} />

    {/* far mountains */}
    <path d="M0 540 L80 460 L160 510 L240 430 L330 500 L420 440 L520 500 L620 450 L700 510 L700 760 L0 760 Z"
  fill="url(#mountains)" opacity="0.55" />
    {/* mid hills */}
    <path d="M0 600 C 120 540, 240 600, 380 570 C 500 545, 600 600, 700 580 L700 760 L0 760 Z"
  fill="url(#hill)" opacity="0.6" />

    {/* ground mound */}
    <ellipse cx="370" cy="700" rx="270" ry="42" fill="#5e7846" opacity="0.55" />
    <ellipse cx="370" cy="708" rx="320" ry="34" fill="#4c6438" opacity="0.7" />

    {/* tree group — swaying */}
    <g className="sway-slow" style={{ transformOrigin: "370px 700px" }}>
      {/* trunk */}
      <path d="M345 700 C 355 600, 360 520, 372 440 C 380 380, 388 360, 398 360 C 410 360, 412 400, 408 450 C 405 520, 402 600, 410 700 Z"
    fill="url(#bark)" />
      {/* bark lines */}
      <path d="M362 690 C 365 610, 370 520, 378 450" stroke="#3a2c1e" strokeWidth="1.2" fill="none" opacity="0.4" />
      <path d="M390 690 C 392 600, 395 510, 400 440" stroke="#3a2c1e" strokeWidth="1" fill="none" opacity="0.35" />

      {/* main branches */}
      <path d="M380 420 C 320 360, 240 340, 200 320" stroke="#6b513a" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M388 380 C 440 320, 520 300, 580 270" stroke="#6b513a" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M395 340 C 370 280, 350 220, 360 160" stroke="#6b513a" strokeWidth="9" fill="none" strokeLinecap="round" />
      <path d="M400 360 C 450 310, 470 250, 460 200" stroke="#6b513a" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M380 360 C 340 320, 290 280, 280 240" stroke="#6b513a" strokeWidth="7" fill="none" strokeLinecap="round" />

      {/* canopy blobs */}
      <g filter="url(#soft)" opacity="0.95">
        <ellipse cx="370" cy="200" rx="180" ry="120" fill="url(#treeCanopyFill)" />
        <ellipse cx="250" cy="240" rx="120" ry="90" fill="url(#treeCanopyFill2)" opacity="0.85" />
        <ellipse cx="510" cy="220" rx="130" ry="95" fill="url(#treeCanopyFill2)" opacity="0.85" />
        <ellipse cx="400" cy="120" rx="120" ry="85" fill="url(#treeCanopyFill)" />
      </g>
      <ellipse cx="370" cy="200" rx="155" ry="100" fill="url(#treeCanopyFill)" opacity="0.7" />
      <ellipse cx="395" cy="135" rx="100" ry="70" fill="url(#treeCanopyFill2)" opacity="0.55" />

      {/* leaf speckles */}
      {Array.from({ length: 28 }).map((_, i) => {
      const a = i / 28 * Math.PI * 2;
      const r = 80 + i % 4 * 22;
      const cx = 380 + Math.cos(a) * r;
      const cy = 200 + Math.sin(a) * r * 0.7 - 20;
      return <circle key={i} cx={cx} cy={cy} r="3.5" fill="#9bb073" opacity={0.55 + i % 3 * 0.15} />;
    })}
    </g>

    {/* tiny birds */}
    <g stroke="#5b6b50" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.7">
      <path d="M560 130 q5 -5 10 0 q5 -5 10 0" />
      <path d="M600 90 q4 -4 8 0 q4 -4 8 0" />
      <path d="M610 150 q3 -3 6 0 q3 -3 6 0" />
    </g>
  </svg>;


/* -------- ROOTS scene -------- */
const RootsScene = () =>
<svg viewBox="0 0 760 480" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: "100%", height: "100%" }}>
    <defs>
      <linearGradient id="rbark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7a614a" />
        <stop offset="100%" stopColor="#3e2f20" />
      </linearGradient>
      <radialGradient id="soilGlow" cx="50%" cy="20%" r="60%">
        <stop offset="0%" stopColor="#fff4d4" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#f6f3ec" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="760" height="480" fill="url(#soilGlow)" />

    {/* short trunk */}
    <path d="M340 0 C 350 60, 360 90, 380 100 C 400 90, 410 60, 420 0 Z" fill="url(#rbark)" opacity="0.9" />

    {/* root system — sinuous strokes */}
    <g fill="none" stroke="url(#rbark)" strokeLinecap="round" opacity="0.85">
      <path d="M380 100 C 380 160, 320 200, 240 240 C 180 270, 130 300, 80 360" strokeWidth="9" />
      <path d="M380 100 C 380 160, 440 200, 520 240 C 600 280, 660 320, 720 380" strokeWidth="9" />
      <path d="M380 100 C 370 180, 340 240, 310 320 C 290 380, 280 420, 270 460" strokeWidth="7" />
      <path d="M380 100 C 390 180, 420 240, 450 320 C 470 380, 480 420, 490 460" strokeWidth="7" />
      <path d="M380 100 C 380 200, 380 280, 380 460" strokeWidth="6" />
      <path d="M250 240 C 220 270, 200 310, 180 360" strokeWidth="4" />
      <path d="M510 240 C 540 270, 560 310, 580 360" strokeWidth="4" />
      <path d="M320 320 C 300 360, 280 400, 280 440" strokeWidth="3" />
      <path d="M440 320 C 460 360, 480 400, 480 440" strokeWidth="3" />
      <path d="M180 320 C 150 360, 130 400, 110 440" strokeWidth="3" />
      <path d="M580 320 C 610 360, 630 400, 650 440" strokeWidth="3" />
    </g>

    {/* small fine roots */}
    <g fill="none" stroke="#6b513a" strokeWidth="1.4" strokeLinecap="round" opacity="0.55">
      <path d="M150 380 q 10 20 -5 30" />
      <path d="M210 410 q 10 20 -5 30" />
      <path d="M380 440 q 8 20 -3 30" />
      <path d="M520 410 q 10 20 -5 30" />
      <path d="M620 380 q 10 20 -5 30" />
      <path d="M310 360 q 12 20 -3 28" />
      <path d="M450 360 q 12 20 -3 28" />
    </g>

    {/* glow spores */}
    {Array.from({ length: 18 }).map((_, i) =>
  <circle key={i}
  cx={80 + i * 38 % 620 + i % 3 * 8}
  cy={200 + i * 17 % 240}
  r={1.5 + i % 3 * 0.8}
  fill="#fff1bf" opacity={0.5 + i % 4 * 0.1}
  style={{
    animation: `glow ${4 + i % 5}s ease-in-out ${i * 0.3}s infinite`,
    transformOrigin: "center"
  }} />

  )}
  </svg>;


/* -------- FOUNDATIONS — wide tree + sprawling root system backdrop -------- */
/* Tree at top center (small canopy), then a wide, organic root mass fanning out
   beneath a soft horizon line. Subtle distant ridge, tufts of grass on the surface,
   ambient glow spores in the soil. Designed to span full section width as backdrop. */
const FoundationsTree = () =>
<svg viewBox="0 0 1600 640" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
     preserveAspectRatio="xMidYMid slice"
     style={{ width: "100%", height: "100%", display: "block" }}>
  <defs>
    <linearGradient id="fdBark" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#8a6b4f" />
      <stop offset="55%" stopColor="#6b513a" />
      <stop offset="100%" stopColor="#3e2f20" />
    </linearGradient>
    <linearGradient id="fdRoot" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#7a614a" stopOpacity="0.95"/>
      <stop offset="100%" stopColor="#3e2f20" stopOpacity="0.85"/>
    </linearGradient>
    <linearGradient id="fdCanopy" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#c4d2a6" />
      <stop offset="60%" stopColor="#88a16a" />
      <stop offset="100%" stopColor="#566f44" />
    </linearGradient>
    <linearGradient id="fdCanopy2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#d4dfba" />
      <stop offset="100%" stopColor="#8aa468" />
    </linearGradient>
    <linearGradient id="fdRidge" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#d6dccc" />
      <stop offset="100%" stopColor="#e6e7da" />
    </linearGradient>
    <radialGradient id="fdGlow" cx="50%" cy="22%" r="68%">
      <stop offset="0%" stopColor="#fff4d4" stopOpacity="0.55" />
      <stop offset="100%" stopColor="#f6f3ec" stopOpacity="0" />
    </radialGradient>
    <radialGradient id="fdSoil" cx="50%" cy="100%" r="85%">
      <stop offset="0%" stopColor="#cdbf99" stopOpacity="0.0" />
      <stop offset="55%" stopColor="#9d8763" stopOpacity="0.20" />
      <stop offset="100%" stopColor="#5e4a32" stopOpacity="0.30" />
    </radialGradient>
    <filter id="fdSoft" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="6" />
    </filter>
  </defs>

  {/* sun glow + deep soil wash — no hard horizon line, root system flows continuously */}
  <rect width="1600" height="640" fill="url(#fdGlow)" />
  <rect width="1600" height="640" fill="url(#fdSoil)" />

  {/* tree on top of the ground — gently sways */}
  <g style={{ transformOrigin: "800px 200px", animation: "sway 9s ease-in-out infinite" }}>
    {/* trunk */}
    <path d="M790 200 C 793 168, 796 148, 800 122 C 804 148, 807 168, 810 200 Z"
          fill="url(#fdBark)" />
    {/* small low branches */}
    <path d="M798 140 C 782 132, 770 128, 760 126" stroke="#6b513a" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <path d="M802 138 C 818 130, 832 126, 842 124" stroke="#6b513a" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    {/* canopy — layered soft ellipses */}
    <g filter="url(#fdSoft)" opacity="0.95">
      <ellipse cx="800" cy="92" rx="92" ry="56" fill="url(#fdCanopy)" />
      <ellipse cx="752" cy="106" rx="54" ry="40" fill="url(#fdCanopy2)" opacity="0.9" />
      <ellipse cx="848" cy="106" rx="56" ry="42" fill="url(#fdCanopy2)" opacity="0.9" />
      <ellipse cx="812" cy="58"  rx="58" ry="40" fill="url(#fdCanopy)" />
    </g>
    <ellipse cx="800" cy="92" rx="80" ry="48" fill="url(#fdCanopy)" opacity="0.7" />
    {Array.from({ length: 16 }).map((_, i) => {
      const a = i / 16 * Math.PI * 2;
      const r = 50 + i % 3 * 14;
      const cx = 800 + Math.cos(a) * r;
      const cy = 90 + Math.sin(a) * r * 0.6 - 10;
      return <circle key={i} cx={cx} cy={cy} r="2.6" fill="#9bb073" opacity={0.55 + i % 3 * 0.15} />;
    })}
  </g>

  {/* root system — fans symmetrically from the trunk base, fills the section width */}
  {/* primary spine straight down */}
  <path d="M800 200 C 798 240, 800 290, 800 360 C 800 430, 800 500, 800 600"
        stroke="url(#fdRoot)" strokeWidth="11" fill="none" strokeLinecap="round" opacity="0.95" />

  {/* major lateral roots — six per side, wide spread */}
  <g fill="none" stroke="url(#fdRoot)" strokeLinecap="round" opacity="0.92">
    {/* LEFT */}
    <path d="M800 210 C 720 240, 600 260, 460 270 C 320 280, 200 290, 60 300"  strokeWidth="9" />
    <path d="M800 220 C 700 260, 560 300, 420 340 C 280 380, 160 410, 40 440"  strokeWidth="8" />
    <path d="M800 230 C 720 290, 620 350, 500 410 C 380 470, 240 510, 100 540" strokeWidth="7" />
    <path d="M800 240 C 740 320, 660 410, 560 480 C 440 560, 280 600, 140 620" strokeWidth="6" />
    <path d="M800 250 C 760 340, 720 440, 660 530 C 600 600, 520 640, 440 650" strokeWidth="5" />
    {/* RIGHT */}
    <path d="M800 210 C 880 240, 1000 260, 1140 270 C 1280 280, 1400 290, 1540 300"  strokeWidth="9" />
    <path d="M800 220 C 900 260, 1040 300, 1180 340 C 1320 380, 1440 410, 1560 440"  strokeWidth="8" />
    <path d="M800 230 C 880 290, 980 350, 1100 410 C 1220 470, 1360 510, 1500 540" strokeWidth="7" />
    <path d="M800 240 C 860 320, 940 410, 1040 480 C 1160 560, 1320 600, 1460 620" strokeWidth="6" />
    <path d="M800 250 C 840 340, 880 440, 940 530 C 1000 600, 1080 640, 1160 650" strokeWidth="5" />
    {/* center inner forks */}
    <path d="M800 280 C 780 360, 740 440, 700 540" strokeWidth="6" />
    <path d="M800 280 C 820 360, 860 440, 900 540" strokeWidth="6" />
    <path d="M800 320 C 790 420, 780 520, 770 620" strokeWidth="4" />
    <path d="M800 320 C 810 420, 820 520, 830 620" strokeWidth="4" />
  </g>

  {/* secondary roots — branching off the majors */}
  <g fill="none" stroke="#6b513a" strokeLinecap="round" opacity="0.55">
    <path d="M460 270 C 420 320, 380 360, 340 420"  strokeWidth="3.5" />
    <path d="M620 350 C 600 410, 580 470, 560 540"  strokeWidth="3" />
    <path d="M280 380 C 240 430, 220 480, 200 540"  strokeWidth="2.8" />
    <path d="M1140 270 C 1180 320, 1220 360, 1260 420" strokeWidth="3.5" />
    <path d="M980 350 C 1000 410, 1020 470, 1040 540" strokeWidth="3" />
    <path d="M1320 380 C 1360 430, 1380 480, 1400 540" strokeWidth="2.8" />
    <path d="M520 270 q -10 28 -22 60" strokeWidth="2" />
    <path d="M680 270 q 6 28 14 60" strokeWidth="2" />
    <path d="M920 270 q -6 28 -14 60" strokeWidth="2" />
    <path d="M1080 270 q 10 28 22 60" strokeWidth="2" />
  </g>

  {/* very fine hair-roots — wisps */}
  <g fill="none" stroke="#5e4a32" strokeLinecap="round" opacity="0.4">
    <path d="M240 320 q 10 22 -2 44" strokeWidth="1.2" />
    <path d="M380 360 q 12 24 -2 50" strokeWidth="1.2" />
    <path d="M520 420 q 14 28 -2 60" strokeWidth="1.2" />
    <path d="M660 480 q 14 26 -2 56" strokeWidth="1" />
    <path d="M340 460 q 14 28 -2 56" strokeWidth="1" />
    <path d="M1080 460 q -14 28 2 56" strokeWidth="1" />
    <path d="M940 480 q -14 26 2 56" strokeWidth="1" />
    <path d="M1080 420 q -14 28 2 60" strokeWidth="1.2" />
    <path d="M1220 360 q -12 24 2 50" strokeWidth="1.2" />
    <path d="M1360 320 q -10 22 2 44" strokeWidth="1.2" />
    <path d="M780 380 q -10 28 0 56" strokeWidth="1" />
    <path d="M820 380 q 10 28 0 56" strokeWidth="1" />
    <path d="M760 460 q -10 30 0 56" strokeWidth="1" />
    <path d="M840 460 q 10 30 0 56" strokeWidth="1" />
  </g>

  {/* ambient soil glow spores */}
  {Array.from({ length: 28 }).map((_, i) => {
    const x = 60 + (i * 117) % 1480;
    const y = 240 + (i * 41) % 360;
    return (
      <circle key={i} cx={x} cy={y} r={1.4 + (i % 3) * 0.7}
              fill="#fff1bf" opacity={0.35 + (i % 4) * 0.12}
              style={{ animation: `glow ${5 + (i % 5)}s ease-in-out ${i * 0.4}s infinite`,
                       transformOrigin: "center" }} />
    );
  })}
</svg>;


/* -------- RIVER scene (Ecosystem background) -------- */
const RiverScene = () =>
<svg viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%" }}>
    <defs>
      <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#dde5d8" />
        <stop offset="100%" stopColor="#c6d3c0" />
      </linearGradient>
      <linearGradient id="bank" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#a4b58a" />
        <stop offset="100%" stopColor="#6f8857" />
      </linearGradient>
    </defs>

    {/* atmospheric mist */}
    <rect width="1440" height="600" fill="url(#water)" opacity="0.4" />

    {/* distant trees silhouettes */}
    <g opacity="0.35">
      {Array.from({ length: 18 }).map((_, i) =>
    <path key={i}
    d={`M ${i * 84} 220 q 8 -36 18 -38 q 10 2 18 38 z`}
    fill="#7a8e64" />
    )}
    </g>

    {/* far hill */}
    <path d="M0 260 C 200 220, 360 260, 600 240 C 820 224, 1040 270, 1240 250 C 1340 240, 1440 260, 1440 260 L1440 320 L0 320 Z"
  fill="#b8c89a" opacity="0.5" />

    {/* river bed */}
    <path d="M0 360 C 240 320, 480 400, 720 360 C 960 320, 1200 400, 1440 360 L1440 600 L0 600 Z"
  fill="url(#water)" />
    <path d="M0 420 C 240 380, 480 460, 720 420 C 960 380, 1200 460, 1440 420 L1440 600 L0 600 Z"
  fill="url(#water)" opacity="0.6" />

    {/* current lines */}
    <g fill="none" stroke="#9eb098" strokeWidth="1.4" strokeLinecap="round" opacity="0.55">
      <path d="M40 400 q 80 -14 160 0 t 160 0 t 160 0 t 160 0 t 160 0 t 160 0 t 160 0"
    strokeDasharray="6 14"
    style={{ animation: "flow 12s linear infinite" }} />
      <path d="M60 440 q 80 -14 160 0 t 160 0 t 160 0 t 160 0 t 160 0 t 160 0 t 160 0"
    strokeDasharray="4 16"
    style={{ animation: "flow 18s linear infinite" }} />
      <path d="M0 480 q 80 -10 160 0 t 160 0 t 160 0 t 160 0 t 160 0 t 160 0 t 160 0"
    strokeDasharray="3 22"
    style={{ animation: "flow 22s linear infinite" }} />
    </g>

    {/* stones */}
    <g fill="#8d8475">
      <ellipse cx="240" cy="448" rx="38" ry="9" opacity="0.7" />
      <ellipse cx="240" cy="442" rx="32" ry="8" />
      <ellipse cx="640" cy="476" rx="44" ry="10" opacity="0.7" />
      <ellipse cx="640" cy="468" rx="36" ry="9" />
      <ellipse cx="1080" cy="460" rx="40" ry="9" opacity="0.7" />
      <ellipse cx="1080" cy="454" rx="32" ry="8" />
      <ellipse cx="380" cy="500" rx="26" ry="6" />
      <ellipse cx="900" cy="510" rx="30" ry="7" />
    </g>

    {/* mossy ground */}
    <path d="M0 380 C 80 360, 160 392, 220 388 L 220 600 L 0 600 Z" fill="url(#bank)" opacity="0.7" />
    <path d="M1440 380 C 1360 360, 1280 392, 1220 388 L 1220 600 L 1440 600 Z" fill="url(#bank)" opacity="0.7" />
  </svg>;


/* -------- Tiny tree for growth timeline -------- */
const TimelineTree = ({ size = 0.6 }) =>
<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }} aria-hidden>
    <defs>
      <linearGradient id={`tlc-${size}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#b8c89a" />
        <stop offset="100%" stopColor="#6f8857" />
      </linearGradient>
    </defs>
    <path d="M48 110 C 49 80, 49 60, 50 30" stroke="#6b513a" strokeWidth={3} fill="none" strokeLinecap="round" />
    <path d="M50 60 C 40 50, 35 45, 30 40" stroke="#6b513a" strokeWidth={1.4} fill="none" strokeLinecap="round" opacity={size > 0.5 ? 1 : 0.4} />
    <path d="M50 50 C 60 42, 65 40, 70 38" stroke="#6b513a" strokeWidth={1.4} fill="none" strokeLinecap="round" opacity={size > 0.6 ? 1 : 0.4} />
    <ellipse cx="50" cy={35 - size * 4} rx={20 + size * 16} ry={14 + size * 10} fill={`url(#tlc-${size})`} opacity="0.9" />
    {size > 0.55 && <ellipse cx="38" cy={42 - size * 2} rx={size * 14} ry={size * 12} fill={`url(#tlc-${size})`} opacity="0.85" />}
    {size > 0.7 && <ellipse cx="62" cy={42 - size * 2} rx={size * 14} ry={size * 12} fill={`url(#tlc-${size})`} opacity="0.85" />}
  </svg>;


/* -------- Curved divider between sections -------- */
const Divider = ({ from = "#f6f3ec", to = "#efeadf", flip = false, height = 90 }) =>
<svg viewBox={`0 0 1440 ${height}`} preserveAspectRatio="none"
style={{ display: "block", width: "100%", height: height, marginTop: -1, marginBottom: -1,
  transform: flip ? "scaleY(-1)" : "none" }} aria-hidden>
    <defs>
      <linearGradient id={`div-${from}-${to}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={from} />
        <stop offset="100%" stopColor={to} />
      </linearGradient>
    </defs>
    <path d={`M0 0 C 240 ${height * 0.9}, 480 ${height * 0.2}, 720 ${height * 0.6} C 960 ${height * 1.0}, 1200 ${height * 0.3}, 1440 ${height * 0.7} L1440 ${height} L0 ${height} Z`}
  fill={`url(#div-${from}-${to})`} />
  </svg>;


/* -------- Project artwork — abstract environmental thumbs ---- */
const ArtAI = () =>
<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <linearGradient id="ai-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#28332a" />
        <stop offset="100%" stopColor="#0f1612" />
      </linearGradient>
    </defs>
    <rect width="320" height="170" fill="url(#ai-bg)" />
    {/* fireflies */}
    {Array.from({ length: 24 }).map((_, i) =>
  <circle key={i}
  cx={20 + i * 13.7 % 280}
  cy={20 + i * 23.3 % 130}
  r={1 + i % 3}
  fill="#f9e08a" opacity={0.7}
  style={{ animation: `glow ${3 + i % 4}s ease-in-out ${i * 0.2}s infinite`, transformOrigin: "center" }} />

  )}
    {/* waveform / current */}
    <g stroke="#a8d49a" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.85">
      <path d="M0 100 q 10 -30 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0" />
      <path d="M0 110 q 10 -20 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0" opacity="0.5" />
    </g>
  </svg>;


const ArtBackend = () =>
<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <linearGradient id="be-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e9e2d2" />
        <stop offset="100%" stopColor="#cfc0a0" />
      </linearGradient>
    </defs>
    <rect width="320" height="170" fill="url(#be-bg)" />
    {/* roots underground */}
    <g fill="none" stroke="#5e4a32" strokeLinecap="round" opacity="0.7">
      <path d="M160 0 C 160 40, 160 80, 160 170" strokeWidth="5" />
      <path d="M160 40 C 120 60, 80 100, 40 170" strokeWidth="3" />
      <path d="M160 40 C 200 60, 240 100, 280 170" strokeWidth="3" />
      <path d="M160 90 C 100 110, 70 140, 50 170" strokeWidth="2" />
      <path d="M160 90 C 220 110, 250 140, 270 170" strokeWidth="2" />
      <path d="M120 130 C 100 150, 90 160, 80 170" strokeWidth="1.5" />
      <path d="M200 130 C 220 150, 230 160, 240 170" strokeWidth="1.5" />
    </g>
    {/* horizon line */}
    <line x1="0" y1="40" x2="320" y2="40" stroke="#a08a64" strokeDasharray="3 4" opacity="0.4" />
    {/* tiny stems above ground */}
    <g stroke="#5d7340" strokeWidth="2" fill="none" strokeLinecap="round">
      <path d="M158 40 q 0 -16 4 -24" />
      <path d="M162 40 q 0 -12 8 -18" />
    </g>
  </svg>;


const ArtFrontend = () =>
<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <linearGradient id="fe-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#eaf0e1" />
        <stop offset="100%" stopColor="#cdd9b1" />
      </linearGradient>
    </defs>
    <rect width="320" height="170" fill="url(#fe-bg)" />
    {/* branch */}
    <path d="M-10 90 C 80 70, 160 100, 330 80" stroke="#7a614a" strokeWidth="4" fill="none" strokeLinecap="round" />
    {/* leaves */}
    {[40, 90, 140, 190, 240, 280].map((x, i) =>
  <g key={i} style={{ transformOrigin: `${x}px 90px`, animation: `sway ${5 + i % 3}s ease-in-out ${i * 0.4}s infinite` }}>
        <path d={`M ${x - 12} 90 C ${x - 8} 70, ${x + 4} 64, ${x + 14} 72 C ${x + 6} 86, ${x - 4} 92, ${x - 12} 90 Z`}
    fill="#7a955a" />
        <path d={`M ${x - 12} 90 C ${x - 4} 78, ${x + 6} 74, ${x + 14} 72`} stroke="#4f6b3c" strokeWidth="0.8" fill="none" />
      </g>
  )}
    {/* wind */}
    <g stroke="#9ea88a" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.7">
      <path d="M30 130 q 20 -6 40 0" />
      <path d="M50 145 q 30 -8 60 0" />
      <path d="M180 135 q 30 -8 60 0" />
    </g>
  </svg>;


/* -------- Project artwork — themed to each project, kept in nature palette -------- */

/* Flavour Dash — bowl-top-down with leafy garnish, warm cream */
const ArtFood = () =>
<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <linearGradient id="food-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f4e9d2" />
        <stop offset="100%" stopColor="#d9c69a" />
      </linearGradient>
      <radialGradient id="food-bowl" cx="50%" cy="50%" r="55%">
        <stop offset="0%" stopColor="#6b513a" />
        <stop offset="100%" stopColor="#3e2f20" />
      </radialGradient>
    </defs>
    <rect width="320" height="170" fill="url(#food-bg)" />
    {/* steam wisps */}
    <g stroke="#b8a784" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.55">
      <path d="M120 30 q 8 -10 0 -20 q -8 -8 0 -18" />
      <path d="M160 25 q 8 -10 0 -20 q -8 -8 0 -18" />
      <path d="M200 30 q 8 -10 0 -20 q -8 -8 0 -18" />
    </g>
    {/* plate */}
    <ellipse cx="160" cy="100" rx="92" ry="50" fill="#efe2c4" />
    <ellipse cx="160" cy="100" rx="80" ry="42" fill="url(#food-bowl)" />
    <ellipse cx="160" cy="98"  rx="74" ry="38" fill="#4d3b29" />
    {/* food shapes */}
    <circle cx="138" cy="92"  r="14" fill="#a4b58a" />
    <circle cx="170" cy="86"  r="11" fill="#c98a55" />
    <circle cx="186" cy="108" r="12" fill="#8aa468" />
    <circle cx="148" cy="112" r="9"  fill="#c98a55" opacity="0.85"/>
    {/* leaf garnish */}
    <g fill="#7a955a">
      <path d="M156 70 C 162 64, 170 64, 174 70 C 170 76, 162 78, 156 70 Z" />
      <path d="M156 70 C 160 68, 168 68, 172 70" stroke="#4f6b3c" strokeWidth="0.6" fill="none" />
    </g>
    {/* sesame specks */}
    <g fill="#f6efd6" opacity="0.85">
      <circle cx="142" cy="100" r="1.2" />
      <circle cx="158" cy="108" r="1.2" />
      <circle cx="172" cy="98"  r="1.2" />
      <circle cx="178" cy="92"  r="1.2" />
      <circle cx="150" cy="86"  r="1.2" />
    </g>
  </svg>;


/* EventHub — calendar grid w/ a highlighted day, deep sage */
const ArtEvents = () =>
<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <linearGradient id="ev-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3a4a36" />
        <stop offset="100%" stopColor="#1f2a1d" />
      </linearGradient>
    </defs>
    <rect width="320" height="170" fill="url(#ev-bg)" />
    {/* glass calendar card */}
    <g transform="translate(86 28)">
      <rect width="148" height="114" rx="12" fill="#ffffff" opacity="0.08" />
      <rect width="148" height="114" rx="12" fill="none" stroke="#a8c98a" strokeOpacity="0.35" />
      {/* header */}
      <rect x="0" y="0" width="148" height="22" rx="12" fill="#a8c98a" opacity="0.25" />
      <rect x="0" y="14" width="148" height="8"  fill="#a8c98a" opacity="0.25" />
      <circle cx="22" cy="11" r="3" fill="#dfeac3" />
      <circle cx="34" cy="11" r="3" fill="#dfeac3" />
      {/* date grid */}
      {Array.from({ length: 28 }).map((_, i) => {
        const c = i % 7, r = Math.floor(i / 7);
        const x = 10 + c * 19, y = 32 + r * 18;
        const active = i === 17;
        return (
          <g key={i}>
            {active &&
              <circle cx={x + 8} cy={y + 8} r="9" fill="#a8c98a" opacity="0.85" />}
            <circle cx={x + 8} cy={y + 8} r="2.4"
              fill={active ? "#1f2a1d" : "#dfeac3"}
              opacity={active ? 1 : 0.55} />
          </g>
        );
      })}
    </g>
    {/* drifting motes */}
    {Array.from({ length: 14 }).map((_, i) =>
      <circle key={i} cx={20 + i * 22 % 300} cy={10 + i * 13 % 150}
        r={1 + i % 2} fill="#dfeac3" opacity={0.5}
        style={{ animation: `glow ${4 + i % 3}s ease-in-out ${i * 0.3}s infinite`, transformOrigin: "center" }} />
    )}
  </svg>;


/* PHP Web Design — stacked coins / commerce shapes, warm parchment */
const ArtCommerce = () =>
<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <linearGradient id="cm-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ede4cc" />
        <stop offset="100%" stopColor="#c9b88c" />
      </linearGradient>
      <linearGradient id="coin" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d9b97a" />
        <stop offset="100%" stopColor="#a07f44" />
      </linearGradient>
    </defs>
    <rect width="320" height="170" fill="url(#cm-bg)" />
    {/* shopping bag silhouette */}
    <g transform="translate(60 40)">
      <path d="M10 30 L80 30 L74 100 L16 100 Z" fill="#6b513a" opacity="0.92" />
      <path d="M28 30 q 0 -22 17 -22 q 17 0 17 22" stroke="#3e2f20" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* leaf tag */}
      <ellipse cx="45" cy="60" rx="16" ry="10" fill="#a4b58a" transform="rotate(-12 45 60)" />
      <path d="M32 56 q 12 6 26 0" stroke="#4f6b3c" strokeWidth="0.8" fill="none" transform="rotate(-12 45 60)" />
    </g>
    {/* stacked coins */}
    <g transform="translate(200 70)">
      <ellipse cx="0" cy="48" rx="44" ry="11" fill="#7a5e2b" opacity="0.4"/>
      <ellipse cx="0" cy="40" rx="42" ry="11" fill="url(#coin)" />
      <ellipse cx="0" cy="36" rx="42" ry="11" fill="#e8c98a" />
      <ellipse cx="0" cy="22" rx="40" ry="10" fill="url(#coin)" />
      <ellipse cx="0" cy="18" rx="40" ry="10" fill="#e8c98a" />
      <ellipse cx="0" cy="4"  rx="38" ry="10" fill="url(#coin)" />
      <ellipse cx="0" cy="0"  rx="38" ry="10" fill="#f0d8a0" />
      <text x="0" y="4" textAnchor="middle" fontFamily="serif" fontSize="14" fill="#7a5e2b" fontWeight="600">$</text>
    </g>
  </svg>;


/* West Shore Eyecare — stylized spectacles, soft mist */
const ArtEyecare = () =>
<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <linearGradient id="ec-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e8eef1" />
        <stop offset="100%" stopColor="#bcd0d6" />
      </linearGradient>
    </defs>
    <rect width="320" height="170" fill="url(#ec-bg)" />
    {/* soft horizon */}
    <path d="M0 110 C 100 100, 220 120, 320 105 L320 170 L0 170 Z" fill="#9fb6bd" opacity="0.5" />
    <path d="M0 130 C 110 122, 220 138, 320 128 L320 170 L0 170 Z" fill="#7a9098" opacity="0.4" />
    {/* spectacles */}
    <g transform="translate(160 80)" stroke="#3e2f20" strokeWidth="4" fill="none" strokeLinecap="round">
      <circle cx="-44" cy="0" r="30" fill="#ffffff" fillOpacity="0.45" />
      <circle cx="44"  cy="0" r="30" fill="#ffffff" fillOpacity="0.45" />
      <path d="M-14 0 q 14 -10 28 0" />
      <path d="M-74 -4 q -14 -2 -22 4" />
      <path d="M74 -4  q 14 -2 22 4" />
      {/* lens shine */}
      <path d="M-58 -16 q 10 -6 22 -2" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="2" />
      <path d="M30 -16  q 10 -6 22 -2" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="2" />
    </g>
  </svg>;


/* Grid Line Builders — stylized house rooflines + structure grid, warm earth */
const ArtBuilders = () =>
<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <linearGradient id="bd-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#efe6d2" />
        <stop offset="100%" stopColor="#c9b896" />
      </linearGradient>
    </defs>
    <rect width="320" height="170" fill="url(#bd-bg)" />
    {/* blueprint grid */}
    <g stroke="#8a7556" strokeWidth="0.5" opacity="0.35">
      {Array.from({ length: 16 }).map((_, i) =>
        <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="170" />
      )}
      {Array.from({ length: 9 }).map((_, i) =>
        <line key={`h${i}`} x1="0" y1={i * 20} x2="320" y2={i * 20} />
      )}
    </g>
    {/* far house silhouettes */}
    <g fill="#7a614a" opacity="0.55">
      <path d="M30 130 L60 100 L90 130 Z" />
      <rect x="40" y="118" width="40" height="22" />
      <path d="M230 132 L262 100 L294 132 Z" />
      <rect x="240" y="118" width="44" height="22" />
    </g>
    {/* foreground featured house */}
    <g transform="translate(120 60)">
      <path d="M0 60 L40 12 L80 60 Z" fill="#3e2f20" />
      <rect x="6" y="50" width="68" height="50" fill="#5d4a32" />
      <rect x="20" y="64" width="14" height="20" fill="#efe6d2" opacity="0.75" />
      <rect x="46" y="64" width="14" height="20" fill="#efe6d2" opacity="0.75" />
      <rect x="32" y="84" width="16" height="16" fill="#2c2014" />
    </g>
    {/* horizon */}
    <line x1="0" y1="120" x2="320" y2="120" stroke="#8a7556" strokeDasharray="3 4" opacity="0.5" />
  </svg>;


/* Developing Telecoms — broadcast tower with signal arcs, dusk palette */
const ArtTelecoms = () =>
<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <linearGradient id="tc-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#dfe4d8" />
        <stop offset="100%" stopColor="#a8b8a0" />
      </linearGradient>
      <linearGradient id="tc-tower" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#6b513a" />
        <stop offset="100%" stopColor="#2f2418" />
      </linearGradient>
    </defs>
    <rect width="320" height="170" fill="url(#tc-bg)" />
    {/* horizon hills */}
    <path d="M0 130 C 60 116, 140 134, 220 122 C 280 113, 320 128, 320 128 L320 170 L0 170 Z" fill="#7a955a" opacity="0.55" />
    <path d="M0 145 C 80 134, 160 152, 240 140 C 290 134, 320 144, 320 144 L320 170 L0 170 Z" fill="#566f44" opacity="0.65" />
    {/* signal arcs (right) */}
    <g fill="none" stroke="#4f6b3c" strokeWidth="1.6" strokeLinecap="round" opacity="0.85">
      <path d="M180 60 q 14 -8 28 0" />
      <path d="M178 50 q 22 -12 44 0" />
      <path d="M176 40 q 30 -16 60 0" />
    </g>
    {/* signal arcs (left) */}
    <g fill="none" stroke="#4f6b3c" strokeWidth="1.6" strokeLinecap="round" opacity="0.85">
      <path d="M140 60 q -14 -8 -28 0" />
      <path d="M142 50 q -22 -12 -44 0" />
      <path d="M144 40 q -30 -16 -60 0" />
    </g>
    {/* tower */}
    <g transform="translate(160 0)">
      {/* legs */}
      <path d="M-22 130 L-4 30 L4 30 L22 130" fill="url(#tc-tower)" />
      {/* lattice cross-braces */}
      <g stroke="#3e2f20" strokeWidth="0.8" opacity="0.7">
        <line x1="-18" y1="110" x2="18" y2="110" />
        <line x1="-15" y1="90"  x2="15"  y2="90" />
        <line x1="-13" y1="72"  x2="13"  y2="72" />
        <line x1="-11" y1="56"  x2="11"  y2="56" />
        <line x1="-9"  y1="42"  x2="9"   y2="42" />
        <line x1="-18" y1="110" x2="15"  y2="90" />
        <line x1="18"  y1="110" x2="-15" y2="90" />
        <line x1="-15" y1="90"  x2="13"  y2="72" />
        <line x1="15"  y1="90"  x2="-13" y2="72" />
        <line x1="-13" y1="72"  x2="11"  y2="56" />
        <line x1="13"  y1="72"  x2="-11" y2="56" />
      </g>
      {/* antenna tip */}
      <rect x="-1.5" y="10" width="3" height="22" fill="#3e2f20" />
      <circle cx="0" cy="10" r="3" fill="#c98a55" />
      <circle cx="0" cy="10" r="6" fill="#c98a55" opacity="0.35" style={{ animation: "glow 3s ease-in-out infinite", transformOrigin: "center" }} />
    </g>
  </svg>;


window.Scenery = { HeroTree, RootsScene, FoundationsTree, RiverScene, TimelineTree, Divider, ArtAI, ArtBackend, ArtFrontend, ArtFood, ArtEvents, ArtCommerce, ArtEyecare, ArtBuilders, ArtTelecoms };