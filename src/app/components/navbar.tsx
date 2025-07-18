import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="px-6 py-6 flex justify-between items-center bg-industrial-black/90 rounded-xl shadow-lg text-center backdrop-blur-sm">
      <div className="space-x-6">
        <Link
          href="/products"
          className="hover:text-blueprint-blue transition-colors"
        >
          Products
        </Link>
        <Link
          href="/about"
          className="hover:text-blueprint-blue transition-colors"
        >
          About
        </Link>
      </div>
      <Link href="/">
        <Image
          src="/Full_Logo_White.svg"
          alt="Spatial Automata Logo"
          width={180}
          height={40}
          className=" inline-block mr-2"
          priority
        />
      </Link>
    </nav>
  );
}
