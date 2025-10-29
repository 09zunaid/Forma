'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from '@/components/Logo';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => {
      const isActive = pathname === link.href;
      return (
        <Link
          key={link.href}
          href={link.href}
          onClick={handleLinkClick}
          className={`transition-colors hover:text-accent dark:hover:text-accent ${
            isMobile
              ? `block py-2 text-lg ${isActive ? 'text-accent font-bold' : 'text-primary dark:text-background'}`
              : `text-sm font-medium ${isActive ? 'text-accent font-bold' : 'text-primary dark:text-background'}`
          }`}
        >
          {link.label}
        </Link>
      );
    });

  return (
    <header className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between border-b border-primary/10 dark:border-background/10 pb-4">
        <Link href="/" onClick={handleLinkClick}>
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {renderNavLinks()}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-accent text-accent-foreground text-sm font-bold hover:bg-accent/90 transition-all duration-300">
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-primary dark:text-background">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-secondary dark:bg-primary">
              <div className="flex h-full flex-col p-6">
                <div className="mb-8 flex items-center justify-between">
                  <Link href="/" onClick={handleLinkClick}>
                    <Logo />
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="sr-only">Close navigation menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-6">
                    {renderNavLinks(true)}
                </nav>
                 <Button asChild size="lg" className="mt-auto bg-accent text-white hover:bg-accent/90">
                    <Link href="/contact" onClick={handleLinkClick}>Get a Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
