'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const PRODUCTS = [
  { id: 1, name: 'Busra Hair Oil', price: 550, image: '/images/product/1.png' },
  { id: 2, name: 'Busra Hair Toner', price: 200, image: '/images/product/2.png' },
  { id: 3, name: 'Busra Organic Shampoo', price: 250, image: '/images/product/3.png' },
  { id: 4, name: 'Busra Hair Pack', price: 500, image: '/images/product/4.png' },
  { id: 5, name: 'Busra Hair Pack', price: 180, image: '/images/product/5.png' },
  { id: 6, name: 'Busra Ciruni', price: 200, image: '/images/product/6.png' },
  { id: 7, name: 'Busra Scalp Massager', price: 180, image: '/images/product/7.png' },
];

const ORDER_FROM_PRODUCT_EVENT = 'orderFromProduct';

const scrollToOrderForm = (e) => {
  e.preventDefault();
  if (typeof window !== 'undefined') {
    window.sessionStorage.setItem('orderFromProduct', '1');
    window.dispatchEvent(new CustomEvent(ORDER_FROM_PRODUCT_EVENT));
  }
  const formEl = document.getElementById('order-form');
  if (formEl) formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const TopSellingProducts = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 overflow-hidden"

    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 text-center mb-8 sm:mb-12">
          Our Top Selling Product
        </h2>

        <div className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto pb-4 px-1 snap-x snap-mandatory scrollbar-hide md:justify-center md:flex-wrap md:overflow-visible">
          {PRODUCTS.map((product) => (
            <a
              key={product.id}
              href="#order-form"
              onClick={scrollToOrderForm}
              className="flex-shrink-0 w-[220px] sm:w-[240px] md:w-[200px] lg:w-[220px] snap-center group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
                <div className="relative aspect-square bg-white p-3 sm:p-4 border-b border-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 220px, (max-width: 768px) 240px, 220px"
                  />
                </div>
                <div className="px-4 py-3 text-center">
                  <h3 className="text-gray-900 font-bold text-base sm:text-lg truncate">
                    {product.name}
                  </h3>
                </div>
                <div className="px-4 py-2 text-center">
                  <p className="text-gray-700 font-semibold text-sm sm:text-base">
                    Price {product.price} Tk
                  </p>
                </div>
                <div className="p-2 sm:p-3">
                  <span className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-bold py-2.5 sm:py-3 rounded-lg text-sm sm:text-base transition-colors">
                    Order Now
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

          <div className="mt-8 sm:mt-10 w-full flex justify-center items-center relative rounded-xl overflow-hidden ">
            <Image
              src="/images/product-de.jpeg"
              alt="Busra Organic Product"
            width={1000}
            height={1000}
            className=" rounded-xl"
          />
        </div>
        <div className="flex justify-center mt-6">
        <a href="#order-form" onClick={scrollToOrderForm} className="btn-zamp inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl hover:bg-green-700 transition-all shadow-xl active:scale-95 min-h-[48px]">অর্ডার কনফার্ম করুন<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
            </div>
      </div>
    </section>
  )
}

export default TopSellingProducts
