import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AbstractBackground from "@/components/abstract-background";

export default function About() {
	return (
		<div>
			<Navbar />
			<AbstractBackground />
			<div className="min-h-screen flex flex-col items-center justify-center bg-industrial-black/90 text-off-white">
				<div className="bg-industrial-black/50 rounded-4xl shadow-lg p-10 text-center backdrop-blur-sm">
					<h1 className="text-4xl font-bold mb-4">About Spatial Automata</h1>
					<p className="max-w-2xl text-lg text-neutral-grey">
						Spatial Automata is a foundational industrial safety infrastructure
						company. Our mission is to solve the Hallucination Problem in
						physical automation by ensuring AI agents operate within
						mathematically verifiable guardrails.
						<br />
						<br />
						We are building the safety layer for AI-driven industrial systems.
						Our flagship product, CHASM.NET, provides a deterministic &quotair
						gap&quot between non-deterministic AI and high-value physical
						hardware, ensuring that AI agents operate within mathematically
						verifiable guardrails.
						<br />
						<br />
						At Spatial Automata, we build the deterministic foundations for a
						future where AI can safely and reliably control the physical world.
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
