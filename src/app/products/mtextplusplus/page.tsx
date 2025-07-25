import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AbstractBackground from "@/components/abstract-background";

export default function MTextPlusPlus() {
  return (
    <div>
      <Navbar />
      <AbstractBackground />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-off-white bg-industrial-black/90 rounded-3xl shadow-lg p-10 text-center backdrop-blur-sm max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">MText++</h1>
          <p className="max-w-xl text-lg text-neutral-grey text-center">
            A simple AutoLISP tool for incrementing numbers inside MText. Select
            text like "Lot 1" and watch it update to "Lot 2", "Lot 3", and so on
            &mdash; with customizable step values.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
