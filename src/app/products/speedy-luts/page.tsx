import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AbstractBackground from "@/components/abstract-background";

export default function SpeedyLUTsPage() {
  return (
    <div>
      <Navbar />
      <AbstractBackground />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <div className="text-off-white bg-industrial-black/90 rounded-3xl shadow-lg p-10 text-center backdrop-blur-sm max-w-4xl w-full space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">SpeedyLUTs</h1>
          <p className="max-w-xl mx-auto text-lg text-neutral-grey">
            Disposable, precomputed lookup tables for .NET. Load a dataset, copy
            the range you need, dispose. Trade minutes of compute for a moment
            of memory.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <Feature
              title="Fast by Design"
              desc="Embedded binary blobs + unmanaged buffers. Deterministic load → copy → dispose."
            />
            <Feature
              title="Simple API"
              desc={`using var pre = SpeedyLUTs.LoadIntegers(squares: true, cubes: true, sqrt16: true)`}
            />
            <Feature
              title="Extensible Packs"
              desc="Start with squares, cubes, sqrt16, primes. Add domain packs later without bloat."
            />
          </div>

          <CodeBlock>
            {`// Install
> dotnet add package SpeedyLUTs
> dotnet add package SpeedyLUTs.Data.Basic

// Use
using var pre = SpeedyLUTs.LoadIntegers(squares: true, cubes: true, sqrt16: true);
int[] squares = pre.Squares.CopyRange(0, 255);
int[] cubes   = pre.Cubes.CopyRange(10, 20);
ushort[] rt   = pre.SqrtU16.CopyRange(0, 100);
// pre.Dispose() handled by 'using'`}
          </CodeBlock>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left text-sm text-neutral-grey">
            <li>
              • Binary format with magic/version/type and optional SHA-256
              integrity
            </li>
            <li>
              • Unmanaged memory backing for deterministic release (no LOH
              thrash)
            </li>
            <li>
              • Optional local disk cache and chunked loading for huge sets
              (e.g., primes)
            </li>
            <li>
              • Float roots with accuracy knobs: Hardware, Rel1e-6, ULP2, ULP1
            </li>
          </ul>

          <div className="text-sm text-neutral-grey/90">
            <p>
              Coming soon:{" "}
              <span className="text-off-white">SpeedyLUTs.Maths.Trig</span>,
              <span className="text-off-white"> .Kernels</span>, and optional
              large-data packs (primes by index, binomials, more).
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-industrial-black/60 rounded-2xl p-4 border border-white/5">
      <h3 className="font-semibold text-off-white mb-1">{title}</h3>
      <p className="text-neutral-grey text-sm">{desc}</p>
    </div>
  );
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="text-left bg-black/70 rounded-2xl p-4 overflow-x-auto border border-white/10">
      <code>{children}</code>
    </pre>
  );
}
