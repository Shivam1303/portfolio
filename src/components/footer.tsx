import { profile } from "@/data/profile";

export function Footer() {
  return <footer className="site-footer"><div className="site-container"><p>© {new Date().getFullYear()} {profile.name}</p><p>Designed and built with care.</p></div></footer>;
}
