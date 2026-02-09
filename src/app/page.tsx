import ThumbnailCarousel from '@/components/Home/CancerCarousel';
import Contributors from '@/components/Home/Contributors';
import DynamicCancer from '@/components/Home/DynamicCancer';
import FooterContent from '@/components/Home/FooterContent';
import Hero from '@/components/Home/Hero';
import Testimonials from '@/components/Home/Testimonials';
import Upcoming from '@/components/Home/Upcoming';
import Highlight from '@/components/Home/Videocarousel/page';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Symposium",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ThumbnailCarousel/>
      <Contributors/>
      <DynamicCancer/>
      <Highlight/>
      <Upcoming/>
      <Testimonials/>
      <FooterContent/>
    </main>
  )
}
