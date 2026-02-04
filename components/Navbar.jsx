'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg border-b border-green-100' : 'bg-white border-b border-green-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16 md:h-20 items-center">
          <a href="/" className="flex items-center gap-1 sm:gap-2 group min-w-0">
            <div className="group-hover:scale-105 transition-transform flex-shrink-0">
            <Image src="/images/logo.png" alt="Busra Organic Hair Oil" width={80} height={80} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain" />
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="#problem"
              onClick={(e) => handleLinkClick(e, '#problem')}
              className="text-gray-600 hover:text-green-600 font-medium transition-colors"
            >
              সমস্যা
            </a>
            <a
              href="#benefits"
              onClick={(e) => handleLinkClick(e, '#benefits')}
              className="text-gray-600 hover:text-green-600 font-medium transition-colors"
            >
              সুবিধা
            </a>
            <a
              href="#packages"
              onClick={(e) => handleLinkClick(e, '#packages')}
              className="text-gray-600 hover:text-green-600 font-medium transition-colors"
            >
              প্যাকেজ
            </a>
            <a
              href="#order-form"
              onClick={(e) => handleLinkClick(e, '#order-form')}
              className="bg-green-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <ShoppingBag size={18} />
              অর্ডার করুন
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:bg-green-50 rounded-lg transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t border-green-100 overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="p-4 space-y-1">
          <a href="#problem" onClick={(e) => handleLinkClick(e, '#problem')} className="block py-3 px-4 text-gray-600 hover:bg-green-50 rounded-lg font-medium">
            সমস্যা
          </a>
          <a href="#benefits" onClick={(e) => handleLinkClick(e, '#benefits')} className="block py-3 px-4 text-gray-600 hover:bg-green-50 rounded-lg font-medium">
            সুবিধা
          </a>
          <a href="#packages" onClick={(e) => handleLinkClick(e, '#packages')} className="block py-3 px-4 text-gray-600 hover:bg-green-50 rounded-lg font-medium">
            প্যাকেজ
          </a>
          <a href="#order-form" onClick={(e) => handleLinkClick(e, '#order-form')} className="block py-3 px-4 bg-green-600 text-white rounded-lg font-bold text-center">
            অর্ডার করুন
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
