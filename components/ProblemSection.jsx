import { Droplets, ShieldCheck, Leaf } from 'lucide-react';

const ProblemSection = () => (
  <section id="problem" className="py-12 sm:py-16 md:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 sm:mb-16">
  
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-4 italic px-2">আপনার কি এই সমস্যাগুলো হচ্ছে?</h2>
        <div className="w-24 h-1 bg-red-200 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
        {[
          { text: "চুল কি অতিরিক্ত হারে ঝরে যাচ্ছে?", icon: Droplets },
          { text: "অল্প বয়সেই কি টাক পড়ার ভয় পাচ্ছেন?", icon: ShieldCheck },
          { text: "চুল কি রুক্ষ, শুষ্ক এবং প্রাণহীন হয়ে গেছে?", icon: Leaf },
          { text: "খুশকি কি আপনার পিছু ছাড়ছে না?", icon: Droplets },
          { text: "আপনার চুল কি লম্বা হচ্ছে না? সারা বছর একই লেন্থ এ পড়ে থাকে?", icon: Leaf }
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="bg-red-50 p-5 sm:p-6 rounded-2xl border border-red-100 flex flex-col items-center text-center hover:shadow-lg hover:border-red-200 transition-all min-h-[180px] sm:min-h-[200px] justify-center">
              <div className="bg-white p-3 rounded-full mb-3 sm:mb-4 shadow-sm flex-shrink-0">
                <Icon className="text-red-500" size={28} />
              </div>
              <p className="text-base sm:text-lg font-bold text-gray-800 leading-snug">{item.text}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 sm:mt-16 max-w-3xl mx-auto bg-green-50 border-2 border-green-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-3 sm:mb-4">সমাধান:</h3>
        <p className="text-xl sm:text-2xl md:text-3xl font-black text-green-900 leading-snug px-1">
          আপনার এই সকল সমস্যার ওয়ান-স্টপ সলিউশন হলো <br className="hidden sm:block" />
          <span className="text-green-600 underline decoration-green-300 underline-offset-8">Busra Organic Hair Oil</span>
        </p>
      </div>
    </div>
  </section>
);

export default ProblemSection;
