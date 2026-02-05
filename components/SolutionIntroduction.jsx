import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const SolutionIntroduction = () => (
  <section className="py-12 sm:py-20 bg-green-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
      <div className="flex-1 w-full max-w-md relative aspect-[3/4]">
        <Image src="/images/product-1.png" fill className="rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-green-800 object-cover" alt="Busra Organic Hair Oil" sizes="(max-width: 448px) 100vw, 448px" />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">প্রকৃতির উপহার: Busra Organic Hair Oil</h2>
        <p className="text-green-100 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
          আমলকী, শিকাকাই, কালোজিরা ও ৪৭টিরও বেশি আয়ুর্বেদিক ভেষজ উপাদান  এবং ১০ টি প্রিমিয়াম তেলের মিশ্রণে তৈরি এই অয়েল চুলের গোড়া মজবুত করে, খুশকি দূর করে এবং নতুন চুল গজাতে সাহায্য করে।
        </p>
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 sm:gap-3 text-green-100">
            <CheckCircle2 className="text-green-400 flex-shrink-0" size={20} />
            <span className="text-sm sm:text-base">১০০% ন্যাচারাল – কোনো ক্ষতিকারক কেমিক্যাল নেই</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-green-100">
            <CheckCircle2 className="text-green-400 flex-shrink-0" size={20} />
            <span className="text-sm sm:text-base">হারবাল গুণাগুণ – আয়ুর্বেদিক ভেষজ উপাদান</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-green-100">
            <CheckCircle2 className="text-green-400 flex-shrink-0" size={20} />
            <span className="text-sm sm:text-base">নিয়মিত ব্যবহারে দৃশ্যমান ফলাফল</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SolutionIntroduction;
