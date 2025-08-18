import { Card } from "./ui/card";

export default function ProductOffers() {
  return (
    <Card className="mt-20 bg-industrial-black/90 rounded-3xl shadow-lg p-10 text-left backdrop-blur-sm text-white">
      <h2 className="text-2xl font-bold text-white text-center">
        Planned Products
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-10 text-left text-white">
          <h3 className="text-2xl font-bold mb-2 text-blueprint-blue">
            SpeedyLUTs
          </h3>
          <p className="text-white mb-2">
            Disposable precomputed lookup tables for .NET. Load massive datasets
            like primes, squares, and square roots in milliseconds, copy the
            ranges you need, then drop them from memory instantly.
          </p>
          <a href="/products/speedyluts" className="text-white hover:underline">
            Learn more →
          </a>
        </div>

        <div className="p-10 text-left text-white">
          <h3 className="text-2xl font-bold mb-2 text-blueprint-blue">
            MText++
          </h3>
          <p className="text-white mb-2">
            Instantly renumber lots or sheets—no more copy-paste marathons.
            MText++ speeds through your MText and applies increments exactly the
            way you want.
          </p>
          <a
            href="/products/mtextplusplus"
            className="text-white hover:underline"
          >
            Learn more →
          </a>
        </div>

        <div className="p-10 text-left text-white">
          <h3 className="text-2xl font-bold mb-2 text-blueprint-blue">
            Block Captain
          </h3>
          <p className="text-white mb-2">
            A modern CAD block manager for teams. Upload, organize, search, and
            version your blocks in the cloud—no more lost files or outdated
            standards.
          </p>
          <a
            href="/products/block-captain"
            className="text-white hover:underline"
          >
            Learn more →
          </a>
        </div>
        <div className="p-10 text-left text-white">
          <h3 className="text-2xl font-bold mb-2 text-white">Redline Relay</h3>
          <p className="text-white mb-2">
            AI-powered agent-to-agent SaaS: reads Bluebeam redlines, summarizes
            context, and delivers actionable insights for your email and project
            management AIs.
          </p>
          <a
            href="/products/redline-relay"
            className="text-white hover:underline"
          >
            Learn more →
          </a>
        </div>
        <div className="p-10 text-left text-white">
          <h3 className="text-2xl font-bold mb-2 text-white">ExcellentDB</h3>
          <p className="text-white mb-2">
            Transform your Excel chaos into a real database. Upload
            spreadsheets, let our LLM infer the schema, and get a ready-to-use
            Postgres DB with S3 file support.
          </p>
          <a
            href="/products/excellentdb"
            className="text-white hover:underline"
          >
            Learn more →
          </a>
        </div>
        <div className="p-10 text-left text-white">
          <h3 className="text-2xl font-bold mb-2 text-white">CodeCheck</h3>
          <p className="text-white mb-2">
            Automated building code compliance for Revit. Our state machine
            reviews your models and flags issues before they become costly
            mistakes.
          </p>
          <a href="/products/codecheck" className="text-white hover:underline">
            Learn more →
          </a>
        </div>
      </div>
    </Card>
  );
}
