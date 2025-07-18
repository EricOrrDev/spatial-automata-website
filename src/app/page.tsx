import AbstractBackground from "./abstract-background";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroSection from "../components/hero";
import ProductOffers from "../components/productOffers";

export default function Home() {
  return (
    <div className="min-h-screen bg-industrial-black text-off-white relative overflow-hidden">
      <AbstractBackground />
      <Navbar />
      <main className="px-6 py-20 max-w-4xl mx-auto">
        <HeroSection />
        <ProductOffers />
      </main>
      <Footer />
    </div>
  );
}
