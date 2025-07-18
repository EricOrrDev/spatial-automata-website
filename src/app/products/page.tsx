import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AbstractBackground from "@/app/abstract-background";

export default function Products() {
  return (
    <div>
      <Navbar />
      <AbstractBackground />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-off-white bg-industrial-black/50 rounded-3xl shadow-lg p-10 text-center backdrop-blur-sm max-w-4xl">
          <h1 className="text-4xl font-bold mb-6">Our Products</h1>
          <ul className="space-y-4 text-xl">
            <li>
              <a
                href="/products/block-captain"
                className="text-blueprint-blue hover:underline"
              >
                Block Captain
              </a>
            </li>
            <li>
              <a
                href="/products/redline-relay"
                className="text-blueprint-blue hover:underline"
              >
                Redline Relay
              </a>
            </li>
            <li>
              <a
                href="/products/excellentdb"
                className="text-blueprint-blue hover:underline"
              >
                ExcellentDB
              </a>
            </li>
            <li>
              <a
                href="/products/codecheck"
                className="text-blueprint-blue hover:underline"
              >
                CodeCheck
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
