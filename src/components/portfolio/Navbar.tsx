import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        scrolled ? 'bg-background/80 backdrop-blur-md border-border py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tighter">
          AZMERA<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button size="sm" asChild>
            <a href="#contact">Hire Me</a>
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full" asChild>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Hire Me
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
