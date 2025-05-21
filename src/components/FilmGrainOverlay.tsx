
import { useEffect, useRef } from "react";
import p5 from "p5";

interface FilmGrainOverlayProps {
  opacity?: number;
  speed?: number;
}

const FilmGrainOverlay = ({ opacity = 0.05, speed = 0.8 }: FilmGrainOverlayProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create p5 instance
    const sketch = (p: p5) => {
      let grainCanvas: p5.Graphics;

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.position(0, 0);
        canvas.style('z-index', '1');
        canvas.style('pointer-events', 'none');
        
        grainCanvas = p.createGraphics(p.windowWidth, p.windowHeight);
      };

      p.draw = () => {
        p.clear();
        
        // Draw grain effect
        grainCanvas.loadPixels();
        
        for (let i = 0; i < grainCanvas.width; i += 3) {
          for (let j = 0; j < grainCanvas.height; j += 3) {
            const noiseValue = p.noise(i * 0.01, j * 0.01, p.frameCount * 0.01 * speed) * 255;
            const grainValue = p.map(noiseValue, 0, 255, 0, opacity * 255);
            
            grainCanvas.set(i, j, p.color(255, grainValue));
          }
        }
        
        grainCanvas.updatePixels();
        p.image(grainCanvas, 0, 0);
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        grainCanvas = p.createGraphics(p.windowWidth, p.windowHeight);
      };
    };

    p5Instance.current = new p5(sketch, containerRef.current);

    // Cleanup
    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
      }
    };
  }, [opacity, speed]);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />;
};

export default FilmGrainOverlay;
