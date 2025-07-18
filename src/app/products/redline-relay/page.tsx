import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import AbstractBackground from "@/app/abstract-background";

export default function RedlineRelay() {
  return (
    <div>
      <Navbar />
      <AbstractBackground />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-off-white bg-industrial-black/50 rounded-3xl shadow-lg p-10 text-center backdrop-blur-sm max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Redline Relay</h1>
          <p className="max-w-xl text-lg text-neutral-grey text-center">
            AI-powered agent-to-agent SaaS: reads Bluebeam redlines, summarizes
            context, and delivers actionable insights for your email and project
            management AIs.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
