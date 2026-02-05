import Image from 'next/image';

const BeforeAfterSection = () => (
  <section className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-10 md:mb-14">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 px-2">
          ফলাফলের প্রমাণ
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
          Busra Organic ব্যবহারে আসল পরিবর্তন – Before & After
        </p>
      </div>
      <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-gray-100 max-w-4xl mx-auto relative aspect-[4/3]">
        <Image
          src="/images/product-2.jpeg"
          alt="Busra Organic হেয়ার কেয়ার ব্যবহারের আগে ও পরে – চুলের পরিবর্তনের প্রমাণ"
          fill
          className="object-contain"
          sizes="(max-width: 896px) 100vw, 896px"
        />
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
