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
    <div className="min-h-screen">
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

      {/* Floating CTA for Mobile */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <a
          href="#order-form"
          className="bg-green-600 text-white p-5 rounded-full shadow-2xl flex items-center justify-center border-4 border-white"
          aria-label="অর্ডার করুন"
        >
          <ShoppingBag size={32} />
        </a>
      </div>
    </div>
  );
}
