import { profile } from '../data/portfolio';

type ResumeLink = {
  href: string;
<<<<<<< HEAD
  download: boolean;
};

/**
 * Returns the resume link. When a PDF is available on the site, use the base-aware path.
 * Otherwise fall back to an email request flow.
 */
export function getResumeLink(): ResumeLink {
  if (profile.resumeUrl) {
    return { href: profile.resumeUrl, download: true };
  }

  return {
    href: `mailto:${profile.email}?subject=${encodeURIComponent('Resume request — Dhanush K')}`,
    download: false
=======
  download: string;
};

export function getResumeLink(): ResumeLink {
  const href = profile.resumeUrl || `${import.meta.env.BASE_URL}Dhanush_Resume21.pdf`;

  return {
    href,
    download: 'Dhanush_Resume21.pdf',
>>>>>>> 79a189032710b2f2c955064a2f9fd2d4eff4919e
  };
}