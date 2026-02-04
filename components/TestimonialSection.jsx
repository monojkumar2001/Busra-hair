'use client';

import { useState, useEffect } from 'react';
import { Star, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  { id: 1, name: "মালিহা আক্তার", location: "ঢাকা", comment: "অয়েলটা জাস্ট অসাধারণ! মাত্র ১০ দিন ব্যবহারেই আমার চুল পড়া অনেক কমেছে। গন্ধটাও খুব রিফ্রেশিং।", rating: 5, image: "https://picsum.photos/seed/maliha/200/200" },
  { id: 2, name: "রাশেদুল ইসলাম", location: "চট্টগ্রাম", comment: "আমি অনেক ব্র্যান্ড ট্রাই করেছি কিন্তু কাজ হয়নি। Busra-র হেয়ার অয়েলটা সত্যি আলাদা। আমার মাথার সামনের দিকে নতুন চুল গজাতে শুরু করেছে।", rating: 5, image: "https://picsum.photos/seed/rashed/200/200" },
  { id: 3, name: "সুমাইয়া জান্নাত", location: "সিলেট", comment: "অর্গানিক তেলের খোঁজে ছিলাম অনেকদিন। এটা যেমন ন্যাচারাল, তেমনি কার্যকরী। থ্যাংক ইউ Busra Beauty Care!", rating: 5, image: "https://picsum.photos/seed/sumaiya/200/200" },
  { id: 4, name: "নিশাত মজুমদার", location: "খুলনা", comment: "প্রথমেই বলবো ডেলিভারি খুব ফাস্ট ছিল। তেলের কোয়ালিটি খুব ভালো, চুল এখন অনেক বেশি সফট আর শাইনি লাগে।", rating: 4, image: "https://picsum.photos/seed/nishat/200/200" },
  { id: 5, name: "তানভীর আহমেদ", location: "কুমিল্লা", comment: "খুশকির সমস্যায় খুব ভুগছিলাম। এই তেলটা ব্যবহারের ২ সপ্তাহ পর এখন মাথা একদম পরিষ্কার। হাইলি রেকমেন্ডেড!", rating: 5, image: "https://picsum.photos/seed/tanvir/200/200" },
  { id: 6, name: "ফারজানা ইতি", location: "রংপুর", comment: "আমি আমার বাচ্চার জন্য নিয়েছিলাম। কোনো কেমিক্যাল নেই জেনে নিশ্চিন্তে ব্যবহার করছি। রেজাল্ট খুব ভালো।", rating: 5, image: "https://picsum.photos/seed/farzana/200/200" },
  { id: 7, name: "কামরুল হাসান", location: "বরিশাল", comment: "ক্যাশ অন ডেলিভারিতে পেয়েছি, কোনো ঝামেলা হয়নি। তেলটা একদম পিওর মনে হয়েছে।", rating: 5, image: "https://picsum.photos/seed/kamrul/200/200" },
  { id: 8, name: "সাবিহা সুলতানা", location: "ঢাকা", comment: "চুল লম্বা করতে এই তেলটার জুড়ি নেই। ১ মাস ব্যবহারের পর চুলের ঘনত্ব আগের চেয়ে অনেক বেড়েছে।", rating: 5, image: "https://picsum.photos/seed/sabiha/200/200" },
  { id: 9, name: "জহিরুল হক", location: "ময়মনসিংহ", comment: "অর্গানিক জিনিসের দাম সাধারণত বেশি হয়, কিন্তু Busra-র প্রাইস অনুযায়ী মানটা অনেক বেশি ভালো।", rating: 4, image: "https://picsum.photos/seed/zahirul/200/200" },
  { id: 10, name: "রীতা চৌধুরী", location: "রাজশাহী", comment: "চুলের রুক্ষতা দূর করতে এই অয়েলটা জাদুর মতো কাজ করে। শ্যাম্পু করার পরও চুলের ময়েশ্চারাইজার বজায় থাকে।", rating: 5, image: "https://picsum.photos/seed/rita/200/200" },
];

const CARDS_PER_SLIDE = 3;
const totalSlides = Math.ceil(TESTIMONIALS.length / CARDS_PER_SLIDE);

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prev = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const getVisibleTestimonials = () => {
    const n = TESTIMONIALS.length;
    const start = (currentSlide * CARDS_PER_SLIDE) % n;
    return Array.from({ length: CARDS_PER_SLIDE }, (_, i) => TESTIMONIALS[(start + i) % n]);
  };

  const visible = getVisibleTestimonials();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">কাস্টমার ফিডব্যাক</h2>
          <div className="flex justify-center items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="mt-4 text-gray-500 font-medium">হাজার হাজার খুশি গ্রাহকের ভালোবাসা</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visible.map((t) => (
              <div key={t.id} className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm relative min-h-[280px] flex flex-col">
                <MessageSquare className="absolute top-6 right-6 text-green-100" size={48} />
                <div className="flex items-center gap-4 mb-4">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0" />
                  <div className="min-w-0">
                    <h4 className="text-lg font-bold text-gray-900 truncate">{t.name}</h4>
                    <p className="text-green-600 font-medium text-sm">{t.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 flex-grow line-clamp-4">"{t.comment}"</p>
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 flex-shrink-0" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 bg-white text-green-600 p-3 rounded-full shadow-lg hover:bg-green-50 transition-colors border border-green-100 z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 bg-white text-green-600 p-3 rounded-full shadow-lg hover:bg-green-50 transition-colors border border-green-100 z-10"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all ${currentSlide === i ? 'w-8 bg-green-600' : 'w-2 bg-green-200 hover:bg-green-300'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
