import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function HeroSection() {
	return (
		<Card className="bg-industrial-black/90 rounded-3xl shadow-lg p-10 text-center backdrop-blur-sm">
			<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
				Engineering for the Physical World.
			</h1>
			<p className="text-xl text-white mb-8 max-w-2xl mx-auto">
				I&apos;m a software engineer exploring the intersection of computational 
				geometry, AEC automation, and AI safety. This blog is a space for my 
				thoughts on building deterministic systems, automating complex 
				engineering workflows, and the future of spatial computing.
			</p>
			<div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
				<Button name="ReadBlogButton" className="px-6 py-3" asChild>
					<Link href="/blog">Read the Blog</Link>
				</Button>
				<Button name="LearnMoreButton" variant="outline" className="px-6 py-3" asChild>
					<Link href="/about">About Me</Link>
				</Button>
			</div>
		</Card>
	);
}
