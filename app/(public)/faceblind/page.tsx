import Link from 'next/link';
import FooterDesktop from '@/app/components/FooterDesktop';
import { supabaseServer } from '@/lib/supabase/server';
import { getFolderLinks } from '@/lib/domain/folder-links/service';
import { defaultFolderLinks } from '@/lib/domain/folder-links/defaults';
import type { FolderLink } from '@/lib/domain/folder-links/types';
import { hasSupabaseEnv } from '@/lib/utils/env';

export const revalidate = false;

export const metadata = {
  title: 'Faceblindness',
  description: 'I am face-blind, and have a condition known as prosopagnosia.',
};

export default async function FaceblindPage() {
  let folderLinks: FolderLink[] = defaultFolderLinks;

  if (hasSupabaseEnv()) {
    folderLinks = await getFolderLinks(supabaseServer());
  }

  return (
    <main className="retro-root">
      <div className="globalmargin">
        <header className="topbar">
          <Link href="/" className="hstack gap-xs link block-link"><div>Lassor.com</div><div>→</div></Link>
          <div className="hstack gap-xs link"><div className="breadcrumb-current">Faceblindness</div></div>
        </header>
        <div className="windowcanvas">
          <div className="vstack gap-xl">
            <div className="retro-window-placeholder">
              <div className="retro-window portrait-on-mobile">
                <div className="window-bar">
                  <div className="paragraph wide">Faceblind.txt</div>
                  <div className="x-out">×</div>
                </div>
                <div className="window-content-wrapper">
                  <div className="window-content">
                    <div className="titleheading">
                      I am face-blind, and have a condition known as prosopagnosia. I rely on context and intuition to
                      tell people apart, but I often struggle to identify them by sight.
                    </div>
                    <div className="paragraph rich-text">
                      <p>
                        Most people do not realize that their ability to recognize faces is different from their
                        recognition of other objects. But it turns out the human brain has a structure dedicated to
                        telling faces apart.
                      </p>
                      <p>
                        Without it, even highly perceptive people and those with photographic memories cannot learn
                        your identity by looking at your face. At the same time, people with impaired memory and
                        introverts can have a savant’s ability to recognize faces (which is known as{' '}
                        <a href="https://en.wikipedia.org/wiki/Super_recogniser">super recognition</a>).
                      </p>
                      <p>
                        Face-blindness is not a ‘spectrum’ disorder that a &apos;face-sighted&apos; person can relate
                        to through personal experience. It is not like ‘not being able to put a name to a face’ and it
                        is not associated with memory or shyness. It can be acquired both genetically (as in my case)
                        or from an injury or illness.
                      </p>
                      <p>
                        I cannot recognize faces of celebrities, friends, family, or even my own face (although I can
                        deduce the identity of many people through context).
                      </p>
                      <p>
                        Face-blindness is more common than you would think. Face-blind public figures include Jane
                        Goodall, <a href="https://www.youtube.com/watch?v=k5bvnXYIQG8">Oliver Sacks</a>, Brad Pitt,
                        Steve Wozniak, and <a href="https://www.youtube.com/watch?v=8rdUf4B9owY">Chuck Close</a>.
                      </p>
                      <p>
                        Many face-blind people mistake themselves for introverts, even if they have unmet social
                        needs. Some avoid situations where they may be unexpectedly recognized to avoid the appearance
                        of rudeness. I have overcome this inhibition.
                      </p>
                      <p>
                        It may take a frustratingly long time for me to remember your identity, but if you have a
                        unique trait like an unusual hairstyle, a piece of jewelry you never remove, or a distinct
                        voice, I will be more likely to identify and remember you.
                      </p>
                      <p>
                        Thank you for your understanding and for learning about this surprisingly common disorder.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="resize-corner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterDesktop folderLinks={folderLinks} />
    </main>
  );
}
