import { Leaf, Flower2, Sparkles } from 'lucide-react';

const DetectionGrid = () => {
  const ingredients = [
    { name: "আমলকী", benefit: "চুলের গোড়া মজবুত", Icon: Leaf },
    { name: "শিকাকাই", benefit: "চুল ঘন ও লম্বা", Icon: Flower2 },
    { name: "কালোজিরা", benefit: "খুশকি দূর", Icon: Sparkles },
    { name: "অন্যান্য ভেষজ", benefit: "২৫+ আয়ুর্বেদিক উপাদান", Icon: Leaf }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">প্রধান উপাদান</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">প্রকৃতির সেরা ভেষজ উপাদান দিয়ে তৈরি Busra Organic Hair Oil</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {ingredients.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <div
                key={idx}
                className="bg-green-50 p-6 rounded-2xl border-2 border-green-100 flex flex-col items-center text-center hover:shadow-lg hover:border-green-200 transition-all"
              >
                <div className="w-14 h-14 bg-green-200/50 text-green-700 rounded-full flex items-center justify-center mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
                <span className="text-sm font-medium text-green-700">{item.benefit}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetectionGrid;
