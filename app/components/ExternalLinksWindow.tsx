import RetroWindow from '@/app/components/RetroWindow';

type LinkItem = { href: string; label: string };

export default function ExternalLinksWindow({ links }: { links: LinkItem[] }) {
  if (!links || links.length === 0) return null;
  return (
    <div className="threetwogrid moveup far">
      <div className="hideonm" />
      <div id="external-links" className="retro-window-placeholder">
        <RetroWindow title="External links" className="widescreen">
          <div className="iconlogo"></div>
          {links.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noreferrer" className="vstack block-link">
              <div className="paragraph headingbold link">{l.label}</div>
            </a>
          ))}
        </RetroWindow>
      </div>
    </div>
  );
}


