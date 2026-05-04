import Navbar from "@/components/navbar";
import AbstractBackground from "@/components/abstract-background";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
	return (
		<div className="min-h-screen bg-industrial-black text-white relative">
			<Navbar />
			<AbstractBackground />

			<main className="max-w-4xl mx-auto px-6 py-20 relative z-10 space-y-12">
				{/* Bio Section */}
				<section className="bg-industrial-black/80 rounded-3xl md:rounded-4xl shadow-lg p-8 md:p-12 backdrop-blur-sm border border-slate-grey/30">
					<h1 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
						About Me
					</h1>
					<div className="prose prose-invert prose-red max-w-none text-white text-lg space-y-6">
						<p>
							In high school, I created my first program on a TI-83 calculator
							during Algebra 2; a class I struggled with because I was more
							interested in learning TI-BASIC than completing homework. That
							first attempt at programming was a simple quadratic formula
							calculator that crashed whenever it encountered imaginary numbers.
						</p>
						<p>
							As my interest in coding grew, I took every programming class my
							school offered and eventually became the school&apos;s webmaster.
							Alongside this, I discovered a passion for drafting and pursued an
							associate degree in the field. However, during my short stint
							working as a mechanical designer, I realized I spent most of my
							time scripting to overcome the limitations of existing CAD tools,
							in particular AutoCAD 2004.
						</p>
						<p>
							I&apos;m now a CS student focused on the intersection of topics
							such as computational geometry, AEC (Architecture, Engineering,
							and Construction) automation, parallel programming, and small
							purpose-built AI. Some of my work revolves around building
							deterministic systems for the physical world. I believe that as we
							move towards AI-driven automation in complex physical
							environments, we need rigorous mathematical frameworks to ensure
							safety and reliability.
						</p>
						<p>
							This experience showed me that my true passion was not just in
							design but in creating better tools for design. I chose to return
							to college at Oregon State University - Cascades to focus on
							becoming a programmer who can contribute to the next generation of
							CAD tooling.
						</p>
						<p>
							Through projects within Spatial Automata, I explore how we can use
							hierarchical state machines, Tsetlin machines, spatial computing,
							and advanced geometry to bridge the gap between non-deterministic
							AI and high impact projects in the real world. My goal is to
							develop tools that empower designers and transform the way we
							approach complex problems.
						</p>
						<p>
							I&apos;m deeply inspired by computational, parametric, and
							generative design and draw influence from visionaries like Neri
							Oxman and Buckminster Fuller. When I&apos;m not coding, you can
							find me diving into the latest developments in computational
							design or exploring the future of spatial interfaces.
						</p>
					</div>
				</section>

				{/* Skills Section */}
				<section className="space-y-6">
					<h2 className="text-3xl font-bold text-white px-2">Skills</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<Card className="bg-industrial-black/60 border-slate-grey/30 backdrop-blur-sm">
							<CardHeader>
								<CardTitle className="text-white">Languages</CardTitle>
							</CardHeader>
							<CardContent className="text-white">
								<ul className="grid grid-cols-2 gap-2">
									<li>C#</li>
									<li>C</li>
									<li>C++</li>
									<li>HTML / CSS</li>
									<li>TypeScript</li>
									<li>Python</li>
									<li>Ruby</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="bg-industrial-black/60 border-slate-grey/30 backdrop-blur-sm">
							<CardHeader>
								<CardTitle className="text-white">Databases & ORMs</CardTitle>
							</CardHeader>
							<CardContent className="text-white">
								<ul className="grid grid-cols-2 gap-2">
									<li>PostgreSQL</li>
									<li>MySQL</li>
									<li>SQLite</li>
									<li>MongoDB</li>
									<li>Mongoose</li>
									<li>Entity Framework</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="bg-industrial-black/60 border-slate-grey/30 backdrop-blur-sm">
							<CardHeader>
								<CardTitle className="text-white">Web</CardTitle>
							</CardHeader>
							<CardContent className="text-white">
								<ul className="grid grid-cols-2 gap-2">
									<li>Node.js</li>
									<li>Express</li>
									<li>Next.js</li>
									<li>React</li>
									<li>shadcn/ui</li>
									<li>Tailwind CSS</li>
									<li>WCAG</li>
									<li>.NET</li>
									<li>REST APIs</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="bg-industrial-black/60 border-slate-grey/30 backdrop-blur-sm">
							<CardHeader>
								<CardTitle className="text-white">Tools & Environments</CardTitle>
							</CardHeader>
							<CardContent className="text-white">
								<ul className="grid grid-cols-2 gap-2">
									<li>Linux</li>
									<li>Docker</li>
									<li>Windows</li>
									<li>Git / GitHub</li>
									<li>GitHub Actions</li>
									<li>Azure</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="bg-industrial-black/60 border-slate-grey/30 backdrop-blur-sm">
							<CardHeader>
								<CardTitle className="text-white">Parallel</CardTitle>
							</CardHeader>
							<CardContent className="text-white">
								<ul className="grid grid-cols-2 gap-2">
									<li>OpenMP</li>
									<li>CUDA C++</li>
									<li>ILGPU</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="bg-industrial-black/60 border-slate-grey/30 backdrop-blur-sm">
							<CardHeader>
								<CardTitle className="text-white">Drafting & Design</CardTitle>
							</CardHeader>
							<CardContent className="text-white">
								<ul className="grid grid-cols-2 gap-2">
									<li>AutoCAD</li>
									<li>Inventor</li>
									<li>Microstation</li>
									<li>SolidWorks</li>
									<li>Revit</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Education Section */}
				<section className="space-y-6">
					<h2 className="text-3xl font-bold text-white px-2">Education</h2>
					<Card className="bg-industrial-black/60 border-slate-grey/30 backdrop-blur-sm">
						<CardHeader>
							<CardTitle className="text-white">
								Bachelors of Science in Computer Science
							</CardTitle>
							<p className="text-white font-medium opacity-90">
								Oregon State University - Cascades, Bend Oregon
							</p>
						</CardHeader>
						<CardContent className="text-white">
							<p>September 2024 - Present</p>
						</CardContent>
					</Card>
				</section>

				{/* Experience Section */}
				<section className="space-y-6">
					<h2 className="text-3xl font-bold text-white px-2">Experience</h2>
					<div className="space-y-4">
						<ExperienceItem
							title="Founder"
							company="Spatial Automata"
							location="Bend Oregon"
							period="August 2025 - Present"
							points={[
								"Developing workflow automation and productivity tools for CAD and AEC professionals.",
								"Building software products with a focus on interoperability, efficiency, and client-ready integrations.",
								"Managing technical branding and public-facing site.",
							]}
						/>
						<ExperienceItem
							title="Electrician's Assistant"
							company="Westech Electric"
							location="Bend Oregon"
							period="June 2023 - Present"
							points={[
								"Provided technical and administrative support for payroll, permits, and technology.",
								"Communicated with customers regarding project specifics and technical requirements.",
								"Managed acquisition, delivery, and on-site handling of materials and equipment.",
								"Installed and diagnosed electrical equipment in commercial and residential settings.",
								"Operated heavy equipment and specialized hand tools.",
							]}
						/>
						<ExperienceItem
							title="Tray Aide then Cook"
							company="Santiam Hospital"
							location="Stayton Oregon"
							period="May 2017 - October 2019"
							points={[
								"Cooked a wide variety of therapeutic meals for a 40 bed hospital.",
								"Supervised and trained staff for proficiency in cooking and kitchen safety.",
								"Collaborated with patients and families to tailor meals to specific dietary needs.",
								"Catered events both on and off hospital campus, managing logistics and service.",
							]}
						/>
						<ExperienceItem
							title="Checker"
							company="Safeway"
							location="Stayton Oregon"
							period="May 2014 - May 2017"
							points={[
								"Operated a point-of-sales system to be top 20 in district for speed and productivity.",
								"Defused hostile customer interactions, including high-stress situations involving threats.",
								"Led and delegated resolutions of diverse and unexpected operational challenges.",
							]}
						/>
					</div>
				</section>
			</main>
		</div>
	);
}

function ExperienceItem({
	title,
	company,
	location,
	period,
	points,
}: {
	title: string;
	company: string;
	location: string;
	period: string;
	points: string[];
}) {
	return (
		<Card className="bg-industrial-black/60 border-slate-grey/30 backdrop-blur-sm">
			<CardHeader>
				<div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
					<div>
						<CardTitle className="text-white text-xl">{title}</CardTitle>
						<p className="text-white font-medium opacity-90">
							{company} — {location}
						</p>
					</div>
					<p className="text-white text-sm whitespace-nowrap">{period}</p>
				</div>
			</CardHeader>
			<CardContent className="text-white">
				<ul className="list-disc list-inside space-y-2">
					{points.map((point, i) => (
						<li key={i}>{point}</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
}
