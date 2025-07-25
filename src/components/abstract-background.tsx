"use client";
import dynamic from "next/dynamic";
import React from "react";
import type p5 from "p5";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

type Shape = {
  type: "box" | "sphere" | "cylinder";
  x: number;
  y: number;
  z: number;
  w: number;
  h: number;
  d: number;
};

type ConstructionLine = {
  x1: number;
  y1: number;
  z1: number;
  x2: number;
  y2: number;
  z2: number;
  strokeWeight: number;
  opacity: number;
};

const AbstractBackground: React.FC = () => {
  const amountOfObjectsLowerBound = 20;
  const amountOfObjectsUpperBound = 35;
  const amountOfObjects = React.useRef<number>(
    Math.floor(
      Math.random() * (amountOfObjectsUpperBound - amountOfObjectsLowerBound) +
        amountOfObjectsLowerBound
    )
  );

  // Store shapes in a ref so they persist across frames
  const shapesRef = React.useRef<Shape[]>([]);

  // Store construction lines in a ref so they persist across frames
  const constructionLinesRef = React.useRef<ConstructionLine[]>([]);

  const setup = (p5Instance: p5, canvasParentRef: Element) => {
    p5Instance
      .createCanvas(
        p5Instance.windowWidth,
        p5Instance.windowHeight,
        p5Instance.WEBGL
      )
      .parent(canvasParentRef);

    // Generate random shapes once
    if (shapesRef.current.length === 0) {
      for (let i = 0; i < amountOfObjects.current; i++) {
        const typeRand = p5Instance.int(p5Instance.random(3));
        const type =
          typeRand === 0 ? "box" : typeRand === 1 ? "sphere" : "cylinder";
        shapesRef.current.push({
          type,
          x: p5Instance.random(-400, 400),
          y: p5Instance.random(-250, 250),
          z: p5Instance.random(-300, 300),
          w: p5Instance.random(60, 180),
          h: p5Instance.random(60, 180),
          d: p5Instance.random(60, 180),
        });
      }
    }

    // Generate persistent construction lines once
    if (constructionLinesRef.current.length === 0) {
      for (let i = 0; i < 30; i++) {
        constructionLinesRef.current.push({
          x1: p5Instance.random(-600, 600),
          y1: p5Instance.random(-400, 400),
          z1: p5Instance.random(-400, 400),
          x2: p5Instance.random(-600, 600),
          y2: p5Instance.random(-400, 400),
          z2: p5Instance.random(-400, 400),
          strokeWeight: p5Instance.random(0.5, 2),
          opacity: p5Instance.random(20, 60),
        });
      }
    }
  };

  const draw = (p5: p5) => {
    p5.clear();
    p5.background(15);
    const angleSpeed = 0.0005; // Adjust speed as desired
    const angle = p5.frameCount * angleSpeed;
    p5.push();
    p5.rotateY(angle);

    // Draw persistent construction lines
    for (const line of constructionLinesRef.current) {
      p5.push();
      p5.stroke(255, line.opacity);
      p5.strokeWeight(line.strokeWeight);
      p5.line(line.x1, line.y1, line.z1, line.x2, line.y2, line.z2);
      p5.pop();
    }

    // Draw persistent 3D wireframe shapes
    for (const shape of shapesRef.current) {
      p5.push();
      p5.noFill();
      p5.stroke(255, 120);
      p5.strokeWeight(1.5);
      p5.translate(shape.x, shape.y, shape.z);
      if (shape.type === "box") {
        p5.box(shape.w, shape.h, shape.d);
      } else if (shape.type === "sphere") {
        p5.sphere(shape.w / 2, 12, 8);
      } else {
        p5.cylinder(shape.w / 2, shape.h, 16, 1, true, true);
      }
      p5.pop();
    }
    p5.pop();
  };

  const windowResized = (p5Instance: p5) => {
    p5Instance.resizeCanvas(p5Instance.windowWidth, p5Instance.windowHeight);
  };

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none opacity-40">
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
};

export default AbstractBackground;
