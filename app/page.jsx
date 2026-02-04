'use client';

import { ShoppingBag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import SolutionIntroduction from '@/components/SolutionIntroduction';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import DetectionGrid from '@/components/DetectionGrid';
import ResultExplanation from '@/components/ResultExplanation';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import StrongCTA from '@/components/StrongCTA';
import Pricing from '@/components/Pricing';
import TestimonialSection from '@/components/TestimonialSection';
import OrderSection from '@/components/OrderSection';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionIntroduction />
      <HowItWorks />
      <WhyChooseUs />
      <DetectionGrid />
      <ResultExplanation />
      <BeforeAfterSection />
      <StrongCTA />
      <Pricing />
      <TestimonialSection />
      <OrderSection />
      <Footer />

      {/* Floating CTA for Mobile - safe area aware */}
      <div className="lg:hidden fixed bottom-6 right-4 sm:right-6 z-40 pb-[env(safe-area-inset-bottom)]">
        <a
          href="#order-form"
          className="bg-green-600 text-white min-w-[56px] min-h-[56px] p-4 rounded-full shadow-2xl flex items-center justify-center border-4 border-white active:scale-95 transition-transform"
          aria-label="অর্ডার করুন"
        >
          <ShoppingBag size={28} />
        </a>
      </div>
    </div>
  );
}
