import Link from "next/link";
import AbstractBackground from "@/components/abstract-background";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getSortedPostsData } from "@/lib/blog";

export default async function BlogPage() {
  const allPostsData = await getSortedPostsData();

  return (
    <div className="min-h-screen bg-industrial-black text-off-white relative overflow-hidden">
      <AbstractBackground />
      <Navbar />
      <main className="px-6 py-20 max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-white">Insights & Thoughts</h1>
        <div className="grid gap-8">
          {allPostsData.map(({ slug, date, title, excerpt }) => (
            <Link key={slug} href={`/blog/${slug}`} className="block group">
              <div className="bg-industrial-black/90 rounded-2xl p-8 border border-slate-grey/30 hover:border-engineering-red transition-all shadow-lg backdrop-blur-sm group-hover:transform group-hover:scale-[1.01]">
                <p className="text-sm text-neutral-grey mb-2">{date}</p>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-engineering-red transition-colors text-white">{title}</h2>
                <p className="text-neutral-grey leading-relaxed">{excerpt}</p>
                <div className="mt-4 flex items-center text-engineering-red font-semibold">
                  Read More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
