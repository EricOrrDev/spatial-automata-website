"use client";

import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <nav className="relative z-50 px-6 py-6 flex items-center justify-between bg-industrial-black/90 rounded-xl shadow-lg text-center backdrop-blur-sm">
      {/* Left side with nav menu */}
      <NavigationMenu>
        <NavigationMenuList className="flex items-center space-x-6">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/projects"
                className="hover:text-blueprint-blue text-white transition-colors"
              >
                Projects
              </Link>
            </NavigationMenuLink>
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

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/blog"
                className="hover:text-blueprint-blue text-white transition-colors"
              >
                Blog
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
