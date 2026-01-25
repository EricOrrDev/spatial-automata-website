import AbstractBackground from "@/components/abstract-background";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card } from "@/components/ui/card";

export default function AxiomFactoryPage() {
  return (
    <div className="min-h-screen bg-industrial-black text-off-white relative overflow-hidden">
      <AbstractBackground />
      <Navbar />
      <main className="px-6 py-20 max-w-4xl mx-auto">
        <Card className="bg-industrial-black/90 rounded-3xl shadow-lg p-10 text-center backdrop-blur-sm">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Axiom Factory
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Axiom Factory is a piece of middleware built using CHASM.NET to provide AI safety middleware to industrial physical hardware so AI can control factories, but engineers can use our hierarchial state machines to ensure safety, such as not letting AI blow up a machine motor, or another layer of lock out tag out.
          </p>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
