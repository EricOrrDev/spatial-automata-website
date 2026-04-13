import { getPostData } from "@/lib/blog";
import AbstractBackground from "@/components/abstract-background";
import Navbar from "@/components/navbar";
import Link from "next/link";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <div className="min-h-screen bg-industrial-black/95 text-off-white relative overflow-hidden">
      <AbstractBackground />
      <Navbar />
      <main className="px-6 py-20 max-w-4xl mx-auto relative z-10">
        <Link 
          href="/blog" 
          className="text-engineering-red hover:underline mb-8 inline-block"
        >
          ← Back to Blog
        </Link>
        <div className="bg-industrial-black/80 rounded-3xl md:rounded-4xl shadow-lg p-8 md:p-12 backdrop-blur-sm">
          <article className="prose prose-invert prose-red max-w-none">
            <header className="mb-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
                {postData.title}
              </h1>
              <p className="text-neutral-grey text-lg italic">
                Published on {postData.date}
              </p>
            </header>
            
            <div 
              className="blog-content leading-relaxed text-neutral-grey"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
            />
          </article>
        </div>
      </main>
    </div>
  );
}
