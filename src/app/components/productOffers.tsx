export default function ProductOffers() {
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold text-blueprint-blue text-center">
        Planned Products
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-industrial-black/90 rounded-3xl shadow-lg p-10 text-left backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-2 text-blueprint-blue">
            Block Captain
          </h3>
          <p className="text-neutral-grey mb-2">
            A modern CAD block manager for teams. Upload, organize, search, and
            version your blocks in the cloud—no more lost files or outdated
            standards.
          </p>
          <a
            href="/products/block-captain"
            className="text-engineering-red hover:underline"
          >
            Learn more →
          </a>
        </div>
        <div className="bg-industrial-black/90 rounded-3xl shadow-lg p-10 text-left backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-2 text-blueprint-blue">
            Redline Relay
          </h3>
          <p className="text-neutral-grey mb-2">
            AI-powered agent-to-agent SaaS: reads Bluebeam redlines, summarizes
            context, and delivers actionable insights for your email and project
            management AIs.
          </p>
          <a
            href="/products/redline-relay"
            className="text-engineering-red hover:underline"
          >
            Learn more →
          </a>
        </div>
        <div className="bg-industrial-black/90 rounded-3xl shadow-lg p-10 text-left backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-2 text-blueprint-blue">
            ExcellentDB
          </h3>
          <p className="text-neutral-grey mb-2">
            Transform your Excel chaos into a real database. Upload
            spreadsheets, let our LLM infer the schema, and get a ready-to-use
            Postgres DB with S3 file support.
          </p>
          <a
            href="/products/excellentdb"
            className="text-engineering-red hover:underline"
          >
            Learn more →
          </a>
        </div>
        <div className="bg-industrial-black/90 rounded-3xl shadow-lg p-10 text-left backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-2 text-blueprint-blue">
            CodeCheck
          </h3>
          <p className="text-neutral-grey mb-2">
            Automated building code compliance for Revit. Our state machine
            reviews your models and flags issues before they become costly
            mistakes.
          </p>
          <a
            href="/products/codecheck"
            className="text-engineering-red hover:underline"
          >
            Learn more →
          </a>
        </div>
      </div>
    </div>
  );
}
