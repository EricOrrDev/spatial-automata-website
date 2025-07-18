import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import AbstractBackground from "@/app/abstract-background";

export default function CodeCheck() {
  return (
    <div>
      <Navbar />
      <AbstractBackground />
      <div className="min-h-screen flex flex-col items-center justify-center bg-industrial-black text-off-white">
        <h1 className="text-4xl font-bold mb-4">CodeCheck (Coming Soon)</h1>
        <p className="max-w-xl text-lg text-neutral-grey text-center">
          Automated building code compliance for Revit. Our state machine
          reviews your models and flags issues before they become costly
          mistakes.
        </p>
      </div>
      <Footer />
    </div>
  );
}
