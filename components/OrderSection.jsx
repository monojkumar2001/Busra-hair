'use client';

import { useState } from 'react';
import { ShieldCheck, CheckCircle, Truck, PhoneCall, ArrowRight, Package as PackageIcon } from 'lucide-react';

const PACKAGES = [
  { id: 1, title: "ফুল কম্বো অফার", items: ["২০০ মিলি হেয়ার অয়েল", "২০০ গ্রাম হেয়ার প্যাক", "১০০ গ্রাম শ্যাম্পু"], price: 1300, freebies: ["১০০ মিলি হেয়ার টোনার", "৫০ গ্রাম হেয়ার প্যাক", "ডেলিভারি চার্জ ফ্রি"], isPopular: true },
  { id: 2, title: "বেসিক কম্বো অফার", items: ["২০০ মিলি হেয়ার অয়েল", "২০০ গ্রাম হেয়ার প্যাক"], price: 1050, freebies: ["১০০ মিলি হেয়ার টোনার", "৫০ গ্রাম হেয়ার প্যাক", "ডেলিভারি চার্জ ফ্রি"], isPopular: false },
];

const OrderSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    package: '1'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', address: '', package: '1' });
    }, 1500);
  };

  const rules = [
    { title: "১. কোনো অগ্রিম পেমেন্ট ছাড়া", desc: "কোনো অগ্রিম পেমেন্ট ছাড়াই অর্ডার করুন এবং নিশ্চিন্তে থাকুন।", icon: ShieldCheck },
    { title: "২. কোয়ালিটি চেক সুবিধা", desc: "পণ্য হাতে পেয়ে কোয়ালিটি চেক করে টাকা পরিশোধ করুন।", icon: CheckCircle },
    { title: "৩. হোম ডেলিভারি", desc: "সারা বাংলাদেশে দ্রুততম হোম ডেলিভারি সুবিধা।", icon: Truck }
  ];

  return (
    <section id="order-form" className="py-12 sm:py-16 md:py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight">অর্ডারের নিয়ম (Cash On Delivery)</h2>
            <p className="text-lg sm:text-xl text-gray-600 font-medium">আপনার অর্ডারটি নিশ্চিন্তে করুন:</p>
            <div className="space-y-6">
              {rules.map((rule, idx) => {
                const Icon = rule.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-sm border border-green-100">
                    <div className="text-green-600 flex-shrink-0">
                      <Icon size={32} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{rule.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{rule.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-green-300 flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <PhoneCall size={28} />
              </div>
              <div>
                <p className="text-gray-500 font-medium">সরাসরি কথা বলতে কল করুন</p>
                <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">Contact</p>
                <a href="tel:01736066568" className="text-2xl font-black text-green-700 hover:text-green-600 transition-colors">০১৭৩৬০৬৬৫৬৮</a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 md:p-12 shadow-2xl border border-green-100 relative">
            {isSuccess && (
              <div className="absolute inset-0 z-20 bg-white/95 backdrop-blur-sm rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={64} strokeWidth={3} />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">অর্ডার সফল হয়েছে!</h3>
                <p className="text-lg text-gray-600 mb-8">আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবেন। ধন্যবাদ!</p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="bg-green-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-700 transition-colors"
                >
                  আরেকটি অর্ডার করুন
                </button>
              </div>
            )}
            <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">নিচের ফর্মে আপনার তথ্য দিয়ে অর্ডারটি কনফার্ম করুন</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">আপনার নাম:</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-100 focus:border-green-600 transition-all outline-none"
                  placeholder="সম্পূর্ণ নাম লিখুন"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">মোবাইল নম্বর:</label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-100 focus:border-green-600 transition-all outline-none"
                  placeholder="১১ ডিজিটের মোবাইল নম্বর"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">পুরো ঠিকানা:</label>
                <textarea
                  required
                  rows={3}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-100 focus:border-green-600 transition-all outline-none resize-none"
                  placeholder="গ্রাম/বাড়ি নং, রোড, জেলা ও থানা উল্লেখ করুন"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide">প্যাকেজ সিলেক্ট করুন:</label>
                <div className="grid grid-cols-2 gap-4">
                  {PACKAGES.map((pkg) => (
                    <label
                      key={pkg.id}
                      className={`relative flex flex-col items-center justify-center p-4 rounded-2xl border-2 cursor-pointer transition-all ${formData.package === String(pkg.id) ? 'border-green-600 bg-green-50' : 'border-gray-200 bg-white hover:border-green-200'}`}
                    >
                      <input
                        type="radio"
                        name="package"
                        value={pkg.id}
                        checked={formData.package === String(pkg.id)}
                        onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                        className="sr-only"
                      />
                      <PackageIcon className={formData.package === String(pkg.id) ? 'text-green-600' : 'text-gray-400'} size={24} />
                      <span className="font-bold text-gray-900 mt-2">৳{pkg.price}</span>
                      <span className="text-xs text-gray-500 text-center mt-1">{pkg.title}</span>
                    </label>
                  ))}
                </div>
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className={`w-full py-4 sm:py-6 rounded-2xl font-black text-lg sm:text-2xl shadow-xl shadow-green-100 flex items-center justify-center gap-3 transition-all min-h-[48px] ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700 hover:scale-[1.02] active:scale-[0.98]'}`}
              >
                {isSubmitting ? (
                  <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    অর্ডার সাবমিট করুন
                    <ArrowRight size={28} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
