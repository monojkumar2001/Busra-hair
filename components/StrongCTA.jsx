import { ShieldCheck, ArrowRight } from 'lucide-react';

const StrongCTA = () => (
  <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-green-50 to-white text-center relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg">
          <ShieldCheck className="text-white" size={32} />
        </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
          আজই অর্ডার করুন – কোনো অগ্রিম পেমেন্ট ছাড়াই
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 px-2">
          পণ্য হাতে পেয়ে কোয়ালিটি চেক করে তারপর টাকা দিন। সারা বাংলাদেশে ক্যাশ অন ডেলিভারি।
        </p>
        <a
          href="#order-form"
          className="btn-zamp inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl hover:bg-green-700 transition-all shadow-xl active:scale-95 min-h-[48px]"
        >
          অর্ডার কনফার্ম করুন
          <ArrowRight size={24} />
        </a>
      </div>
    </div>
  </section>
);

export default StrongCTA;
