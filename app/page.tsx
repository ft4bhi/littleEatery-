import Navbar from "@/components/navbar";
import FoodSlide from "@/components/food";
import MainSection from "@/components/mainsection"; // Corrected to PascalCase
import ShortListInfo from "@/components/shortinfo";
import Footer from "@/components/footer";
import Reviews from "@/components/customerreview";

import { Poppins, Montserrat } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
});

export default function Home() {
  return (
    <div className="font-poppins font-monteserrat">
      <Navbar />
      <MainSection />
      <ShortListInfo />
      <FoodSlide />
      <Reviews />
      <Footer />
    </div>
  );
}
