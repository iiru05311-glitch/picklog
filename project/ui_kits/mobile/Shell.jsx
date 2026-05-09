/* global React */
const { useState } = React;

// ============== Icons (Lucide-style outlines, 1.75 stroke) ==============
const Ic = ({ d, size = 22, fill = "none", className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={fill} stroke="currentColor"
       strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}
       dangerouslySetInnerHTML={{ __html: d }} />
);

const I = {
  home:    '<path d="m3 12 9-9 9 9"/><path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10"/>',
  search:  '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  plus:    '<path d="M12 5v14M5 12h14"/>',
  bookmark:'<path d="m6 3 12 0a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"/>',
  user:    '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  bell:    '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  heart:   '<path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11z"/>',
  share:   '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="m16 6-4-4-4 4"/><path d="M12 2v13"/>',
  more:    '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  edit:    '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  close:   '<path d="M18 6 6 18M6 6l12 12"/>',
  link:    '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.5-1.5"/>',
  grid:    '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
  card:    '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M9 10h2"/><path d="M9 14h6"/>',
  chevron: '<path d="M9 18l6-6-6-6"/>',
  back:    '<path d="M15 18l-6-6 6-6"/>',
  imageOff:'<line x1="2" y1="2" x2="22" y2="22"/><path d="M10.41 10.41a2 2 0 1 1-2.83-2.83"/><path d="M13.5 13.5L21 21"/><path d="M3.59 3.59A2 2 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.05-.22 1.41-.59"/>',
  flame:   '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 17c1.5 0 3-1 3-3 0-1.5-1-2-2-3.5-1-1.5-1-3 0-4 .5-.5 1-1 1-2 0-1-1-2-1-2s-2 1-3 2c-1 1-2 2.5-2 4 0 1 .5 1.5 1 2.5z"/><path d="M5 21c-1.5-1.5-2-3.5-2-5 0-3 2.5-5 4-6.5 1-1 1-2 1-3 0-2-1-3-1-3s4 1 6 3c2 2 3 4 3 6 0 5-3.5 8-7 8.5-1 .15-2 .15-3-0z"/>',
  filter:  '<path d="M3 6h18"/><path d="M7 12h10"/><path d="M11 18h2"/>',
  tag:     '<path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><circle cx="7" cy="7" r="1.5"/>',
  sparkle: '<path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/><path d="M19 14l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>',
};

// ============== Bottom Tab Bar ==============
function TabBar({ tab, onTab, onSave }) {
  const item = (key, icon, label) => (
    <button onClick={() => onTab(key)} className="pl-tab" data-on={tab === key}>
      <Ic d={I[icon]} size={22} />
      <span>{label}</span>
    </button>
  );
  return (
    <div className="pl-tabbar">
      {item("home", "home", "홈")}
      {item("discover", "search", "검색")}
      <div className="pl-tab-spacer">
        <button className="pl-fab" onClick={onSave} aria-label="저장">
          <Ic d={I.plus} size={22} />
        </button>
        <span className="pl-fab-label">저장</span>
      </div>
      {item("library", "bookmark", "보관함")}
      {item("profile", "user", "마이")}
    </div>
  );
}

// ============== Top App Header ==============
function TopBar({ title, right, leftBack, onBack }) {
  return (
    <div className="pl-topbar">
      {leftBack ? (
        <button className="pl-iconbtn" onClick={onBack}><Ic d={I.back} /></button>
      ) : (
        <div className="pl-wordmark"><em>Pick</em><span className="pl-dot"></span><em>Log</em></div>
      )}
      <div className="pl-topbar-title">{title}</div>
      <div className="pl-topbar-right">
        {right ?? (
          <button className="pl-iconbtn"><Ic d={I.bell} /></button>
        )}
      </div>
    </div>
  );
}

window.PL = { Ic, I, TabBar, TopBar };
