"use client";

import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <nav className="relative z-50 px-6 py-6 flex items-center justify-between bg-industrial-black/90 rounded-xl shadow-lg text-center backdrop-blur-sm">
      {/* Left side with nav menu */}
      <NavigationMenu>
        <NavigationMenuList className="flex items-center space-x-6">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-black">
              Products
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-industrial-black text-black rounded-md shadow-md p-4 min-w-[200px]">
              <ul className="flex flex-col gap-2">
                {[
                  { name: "CHASM.NET", href: "/products/CHASM.NET" },
                  { name: "CodeCheck", href: "/products/codecheck" },
                  { name: "Axiom Factory", href: "/products/axiom-factory" },
                ].map((item) => (
                  <li key={item.name}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-3 py-2 rounded-md hover:bg-blueprint-blue/20 transition-colors"
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/about"
                className="hover:text-blueprint-blue text-white transition-colors"
              >
                About
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* ShadCN Required */}
        <NavigationMenuIndicator />
        <NavigationMenuViewport />
      </NavigationMenu>

      {/* Right-aligned logo */}
      <Link href="/">
        <Image
          src="/Full_Logo_White.svg"
          alt="Spatial Automata Logo"
          width={180}
          height={40}
          className="inline-block"
          priority
        />
      </Link>
    </nav>
  );
}
