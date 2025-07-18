import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import AbstractBackground from "@/app/abstract-background";

export default function BlockCaptain() {
  return (
    <div>
      <Navbar />
      <AbstractBackground />
      <div className="min-h-screen flex flex-col items-center justify-center bg-industrial-black text-off-white">
        <h1 className="text-4xl font-bold mb-4">Block Captain</h1>
        <p className="max-w-xl text-lg text-neutral-grey text-center">
          A modern CAD block manager for teams. Upload, organize, search, and
          version your blocks in the cloud—no more lost files or outdated
          standards.
        </p>
        {/* Add more details and signup CTA here */}
      </div>
      <Footer />
    </div>
  );
}
