export default function HeroSection() {
  return (
    <div className="bg-industrial-black/90 rounded-4xl shadow-lg p-10 text-center backdrop-blur-sm">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        Building the future of AEC automation.
        <br />
        <span className="text-engineering-red">Start building faster.</span>
      </h1>
      <p className="text-xl text-neutral-grey mb-8 max-w-2xl mx-auto">
        Spatial Automata creates specialized SaaS tools for AEC
        professionals—streamlining CAD workflows, automating document review,
        modernizing data management, and ensuring code compliance. Our mission:
        eliminate repetitive work so you can focus on design and delivery.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 rounded bg-slate-grey text-off-white placeholder-neutral-grey border border-neutral-grey focus:border-engineering-red focus:outline-none flex-1 w-full sm:w-auto"
        />
        <button className="px-6 py-3 bg-engineering-red text-off-white rounded hover:bg-red-600 transition-colors whitespace-nowrap">
          Get Early Access
        </button>
      </div>
    </div>
  );
}
