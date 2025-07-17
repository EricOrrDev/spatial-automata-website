import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function RedlineRelay() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-industrial-black text-off-white">
        <h1 className="text-4xl font-bold mb-4">Redline Relay</h1>
        <p className="max-w-xl text-lg text-neutral-grey text-center">
          AI-powered agent-to-agent SaaS: reads Bluebeam redlines, summarizes
          context, and delivers actionable insights for your email and project
          management AIs.
        </p>
      </div>
      <Footer />
    </div>
  );
}
