import Navbar from "@/components/home/navbar";

import Header from "@/components/home/hero";
import InfoSection from "@/components/home/contact";
import TrendingFood from "@/components/home/trendingFood";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <InfoSection />
      <TrendingFood />
      <Footer />
    </div>
  );
}
