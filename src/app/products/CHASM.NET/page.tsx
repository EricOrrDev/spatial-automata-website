import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AbstractBackground from "@/components/abstract-background";

export default function CHASM() {
  return (
    <div>
      <Navbar />
      <AbstractBackground />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-off-white bg-industrial-black/90 rounded-3xl shadow-lg p-10 text-center backdrop-blur-sm max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">CHASM.NET</h1>
          <p className="max-w-xl text-lg text-neutral-grey text-center">
            Build state machines without the boilerplate. CHASM.NET
            <span className="font-semibold">
              {" "}
              (Composable High-level Automata for State Modeling)
            </span>
            &nbsp; makes it easy to describe complex workflows in a declarative,
            readable way. Wrap existing .NET state machine libraries, compose
            behaviors like building blocks, and focus on logic instead of
            wiring.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
