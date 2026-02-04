'use client';

import { ShieldCheck, ArrowRight, Leaf, Droplets } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-green-100 pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide">
              ১০০% শতভাগ প্রাকৃতিক সমাধান
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 md:mb-8">
              চুল পড়া বন্ধ হবে মাত্র <span className="text-green-600">৭ দিনে!</span>
              <br className="hidden md:block" />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 block mt-2">
                প্রকৃতি আর বিজ্ঞানের সমন্বয়ে তৈরি Busra Organic Hair Oil
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              আপনার নিষ্প্রাণ চুলের যত্নে আমরা নিয়ে এসেছি শতভাগ প্রাকৃতিক উপাদানে তৈরি অর্গানিক হেয়ার অয়েল। যা চুল পড়া রোধ করে নতুন চুল গজাতে সাহায্য করে।
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#order-form"
                className="group w-full sm:w-auto bg-green-600 text-white text-lg px-8 py-4 rounded-xl font-bold shadow-lg shadow-green-200 hover:bg-green-700 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                অর্ডার করতে এখানে ক্লিক করুন
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <p className="text-gray-500 font-medium flex items-center gap-1.5">
                <ShieldCheck className="text-green-600 flex-shrink-0" size={20} />
                কোনো অগ্রিম পেমেন্ট ছাড়াই অর্ডার করুন
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1 w-full max-w-lg mx-auto lg:max-w-none order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-green-200/30 rounded-3xl blur-2xl -z-10"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80">
                <img
                  src="/images/product-1.png"
                  alt="Busra Organic Hair Oil - প্রাকৃতিক হেয়ার অয়েল"
                  className="w-full h-auto "
                />
              </div>
              <div className="absolute -bottom-3 -left-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg px-4 py-2 flex items-center gap-2 border border-green-100">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Leaf className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-green-800">১০০% অর্গানিক</p>
                  <p className="text-[10px] text-gray-500">প্রাকৃতিক উপাদান</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-10 pointer-events-none -z-0">
        <Leaf size={400} className="text-green-600 rotate-45" />
      </div>
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none -z-0">
        <Droplets size={300} className="text-green-600" />
      </div>
    </section>
  );
};

export default Hero;
