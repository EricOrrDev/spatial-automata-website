import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AbstractBackground from "@/app/abstract-background";

export default function About() {
  return (
    <div>
      <Navbar />
      <AbstractBackground />
      <div className="min-h-screen flex flex-col items-center justify-center bg-industrial-black/90 text-off-white">
        <div className="bg-industrial-black/50 rounded-4xl shadow-lg p-10 text-center backdrop-blur-sm">
          <h1 className="text-4xl font-bold mb-4">About Spatial Automata</h1>
          <p className="max-w-2xl text-lg text-neutral-grey">
            Spatial Automata is a software company focused on building
            practical, high-performance tools for engineers, designers, and
            developers working in spatial computing environments. Our mission is
            to streamline complex workflows in CAD, BIM, and simulation systems
            through automation, precision, and thoughtfully engineered
            interfaces.
            <br />
            <br />
            We develop modular software products that interoperate cleanly with
            existing platforms—whether it’s managing CAD blocks at scale,
            tracking active design time for accurate billing, or creating
            agent-to-agent communication layers for real-time collaboration.
            Each tool reflects a belief in deterministic systems, predictable
            behavior, and the power of state machines to bring order to
            complexity.
            <br />
            <br />
            At Spatial Automata, we don’t just build tools—we build logical
            machines, machined logically.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
