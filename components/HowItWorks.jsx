import { Droplets, Wind, Sun, Moon } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { step: "০১", title: "তেল নিন", desc: "সামান্য পরিমাণ Busra অয়েল হাতে নিন।", icon: Droplets, color: "bg-green-500" },
    { step: "০২", title: "ম্যাসাজ করুন", desc: "মাথার তালু ও চুলের গোড়ায় হালকা ম্যাসাজ করুন।", icon: Wind, color: "bg-green-600" },
    { step: "০৩", title: "রেখে দিন", desc: "কমপক্ষে ২–৩ ঘণ্টা বা রাতভর রাখুন।", icon: Sun, color: "bg-green-700" },
    { step: "০৪", title: "ধুয়ে ফেলুন", desc: "হালকা শ্যাম্পু দিয়ে ধুয়ে পরিষ্কার করুন।", icon: Moon, color: "bg-green-800" }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">কিভাবে ব্যবহার করবেন?</h2>
          <p className="text-gray-600 text-lg">খুবই সহজ ৪টি ধাপ – নিয়মিত ব্যবহারে চুল পড়া কমবে ও নতুন চুল গজাবে।</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-xl hover:scale-[1.02] transition-all">
                <div className={`w-16 h-16 ${item.color} text-white rounded-full flex items-center justify-center font-black text-xl mx-auto mb-6`}>
                  {item.step}
                </div>
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
