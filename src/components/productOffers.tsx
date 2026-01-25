import { Card } from "./ui/card";

export default function ProductOffers() {
  return (
    <Card className="mt-20 bg-industrial-black/90 rounded-3xl shadow-lg p-10 text-left backdrop-blur-sm text-white">
      <h2 className="text-2xl font-bold text-white text-center">
        Our Products
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-10 text-left text-white">
          <h3 className="text-2xl font-bold mb-2 text-white">CHASM.NET</h3>
          <p className="text-white mb-2">
            Build composable, declarative, high-level state machines for .NET
            applications. Go from diagram to code in minutes, not hours.
          </p>
          <a href="/products/CHASM.NET" className="text-white hover:underline">
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
        <div className="p-10 text-left text-white">
          <h3 className="text-2xl font-bold mb-2 text-blueprint-blue">
            Axiom Factory
          </h3>
          <p className="text-white mb-2">
            AI safety middleware for industrial physical hardware. Built using CHASM.NET, Axiom Factory allows engineers to use hierarchical state machines to ensure safety and prevent AI from taking unsafe actions, providing a new layer of lock-out tag-out for the AI era.
          </p>
          <a
            href="/products/axiom-factory"
            className="text-white hover:underline"
          >
            Learn more →
          </a>
        </div>
      </div>
    </Card>
  );
}
