'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import {Hand} from 'lucide-react';


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
   { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/announcements', label: 'Announcements' },
  { href: '/blog', label:'Blog'},
  ];

  return (
    <header
      className="absolute w-full top-0 left-0 right-0 z-100 bg-pink-50 transition-colors duration-300"

    >
      <div className="relative top-0 z-100">
        <Section className='pt-2'>
          <div className="flex items-center justify-between"
            style={
              isScrolled
                ? {
                  background: 'none',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  borderBottom: '1px solid var(--divider-color)',
                  borderRadius: '100px',
                  padding: '0px 10px'
                }
                : undefined
            }>
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/logo1.png"
                alt="EELI Logo"
                width={120}
                height={40}
                className="h-10 lg:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center space-x-8 rounded-4xl px-4 capitalize"
              style={
                !isScrolled
                  ? {
                    background: 'white',
                    backdropFilter: 'blur(5px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderBottom: '1px solid var(--divider-color)',
                    borderRadius: '100px',
                    padding: '0px 10px'
                  }
                  : undefined
              }
            >
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-base font-normal px-1 py-1 my-2 text-[#2f085b] hover:text-purple-500 transition-colors duration-200 rounded-lg"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Button href="/donate" className='rounded-4xl inline-block focus:outline-none focus:ring-2 focus:ring-purple-200 '>
                <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center bg-purple-900 text-white px-8 sm:px-8 py-3 sm:py-3 rounded-full font-semibold text-xs sm:text-xs hover:shadow-xl transition-shadow " aria-label="Donate to empower women">
                   <Hand className="w-4 h-4 mr-2" />
                   <p className="leading-none">EMPOWER A WOMAN & CHILD</p>
                </motion.span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg transition-all duration-200 bg-purple-950"
              aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              style={{
                background: 'var(--btn-bg-reverse)',
              }}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6 text-purple-950"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-purple-950"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 p-4 rounded-lg bg-pink-100" >
              <div className="flex flex-col space-y-3">
                <Link
                  href="/about-us"
                  className="text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                  style={{ color: 'var(--foreground)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/gallery"
                  className="text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                  style={{ color: 'var(--foreground)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  href="/announcements"
                  className="text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                  style={{ color: 'var(--foreground)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Announcements
                </Link>
                <Link
                  href="/blog"
                  className="text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                  style={{ color: 'var(--foreground)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <div className="pt-2 w-full">
                  <Button href="/donate" onClick={() => setIsMobileMenuOpen(false)} className='!w-full'>
                    Empower A Woman
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Section>
      </div>
    </header>
  );
}
