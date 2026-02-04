import Image from 'next/image';
import { Facebook, Youtube } from 'lucide-react';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-10 sm:py-12 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6">
        <Image src="/images/logo.png" alt="Busra Organic" width={120} height={48} className="h-10 sm:h-12 w-auto object-contain" />
        <span className="text-xl sm:text-2xl font-bold tracking-tight text-center">Busra Organic Hair Oil</span>
      </div>
      <p className="text-gray-400 max-w-xl mx-auto mb-6 text-sm sm:text-base px-2">
        আমরা আপনাকে শতভাগ পিওর এবং অর্গানিক পণ্যের নিশ্চয়তা দিচ্ছি। আপনার চুলের সঠিক যত্নই আমাদের একমাত্র লক্ষ্য।
      </p>

      {/* Social Media */}
      <div className="flex justify-center gap-4 mb-8">
        <a
          href="https://www.facebook.com/share/1DCtJ3yzkB/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-green-600 hover:scale-110 transition-all"
          aria-label="Facebook"
        >
          <Facebook size={22} />
        </a>
        <a
          href="https://www.tiktok.com/@busracare1.0?_r=1&_t=ZS-93e8p9SQrFF"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-100 hover:text-gray-900 hover:scale-110 transition-all"
          aria-label="TikTok"
        >
          <TikTokIcon />
        </a>
        <a
          href="https://youtube.com/@busrahairoil?si=daa1vUL9f80a7VUY"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-red-600 hover:scale-110 transition-all"
          aria-label="YouTube"
        >
          <Youtube size={22} />
        </a>
      </div>

      <div className="flex justify-center gap-4 sm:gap-8 mb-8 flex-wrap px-2">
        <a href="#" className="hover:text-green-500 transition-colors text-sm sm:text-base">Privacy Policy</a>
        <a href="#" className="hover:text-green-500 transition-colors text-sm sm:text-base">Terms of Service</a>
        <a href="#order-form" className="hover:text-green-500 transition-colors text-sm sm:text-base">Contact Us</a>
      </div>
      <div className="w-full h-px bg-gray-800 mb-8"></div>
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Busra Beauty Care. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
