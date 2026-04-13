import Navbar from "@/components/navbar";
import AbstractBackground from "@/components/abstract-background";

export default function About() {
	return (
		<div>
			<Navbar />
			<AbstractBackground />
			<div className="min-h-screen flex flex-col items-center justify-center bg-industrial-black/95 text-off-white">
				<div className="bg-industrial-black/80 rounded-4xl shadow-lg p-10 text-center backdrop-blur-sm">
					<h1 className="text-4xl font-bold mb-4">About Spatial Automata</h1>
					<p className="max-w-2xl text-lg text-neutral-grey text-left">
						I&apos;m a software engineer and researcher focused on the intersection of 
						computational geometry, AEC (Architecture, Engineering, and Construction) 
						automation, and AI safety. 
						<br />
						<br />
						My work revolves around building deterministic systems for the physical 
						world. I believe that as we move towards AI-driven automation in 
						complex physical environments, we need rigorous mathematical frameworks 
						to ensure safety and reliability.
						<br />
						<br />
						Through Spatial Automata, I explore how we can use hierarchical state 
						machines, spatial computing, and advanced geometry to bridge the 
						gap between non-deterministic AI and high-value physical hardware.
						<br />
						<br />
						When I&apos;m not coding, you can find me diving into the latest 
						developments in computational design or exploring the future of 
						spatial interfaces.
					</p>
				</div>
			</div>
		</div>
	);
}
