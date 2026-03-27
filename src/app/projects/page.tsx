import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AbstractBackground from "@/components/abstract-background";

export default function Projects() {
	return (
		<div className="min-h-screen bg-industrial-black text-off-white relative overflow-hidden">
			<AbstractBackground />
			<Navbar />
			<main className="px-6 py-20 max-w-4xl mx-auto relative z-10">
				<h1 className="text-4xl md:text-5xl font-bold mb-10 text-white">Projects</h1>
				<div className="bg-industrial-black/90 rounded-2xl p-10 border border-slate-grey/30 backdrop-blur-sm text-center">
					<p className="text-xl text-neutral-grey mb-8">
						I&apos;m currently documenting some of my key projects in computational geometry, 
						AEC automation, and AI safety. Check back soon for updates!
					</p>
					<div className="grid md:grid-cols-2 gap-6 text-left">
						<div className="p-6 border border-slate-grey/20 rounded-xl bg-slate-grey/5">
							<h2 className="text-2xl font-bold mb-3 text-white">CHASM.NET</h2>
							<p className="text-neutral-grey">
								A declarative state machine library for .NET focused on building 
								deterministic and verifiable industrial systems.
							</p>
						</div>
						<div className="p-6 border border-slate-grey/20 rounded-xl bg-slate-grey/5">
							<h2 className="text-2xl font-bold mb-3 text-white">Axiom Factory</h2>
							<p className="text-neutral-grey">
								Safety middleware for industrial hardware, providing a bridge 
								between non-deterministic AI and physical reality.
							</p>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
