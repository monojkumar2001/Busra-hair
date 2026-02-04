const ResultExplanation = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-2">কখন কী ফল পাবেন?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">নিয়মিত ব্যবহারে ধাপে ধাপে পরিবর্তন দেখতে পাবেন।</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
        {[
          { time: "৭ দিন", title: "চুল পড়া কমতে শুরু", desc: "চুলের গোড়া পুষ্টি পায়, ঝরা কমে।", bg: "bg-green-50", border: "border-green-200" },
          { time: "২–৩ সপ্তাহ", title: "খুশকি ও রুক্ষতা কমে", desc: "মাথার ত্বক ও চুল নরম ও স্বাস্থ্যোজ্জ্বল হয়।", bg: "bg-green-50", border: "border-green-200" },
          { time: "১–২ মাস", title: "নতুন চুল ও ঘনত্ব", desc: "যেখানে চুল কম ছিল সেখানে নতুন চুল গজাতে পারে।", bg: "bg-green-100", border: "border-green-300" }
        ].map((item, idx) => (
          <div key={idx} className={`${item.bg} border-2 ${item.border} rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4`}>
            <div className="flex-shrink-0 w-14 sm:w-16 text-center">
              <span className="text-xl sm:text-2xl font-black text-green-700">{item.time}</span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-sm sm:text-base text-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultExplanation;
