import Image from "next/image";
import Hero from "@/components/home/Hero";
import Info from "@/components/home/Info";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";

export default function Home() {
  return (
    <div className="">
      <Hero 
        videoSrc="/vid.mp4"
        title="Transform your outdoor space into a lush paradise"
        description="Whether you're dreaming of a vibrant garden, a serene patio, or a functional outdoor living space, our team of skilled landscapers and gardeners is here to bring your vision to life. Let's create a landscape you'll love."
      />
      <Info />
      <HowItWorksSection />
      <ServicesSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
    </div>
  );
}
