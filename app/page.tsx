import Navbar from "@/components/navbar";
import FoodSlide from "@/components/food";
import MainSection from "@/components/mainsection"; // Corrected to PascalCase
import ShortListInfo from "@/components/shortinfo";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* Uncomment the below lines if you intend to use them */}
      {/* <Reviews /> */}
      {/* <FoodSlide /> */}
      {/* <MainSection /> */}
      {/* <ShortListInfo /> */}
      <Footer />
    </div>
  );
}
