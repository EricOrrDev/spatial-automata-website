export default function Navbar() {
  return (
    <nav className="px-6 py-4 flex justify-between items-center bg-industrial-black/50 rounded-xl shadow-lg p-10 text-center backdrop-blur-sm">
      <div className="space-x-6">
        <a
          href="/products"
          className="hover:text-blueprint-blue transition-colors"
        >
          Products
        </a>
        <a
          href="/about"
          className="hover:text-blueprint-blue transition-colors"
        >
          About
        </a>
      </div>
      <div className="text-2xl font-bold">
        <img
          src="/Full_Logo_White.svg"
          alt="Spatial Automata Logo"
          className="h-8 inline-block mr-2"
        />
      </div>
    </nav>
  );
}
