import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function HeroSection() {
	return (
		<Card className="bg-industrial-black/98 rounded-3xl shadow-lg p-10 text-center backdrop-blur-md">
			<h1 className="text-5xl md:text-5xl font-bold mb-6 leading-tight text-white">
				Friends, Romans, countrymen, lend me your ears
			</h1>
			<p className="text-xl text-white mb-8 max-w-2xl mx-auto">
				I&apos;m a CS student, and this is my blog about software engineering,
				computational geometry, and AEC automation
			</p>
			<div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
				<Button className="px-6 py-3" asChild>
					<Link href="/blog">Read the Blog</Link>
				</Button>
				<Button
					variant="outline"
					className="px-6 py-3"
					asChild
				>
					<Link href="/about">About Me</Link>
				</Button>
			</div>
		</Card>
	);
}
