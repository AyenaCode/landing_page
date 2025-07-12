import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
  { href: "/cgu", label: "CGU/CGV" },
  { href: "/privacy", label: "Politique de confidentialité" },
];

const socials = [
  { href: "https://twitter.com/", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://facebook.com/", icon: Facebook, label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="w-full py-10 bg-muted border-t mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="hover:text-primary transition-colors"
            >
              <s.icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
      <div className="text-xs text-center text-muted-foreground mt-6">
        © {new Date().getFullYear()} MVP IA. Tous droits réservés.
      </div>
    </footer>
  );
}
