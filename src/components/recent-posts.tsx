import Link from "next/link";
import { getSortedPostsData } from "@/lib/blog";
import { Card } from "./ui/card";

export default async function RecentPosts() {
  const allPostsData = await getSortedPostsData();
  const recentPosts = allPostsData.slice(0, 3);

  return (
    <section className="mt-20">
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-3xl font-bold text-white">Recent Posts</h2>
        <Link href="/blog" className="text-engineering-red hover:underline font-semibold">
          View All Posts →
        </Link>
      </div>
      <div className="grid gap-6">
        {recentPosts.map(({ slug, date, title, excerpt }) => (
          <Link key={slug} href={`/blog/${slug}`} className="block group">
            <Card className="bg-industrial-black/90 rounded-2xl p-8 border border-slate-grey/30 hover:border-engineering-red transition-all shadow-lg backdrop-blur-sm group-hover:transform group-hover:scale-[1.01] text-white">
              <p className="text-sm text-neutral-grey mb-2">{date}</p>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-engineering-red transition-colors text-white">
                {title}
              </h3>
              <p className="text-neutral-grey leading-relaxed">{excerpt}</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
