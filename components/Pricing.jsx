'use client';

import { ShoppingBag, CheckCircle, Star } from 'lucide-react';

const PACKAGES = [
  { id: 1, title: "ফুল কম্বো অফার", items: ["২০০ মিলি হেয়ার অয়েল", "২০০ গ্রাম হেয়ার প্যাক", "১০০ গ্রাম শ্যাম্পু"], price: 1300, freebies: ["১০০ মিলি হেয়ার টোনার", "৫০ গ্রাম হেয়ার প্যাক", "ডেলিভারি চার্জ ফ্রি"], isPopular: true },
  { id: 2, title: "বেসিক কম্বো অফার", items: ["২০০ মিলি হেয়ার অয়েল", "২০০ গ্রাম হেয়ার প্যাক"], price: 1050, freebies: ["১০০ মিলি হেয়ার টোনার", "৫০ গ্রাম হেয়ার প্যাক", "ডেলিভারি চার্জ ফ্রি"], isPopular: false },
];

const Pricing = () => (
  <section id="packages" className="py-12 sm:py-16 md:py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 sm:mb-16">
        <div className="inline-block bg-yellow-400 text-yellow-900 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-black text-base sm:text-xl mb-4 sm:mb-6 shadow-lg border-2 border-yellow-500">
          এই অফার থাকবে মাত্র দুই দিন!
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 px-2">সেরা প্যাকেজগুলো থেকে বেছে নিন</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 max-w-5xl mx-auto">
        {PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative bg-white rounded-[2rem] overflow-hidden transition-all hover:translate-y-[-8px] shadow-xl flex flex-col ${pkg.isPopular ? 'ring-4 ring-green-600' : 'border border-gray-100'}`}
          >
            {pkg.isPopular && (
              <div className="absolute top-0 right-0 bg-green-600 text-white px-6 py-2 rounded-bl-3xl font-bold uppercase tracking-wider text-sm shadow-md">
                Best Value
              </div>
            )}
            <div className="p-6 sm:p-8 md:p-10 flex-grow">
              <h3 className="text-2xl sm:text-3xl font-black text-gray-800 mb-4 sm:mb-6">{pkg.title}</h3>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {pkg.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-base sm:text-lg font-medium text-gray-700">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200 mb-8">
                <p className="text-sm font-bold text-yellow-800 uppercase mb-3 flex items-center gap-2">
                  <Star size={16} fill="currentColor" />
                  এর সাথে একদম ফ্রি পাচ্ছেন:
                </p>
                <ul className="space-y-2">
                  {pkg.freebies.map((free, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-green-700 font-bold">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                      {free}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <div className="flex items-baseline gap-2 mb-4 sm:mb-6">
                  <span className="text-4xl sm:text-5xl font-black text-green-700">৳{pkg.price}</span>
                  <span className="text-gray-400 line-through text-base sm:text-lg">৳{pkg.price + 500}</span>
                </div>
                <a
                  href="#order-form"
                  className={`btn-zamp w-full py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl flex items-center justify-center gap-3 transition-all min-h-[48px] ${pkg.isPopular ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-900 text-white hover:bg-black'}`}
                >
                  <ShoppingBag size={24} />
                  অর্ডার করুন
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
