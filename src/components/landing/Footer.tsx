import Link from 'next/link';
import Logo from '@/components/Logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/process', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy Policy' },
];

const socialLinks = [
    {
        name: 'LinkedIn',
        href: '#',
        icon: (
            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M19.5 0h-15A4.5 4.5 0 000 4.5v15A4.5 4.5 0 004.5 24h15a4.5 4.5 0 004.5-4.5v-15A4.5 4.5 0 0019.5 0zm-11.25 19.5H4.5v-9h3.75v9zM6.375 8.25a1.875 1.875 0 110-3.75 1.875 1.875 0 010 3.75zM20.25 19.5h-3.75v-4.125c0-.996-.019-2.277-1.387-2.277-1.388 0-1.601 1.086-1.601 2.205v4.197h-3.75v-9h3.6v1.65h.05a3.935 3.935 0 013.55-1.83c3.794 0 4.494 2.498 4.494 5.742v6.588z" fillRule="evenodd"></path></svg>
        )
    },
    {
        name: 'X',
        href: '#',
        icon: (
            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.13 0H0l9.308 13.324L0 24h2.113l8.176-9.309 6.531 9.309H24l-9.742-13.848zM11.526 15.006L10.74 14.01l-6.874-9.83H7.8l5.436 7.779 1.17 1.672 7.18 10.27h-4.032l-5.738-8.215z"></path></svg>
        )
    },
    {
        name: 'Instagram',
        href: '#',
        icon: (
            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12 0C8.74 0 8.333.015 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.015 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.015 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.687.073-4.947s-.015-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.667.014 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 3.18.145 4.524 1.488 4.67 4.67.055 1.265.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.146 3.18-1.49 4.524-4.67 4.67-1.265.055-1.646.07-4.85.07-3.203 0-3.585-.015-4.85-.07-3.18-.145-4.523-1.49-4.669-4.67-.056-1.265-.07-1.646-.07-4.85s.015-3.585.07-4.85c.146-3.18 1.49-4.524 4.67-4.67C8.415 2.176 8.797 2.16 12 2.16zm0 1.44a8.4 8.4 0 100 16.8 8.4 8.4 0 000-16.8zM12 20.4a6 6 0 110-12 6 6 0 010 12zM16.8 6.36a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" fillRule="evenodd"></path></svg>
        )
    }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col gap-8 px-5 py-10 text-center border-t border-accent-2/80 dark:border-white/10">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-muted-foreground dark:text-secondary/70 text-sm font-medium leading-normal hover:text-accent dark:hover:text-accent transition-colors">
                    {link.label}
                </Link>
            ))}
        </div>
        <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-muted-foreground dark:text-secondary/70 hover:text-accent dark:hover:text-accent transition-colors">
                    <span className="sr-only">{link.name}</span>
                    {link.icon}
                </a>
            ))}
        </div>
        <p className="text-muted-foreground dark:text-secondary/70 text-sm font-normal leading-normal">© {currentYear} Forma. All Rights Reserved.</p>
    </footer>
  );
}
