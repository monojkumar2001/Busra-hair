'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';

const REVIEW_IMAGES = [
  { src: '/images/reviews/1.jpeg', alt: 'কাস্টমার রিভিউ - Busra Organic' },
  { src: '/images/reviews/2.jpeg', alt: 'কাস্টমার রিভিউ - Busra Organic' },
  { src: '/images/reviews/3.jpeg', alt: 'কাস্টমার রিভিউ - Busra Organic' },
  { src: '/images/reviews/4.jpeg', alt: 'কাস্টমার রিভিউ - Busra Organic' },
  { src: '/images/reviews/5.jpeg', alt: 'কাস্টমার রিভিউ - Busra Organic' },
  { src: '/images/reviews/6.jpeg', alt: 'কাস্টমার রিভিউ - Busra Organic' },
  { src: '/images/reviews/7.jpeg', alt: 'কাস্টমার রিভিউ - Busra Organic' },
  { src: '/images/reviews/8.jpeg', alt: 'কাস্টমার রিভিউ - Busra Organic' },
];

const TestimonialSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: Customer Review + Stars */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4">
            Customer Review
          </h2>
          <div className="flex justify-center items-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={22} className="sm:w-6 sm:h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-gray-500 font-medium text-sm sm:text-base">
            হাজার হাজার খুশি গ্রাহকের ভালোবাসা
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          {/* Grid of review images (chat screenshots / hair photos) */}
          <div className="flex-1 w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {REVIEW_IMAGES.map((item, i) => (
              <div
                key={i}
                className="relative aspect-[2/3] sm:aspect-[3/4] rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
