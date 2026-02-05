import { Droplets, Wind, Sun, Moon } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { title: "তেল নিন", desc: "সামান্য পরিমাণ Busra অয়েল হাতে নিন।", icon: Droplets },
    { title: "ম্যাসাজ করুন", desc: "মাথার তালু ও চুলের গোড়ায় হালকা ম্যাসাজ করুন।", icon: Wind },
    { title: "রেখে দিন", desc: "কমপক্ষে ২–৩ ঘণ্টা বা রাতভর রাখুন।", icon: Sun },
    { title: "ধুয়ে ফেলুন", desc: "হালকা শ্যাম্পু দিয়ে ধুয়ে পরিষ্কার করুন।", icon: Moon }
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 px-2">কিভাবে ব্যবহার করবেন?</h2>
          <p className="text-gray-600 text-base sm:text-lg px-2">খুবই সহজ ৪টি ধাপ – নিয়মিত ব্যবহারে চুল পড়া কমবে ও নতুন চুল গজাবে।</p>
        </div>
        <ul className="space-y-6 sm:space-y-8">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <li key={idx} className="flex gap-4 sm:gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                  <IconComponent size={28} className="sm:w-8 sm:h-8" />
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default HowItWorks;
