declare module "react-p5" {
  import type p5 from "p5";
  import { ComponentType } from "react";

  export interface SketchProps {
    setup?: (p: p5, canvasParentRef: Element) => void;
    draw?: (p: p5) => void;
    windowResized?: (p: p5) => void;
  }

  const Sketch: ComponentType<SketchProps>;
  export default Sketch;
}
