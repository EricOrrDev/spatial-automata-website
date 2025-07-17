import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="px-6 py-6 flex justify-between items-center bg-industrial-black/50 rounded-xl shadow-lg text-center backdrop-blur-sm">
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
      <Image
        src="/Full_Logo_White.svg"
        alt="Spatial Automata Logo"
        width={120}
        height={32}
        className="h-8 inline-block mr-2"
        priority
      />
    </nav>
  );
}
