import AbstractBackground from "./abstract-background";

export default function Home() {
  return (
    <div className="min-h-screen bg-industrial-black text-off-white relative overflow-hidden">
      {/* Abstract p5.js Background */}
      <AbstractBackground />

      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between items-center">
        <div className="space-x-6">
          <a href="/products" className="hover:text-blueprint-blue transition-colors">
            Products
          </a>
          <a href="/about" className="hover:text-blueprint-blue transition-colors">
            About
          </a>
        </div>
        <div className="text-2xl font-bold">
          <img src="/Full_Logo_White.svg" alt="Spatial Automata Logo" className="h-8 inline-block mr-2" />
        </div>

      </nav>

      {/* Hero Section */}
      <main className="px-6 py-20 max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Stop juggling files.
            <br />
            <span className="text-engineering-red">Start building faster.</span>
          </h1>
          
          <p className="text-xl text-neutral-grey mb-8 max-w-2xl mx-auto">
            Spatial Automata creates tools for AEC professionals to optimize 
            workflows and prevent expensive mistakes. Starting with centralized 
            CAD block management.
          </p>

          {/* Email Signup */}
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

        {/* Value Props */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3">Centralized Library</h3>
            <p className="text-neutral-grey">
              Upload, organize, and search your CAD blocks with metadata tagging and version control.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3">Usage Analytics</h3>
            <p className="text-neutral-grey">
              Track where blocks are used across projects and see impact analysis for updates.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3">Team Collaboration</h3>
            <p className="text-neutral-grey">
              Approval workflows, permissions, and change notifications for team-based management.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-slate-grey mt-20">
        <div className="max-w-4xl mx-auto text-center text-neutral-grey">
          <p>&copy; 2025 Spatial Automata.</p>
        </div>
      </footer>
    </div>
  );
}