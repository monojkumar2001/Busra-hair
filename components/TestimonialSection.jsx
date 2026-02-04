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

const totalCards = TESTIMONIALS.length;
const cardWidthPercentOfTrack = 100 / totalCards; // প্রতিটি কার্ড ট্র্যাকের ১০%

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(1);

  useEffect(() => {
    const updateCardsVisible = () => {
      const w = window.innerWidth;
      if (w < 640) setCardsVisible(1);
      else if (w < 1024) setCardsVisible(2);
      else setCardsVisible(3);
    };
    updateCardsVisible();
    window.addEventListener('resize', updateCardsVisible);
    return () => window.removeEventListener('resize', updateCardsVisible);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCards);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % totalCards);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);

  const trackWidthPercent = totalCards * (100 / cardsVisible);
  const translatePercent = currentIndex * cardWidthPercentOfTrack;

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4 px-2">কাস্টমার ফিডব্যাক</h2>
          <div className="flex justify-center items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={20} className="sm:w-6 sm:h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="mt-3 sm:mt-4 text-gray-500 font-medium text-sm sm:text-base">হাজার হাজার খুশি গ্রাহকের ভালোবাসা</p>
        </div>

        <div className="relative overflow-hidden px-2 sm:px-0">
          {/* Extra padding so nav buttons don't overlap content on small screens */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                width: `${trackWidthPercent}%`,
                transform: `translateX(-${translatePercent}%)`,
              }}
            >
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="flex-shrink-0 px-1.5 sm:px-2 lg:px-3"
                  style={{ width: `${cardWidthPercentOfTrack}%` }}
                >
                  <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-100 shadow-sm relative min-h-[260px] sm:min-h-[280px] flex flex-col h-full">
                    <MessageSquare className="absolute top-4 right-4 sm:top-6 sm:right-6 text-green-100" size={40} />
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <img src={t.image} alt={t.name} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 sm:border-4 border-white shadow-md flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <h4 className="text-base sm:text-lg font-bold text-gray-900 truncate">{t.name}</h4>
                        <p className="text-green-600 font-medium text-xs sm:text-sm">{t.location}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 flex-grow text-sm sm:text-base line-clamp-4">"{t.comment}"</p>
                    <div className="flex gap-0.5 sm:gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={14} className="sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-green-600 p-2.5 sm:p-3 rounded-full shadow-lg hover:bg-green-50 active:scale-95 transition-all border border-green-100 min-w-[44px] min-h-[44px] flex items-center justify-center -translate-x-0 sm:-translate-x-1 lg:-translate-x-2"
              aria-label="Previous"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-green-600 p-2.5 sm:p-3 rounded-full shadow-lg hover:bg-green-50 active:scale-95 transition-all border border-green-100 min-w-[44px] min-h-[44px] flex items-center justify-center translate-x-0 sm:translate-x-1 lg:translate-x-2"
              aria-label="Next"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 md:mt-10 flex-wrap px-2">
          {Array.from({ length: totalCards }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`rounded-full transition-all min-w-[8px] min-h-[8px] ${currentIndex === i ? 'w-6 sm:w-8 bg-green-600' : 'w-2 bg-green-200 hover:bg-green-300'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
