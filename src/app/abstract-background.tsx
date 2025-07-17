"use client";
import dynamic from "next/dynamic";
import React from "react";

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

  const setup = (p5: any, canvasParentRef: any) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(
      canvasParentRef
    );
    // Generate random shapes once
    if (shapesRef.current.length === 0) {
      for (let i = 0; i < amountOfObjects.current; i++) {
        const typeRand = p5.int(p5.random(3));
        const type =
          typeRand === 0 ? "box" : typeRand === 1 ? "sphere" : "cylinder";
        shapesRef.current.push({
          type,
          x: p5.random(-400, 400),
          y: p5.random(-250, 250),
          z: p5.random(-300, 300),
          w: p5.random(60, 180),
          h: p5.random(60, 180),
          d: p5.random(60, 180),
        });
      }
    }
  };

  const draw = (p5: any) => {
    p5.clear();
    p5.background(15);

    const angle = p5.frameCount * 0.001;

    p5.push();
    p5.rotateY(angle);

    // Draw random construction lines in 3D space (these can stay random if you want the "sketch" effect)
    for (let i = 0; i < 30; i++) {
      p5.push();
      p5.stroke(255, 40);
      p5.strokeWeight(p5.random(0.5, 2));
      p5.line(
        p5.random(-600, 600),
        p5.random(-400, 400),
        p5.random(-400, 400),
        p5.random(-600, 600),
        p5.random(-400, 400),
        p5.random(-400, 400)
      );
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

  const windowResized = (p5: any) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
};

export default AbstractBackground;
