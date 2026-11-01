import Link from 'next/link';
import type { FolderLink } from '@/lib/domain/folder-links/types';
import { defaultFolderLinks } from '@/lib/domain/folder-links/defaults';

type FooterDesktopProps = {
  folderLinks?: FolderLink[];
};

export default function FooterDesktop({ folderLinks = defaultFolderLinks }: FooterDesktopProps) {
  return (
    <div className="globalmargin">
      <div id="desktop" className="windowcanvas">
        <div id="footer-folders" className="wide">
          <div className="align-right">
            <div className="folder-grid">
              {folderLinks.map((link) => (
                <div key={link.id} className="icon-placeholder">
                  <div className="draggable-folder">
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noreferrer" className="iconlink block-link">
                        <div className="folder" data-debug-icon={JSON.stringify(link.icon)} data-debug-label={link.label}>
                          {link.icon || '[NO ICON]'}
                        </div>
                        <div className="navlink foldericon">{link.label}</div>
                      </a>
                    ) : (
                      <Link href={link.href} className="iconlink block-link">
                        <div className="folder" data-debug-icon={JSON.stringify(link.icon)} data-debug-label={link.label}>
                          {link.icon || '[NO ICON]'}
                        </div>
                        <div className="navlink foldericon">{link.label}</div>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
