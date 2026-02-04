import { ShieldCheck, ArrowRight } from 'lucide-react';

const StrongCTA = () => (
  <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-white text-center relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
          <ShieldCheck className="text-white" size={40} />
        </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
          আজই অর্ডার করুন – কোনো অগ্রিম পেমেন্ট ছাড়াই
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          পণ্য হাতে পেয়ে কোয়ালিটি চেক করে তারপর টাকা দিন। সারা বাংলাদেশে ক্যাশ অন ডেলিভারি।
        </p>
        <a
          href="#order-form"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-green-700 transition-all shadow-xl hover:scale-105"
        >
          অর্ডার কনফার্ম করুন
          <ArrowRight size={24} />
        </a>
      </div>
    </div>
  </section>
);

export default StrongCTA;
