"use client";
import dynamic from "next/dynamic";
import React from "react";

const Sketch = dynamic(() => import("react-p5").then(mod => mod.default), { ssr: false });

const AbstractBackground: React.FC = () => {
  const setup = (p5: any, canvasParentRef: any) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(canvasParentRef);
    p5.noLoop();
  };

  const draw = (p5: any) => {
    p5.clear();
    p5.background(15);

    // Set up camera
    p5.orbitControl(2, 1, 0.1); // allow mouse drag to orbit
    p5.rotateY(p5.millis() * 0.0001); // slow auto-rotation

    // Draw random construction lines in 3D space
    for (let i = 0; i < 30; i++) {
      p5.push();
      p5.stroke(255, 40);
      p5.strokeWeight(p5.random(0.5, 2));
      p5.line(
        p5.random(-600, 600), p5.random(-400, 400), p5.random(-400, 400),
        p5.random(-600, 600), p5.random(-400, 400), p5.random(-400, 400)
      );
      p5.pop();
    }

    // Draw random 3D wireframe shapes
    for (let i = 0; i < 10; i++) {
      p5.push();
      p5.noFill();
      p5.stroke(255, 120);
      p5.strokeWeight(p5.random(1, 2));
      p5.translate(
        p5.random(-400, 400),
        p5.random(-250, 250),
        p5.random(-300, 300)
      );
      const w = p5.random(60, 180);
      const h = p5.random(60, 180);
      const d = p5.random(60, 180);
      const shapeType = p5.int(p5.random(3));
      if (shapeType === 0) {
        p5.box(w, h, d);
      } else if (shapeType === 1) {
        p5.sphere(w / 2, 12, 8);
      } else {
        p5.cylinder(w / 2, h, 16, 1, true, true);
      }
      p5.pop();
    }
  };

  const windowResized = (p5: any) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    p5.redraw();
  };

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
};

export default AbstractBackground;