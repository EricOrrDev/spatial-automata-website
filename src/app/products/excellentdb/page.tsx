import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import AbstractBackground from "@/app/abstract-background";

export default function ExcellentDB() {
  return (
    <div>
      <Navbar />
      <AbstractBackground />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-off-white bg-industrial-black/50 rounded-3xl shadow-lg p-10 text-center backdrop-blur-sm max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">ExcellentDB</h1>
          <p className="max-w-xl text-lg text-neutral-grey text-center">
            Transform your Excel chaos into a real database. Upload
            spreadsheets, let our LLM infer the schema, and get a ready-to-use
            Postgres DB with S3 file support.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
