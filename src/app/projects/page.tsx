import Navbar from "@/components/navbar";
import AbstractBackground from "@/components/abstract-background";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const projects = [
  {
    title: "Spatial Automata Website",
    subtitle: "Next.js Website for Spatial Automata",
    link: "https://github.com/EricOrrDev/spatial-automata-website"
  },
  {
    title: "LINQCod",
    subtitle: "A Blazor WebAssembly app using Roslyn to dynamically evaluate and score C# LINQ queries.",
    link: "https://github.com/EricOrrDev/LINQCod"
  },
  {
    title: "TryCatch Rain",
    subtitle: "A mobile weather application created for a mobile development class.",
    link: "https://github.com/EricOrrDev/cs492-weather-app"
  },
  {
    title: "MText++",
    subtitle: "A simple tool for finding and incrementing numbers in MText strings in AutoCAD.",
    link: "https://github.com/EricOrrDev/Mtext_plusplus"
  },
  {
    title: "WARGAMES",
    subtitle: "A C game simulating the Prisoner's Dilemma in the theme of the movie WarGames.",
    link: "https://github.com/EricOrrDev/WARGAMES"
  },
  {
    title: "Portfolio Website",
    subtitle: "The original personal portfolio and source of this site's content.",
    link: "https://github.com/EricOrrDev/EricOrrDev.io"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-industrial-black text-white relative">
      <Navbar />
      <AbstractBackground />

      <main className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-white leading-tight">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-industrial-black/95 rounded-2xl border border-slate-grey/30 hover:border-white/50 transition-all shadow-lg backdrop-blur-sm group flex flex-col justify-between h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white group-hover:text-white transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-white leading-relaxed mt-2 italic opacity-90">
                  {project.subtitle}
                </p>
              </CardHeader>
              <CardFooter className="mt-auto pt-6">
                <Link 
                  href={project.link} 
                  target="_blank" 
                  className="flex items-center text-white font-semibold hover:underline border border-white/20 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  View on GitHub <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
