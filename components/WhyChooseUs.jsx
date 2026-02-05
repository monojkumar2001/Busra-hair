import Image from 'next/image';
import { Leaf, CheckCircle, Star, Truck } from 'lucide-react';

const WhyChooseUs = () => (
  <section id="benefits" className="py-12 sm:py-16 md:py-20 bg-green-900 text-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 sm:mb-6 px-2">কেন আমাদের অয়েলটি সেরা?</h2>
        <p className="text-green-200 text-base sm:text-lg">প্রকৃতির সেরা উপাদানের সঠিক সমন্বয়</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
        <div className="space-y-6 sm:space-y-8">
          {[
            { title: "১০০% ন্যাচারাল", desc: "কোনো ক্ষতিকারক কেমিক্যাল বা মিনারেল অয়েল নেই।", icon: Leaf },
            { title: "হারবাল গুণাগুণ", desc: "আমলকী, শিকাকাই, কালোজিরা ও ২৫টিরও বেশি আয়ুর্বেদিক ভেষজ উপাদানের মিশ্রণ।", icon: Truck },
            { title: "কার্যকারিতা", desc: "নারী ও পুরুষ উভয়ের জন্যই সমান কার্যকর।", icon: CheckCircle },
            { title: "ফলাফল", desc: "নিয়মিত ব্যবহারে চুলের গোড়া মজবুত করে এবং খুশকি দূর করে।", icon: Star }
          ].map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="flex gap-4 sm:gap-6 items-start group">
                <div className="bg-green-800 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-green-400 group-hover:bg-green-400 group-hover:text-green-900 transition-all flex-shrink-0">
                  <Icon size={28} className="sm:w-8 sm:h-8" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-green-100">{benefit.title}</h4>
                  <p className="text-green-200/80 leading-relaxed text-sm sm:text-lg">{benefit.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden md:flex justify-center items-center">
          <div className="relative w-full max-w-sm aspect-[3/4]">
            <div className="absolute -inset-10 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
            <Image
              src="/images/product-1.png"
              alt="Busra Hair Oil Product"
              fill
              className="rounded-3xl shadow-2xl relative z-10 border-4 border-green-800 object-cover"
              sizes="(max-width: 384px) 100vw, 384px"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
