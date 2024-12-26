import Navbar from "@/components/navbar";
import FoodSlide from "@/components/food";
import MainSection from "@/components/mainsection"; // Corrected to PascalCase
import ShortListInfo from "@/components/shortinfo";
import Footer from "@/components/footer";
import Reviews from "@/components/customerreview";

export default function Home() {
  return (
    <div>
      <Navbar />
      <MainSection />
      <ShortListInfo />
      <FoodSlide />
      <Reviews/>
      {/* Uncomment the below lines if you intend to use them */}
      <Footer />
    </div>
  );
}
