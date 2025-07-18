import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AbstractBackground from "@/app/abstract-background";

export default function BlockCaptain() {
  return (
    <div>
      <Navbar />
      <AbstractBackground />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-off-white bg-industrial-black/90 rounded-3xl shadow-lg p-10 text-center backdrop-blur-sm max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Block Captain</h1>
          <p className="max-w-xl text-lg text-neutral-grey text-center">
            A modern CAD block manager for teams. Upload, organize, search, and
            version your blocks in the cloud—no more lost files or outdated
            standards.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
