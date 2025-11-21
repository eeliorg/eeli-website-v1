'use client';

import Link from 'next/link';
import {
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-purple-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="">
              <Link href="/" className="flex items-center">
              <Image
                src="/logos/logo2.png"
                alt="EELI Logo"
                width={120}
                height={40}
                className="h-10 lg:h-12 w-auto"
              />
            </Link>
            </div>
            <p className="text-gray-300">
              We uplift women and children by providing emotional support, educational tools, and practical resources that help them thrive.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1AeVLRGLYo/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/real_eeli?utm_source=qr&igsh=MWgxazY1b2Y5cjhyNQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
          </div>

          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/announcements" className="text-gray-300 hover:text-white transition-colors">Announcements</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:elevationeeli@gmail.com" className="hover:text-white transition-colors">elevationeeli@gmail.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+16478914521" className="hover:text-white transition-colors">+1 (647) 891-4521</a>
              </li>
              <li className="mt-4">
                <p className="font-semibold">Office Hours:</p>
                <p>Mon–Sat, 9 AM – 6 PM</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Visit Us</h4>
            <div className="flex items-start space-x-2">
              <MapPin className="w-5 h-5 mt-1 text-purple-400" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-300">Barrie L4N6R8 ON Canada</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 SINCE. 2023</p>
          <p className="text-gray-400">©EELI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}