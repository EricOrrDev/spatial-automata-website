import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function HeroSection() {
	return (
		<Card className="bg-industrial-black/90 rounded-3xl shadow-lg p-10 text-center backdrop-blur-sm">
			<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
				Deterministic Safety for Industrial AI.
			</h1>
			<p className="text-xl text-white mb-8 max-w-2xl mx-auto">
				Spatial Automata is building the safety layer for AI-driven industrial
				systems. Our flagship product, CHASM.NET, provides a deterministic gap
				between non-deterministic AI and high-value physical hardware, ensuring
				that AI agents operate within mathematically verifiable guardrails.
			</p>
			<div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
				<Input
					type="email"
					placeholder="Enter your email"
					className="px-4 py-3 rounded bg-slate-grey text-off-white placeholder-neutral-grey border border-neutral-grey focus:border-engineering-red focus:outline-none flex-1 w-full sm:w-auto"
				/>
				<Button name="LearnMoreButton" className="px-6 py-3">
					Learn More
				</Button>
			</div>
		</Card>
	);
}
