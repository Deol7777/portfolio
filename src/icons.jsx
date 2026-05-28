// Minimal inline SVG icon set — stroked, organic feel
const Icon = ({ children, size = 18, stroke = 1.6, ...rest }) => (
  <svg
    viewBox="0 0 24 24" width={size} height={size}
    fill="none" stroke="currentColor"
    strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
    {...rest}
  >{children}</svg>
);

const LeafMark = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none">
    <path d="M5 19c0-8 6-14 14-14-1 8-6 14-14 14z" fill="currentColor" opacity="0.85"/>
    <path d="M5 19c4-4 8-7 14-14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
  </svg>
);

const Sprig = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20c4 0 7-3 7-7s3-7 7-7" />
    <path d="M11 13c-2-0.5-3-2-3-4" />
    <path d="M14 10c1.5-1.5 4-2 4-2" />
    <path d="M18 6c0 2-1 3-3 3.5" />
  </svg>
);

const GithubIcon = ({ size }) => (
  <Icon size={size}>
    <path d="M9 19c-4 1-4-2-6-2m12 5v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 7.12a5 5 0 0 0-.09-3.77S17.68 2.96 15 4.78A13.4 13.4 0 0 0 8 4.78C5.32 2.96 4.09 3.35 4.09 3.35A5 5 0 0 0 4 7.12 5.44 5.44 0 0 0 2.5 10.4c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 20.13V24"/>
  </Icon>
);
const LinkedinIcon = ({ size }) => (
  <Icon size={size}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v2"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </Icon>
);
const MailIcon = ({ size }) => (
  <Icon size={size}>
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M22 7l-10 6L2 7"/>
  </Icon>
);
const FileIcon = ({ size }) => (
  <Icon size={size}>
    <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
    <path d="M14 3v6h6"/>
  </Icon>
);
const DownloadIcon = ({ size }) => (
  <Icon size={size}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <path d="M7 10l5 5 5-5"/>
    <path d="M12 15V3"/>
  </Icon>
);
const ArrowRight = ({ size }) => (
  <Icon size={size}>
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </Icon>
);
const TwitterIcon = ({ size }) => (
  <Icon size={size}>
    <path d="M3 3l8 10-8 8h3l6-6 5 6h5l-9-11 9-7h-3l-6 5-5-5z"/>
  </Icon>
);

/* Tile icons — natural metaphors */
const StackIcon = ({ size }) => ( /* stones */
  <Icon size={size} stroke={1.4}>
    <ellipse cx="12" cy="6"  rx="6" ry="2"/>
    <ellipse cx="12" cy="11" rx="7" ry="2"/>
    <ellipse cx="12" cy="16" rx="5.5" ry="2"/>
    <ellipse cx="12" cy="20" rx="6.5" ry="2"/>
  </Icon>
);
const NodesIcon = ({ size }) => ( /* connected nodes — distributed */
  <Icon size={size} stroke={1.4}>
    <circle cx="5" cy="6" r="1.6"/>
    <circle cx="19" cy="6" r="1.6"/>
    <circle cx="12" cy="13" r="1.6"/>
    <circle cx="6" cy="19" r="1.6"/>
    <circle cx="18" cy="19" r="1.6"/>
    <path d="M5 6l7 7M19 6l-7 7M12 13l-6 6M12 13l6 6"/>
  </Icon>
);
const SparkIcon = ({ size }) => ( /* AI — firefly */
  <Icon size={size} stroke={1.4}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>
    <circle cx="12" cy="12" r="2.5"/>
  </Icon>
);
const CloudIcon = ({ size }) => (
  <Icon size={size} stroke={1.4}>
    <path d="M17 18a4 4 0 0 0 .7-7.94 6 6 0 0 0-11.7 1A4 4 0 0 0 7 18"/>
  </Icon>
);
const WindIcon = ({ size }) => (
  <Icon size={size} stroke={1.4}>
    <path d="M3 9h12a3 3 0 1 0-3-3"/>
    <path d="M3 15h16a3 3 0 1 1-3 3"/>
    <path d="M3 12h8"/>
  </Icon>
);
const ServerIcon = ({ size }) => ( /* backend roots */
  <Icon size={size} stroke={1.4}>
    <rect x="3" y="4" width="18" height="6" rx="1.5"/>
    <rect x="3" y="14" width="18" height="6" rx="1.5"/>
    <circle cx="7" cy="7" r="0.6" fill="currentColor"/>
    <circle cx="7" cy="17" r="0.6" fill="currentColor"/>
  </Icon>
);
const InfraIcon = ({ size }) => ( /* roots branching */
  <Icon size={size} stroke={1.4}>
    <path d="M12 3v6"/>
    <path d="M12 9c0 4-4 5-4 9"/>
    <path d="M12 9c0 4 4 5 4 9"/>
    <path d="M12 9c-3 2-7 3-7 8"/>
    <path d="M12 9c3 2 7 3 7 8"/>
  </Icon>
);
const HumanIcon = ({ size }) => (
  <Icon size={size} stroke={1.4}>
    <path d="M12 21s-7-4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 6-7 10-7 10z"/>
  </Icon>
);

/* Tag pills */
const DatabaseIcon = ({ size = 18 }) => (
  <Icon size={size} stroke={1.4}>
    <ellipse cx="12" cy="5" rx="8" ry="2.5"/>
    <path d="M4 5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5"/>
    <path d="M4 11v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6"/>
  </Icon>
);
const MountainIcon = ({ size = 18 }) => (
  <Icon size={size} stroke={1.4}>
    <path d="M3 19l5-8 3 4 3-6 7 10z"/>
  </Icon>
);

const ChevronDown = ({ size = 14 }) => (
  <Icon size={size}><path d="M6 9l6 6 6-6"/></Icon>
);

const GlobeIcon = ({ size = 14 }) => (
  <Icon size={size} stroke={1.5}>
    <circle cx="12" cy="12" r="9"/>
    <path d="M3 12h18"/>
    <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z"/>
  </Icon>
);

window.Ico = {
  LeafMark, Sprig, GithubIcon, LinkedinIcon, MailIcon, FileIcon,
  DownloadIcon, ArrowRight, TwitterIcon,
  StackIcon, NodesIcon, SparkIcon, CloudIcon, WindIcon,
  ServerIcon, InfraIcon, HumanIcon,
  DatabaseIcon, MountainIcon, ChevronDown, GlobeIcon,
};
