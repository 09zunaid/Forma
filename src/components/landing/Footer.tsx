import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import Logo from '@/components/Logo';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/process', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const contactDetails = {
  email: 'mohammadzunaid83@gmail.com',
  phone: '7569370322',
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Logo className="text-primary-foreground dark:text-primary-foreground" />
            <p className="text-sm text-primary-foreground/70">
              Crafting digital experiences that drive results. We bring your vision to life with creativity and code.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold">Get in Touch</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a
                  href={`tel:${contactDetails.phone}`}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {contactDetails.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {contactDetails.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/50">
          <p>&copy; {currentYear} Forma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
