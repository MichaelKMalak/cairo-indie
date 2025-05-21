
import { useEffect, useRef } from 'react';
import p5 from 'p5';

const TheatreTicketsAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let sketch: p5;

    // Only create the sketch if we're in the browser
    if (typeof window !== 'undefined') {
      sketch = new p5((p) => {
        // Array to hold ticket objects
        const tickets: Ticket[] = [];
        const ticketColors = ['#f8e9c6', '#f5e1b9', '#ede0cb', '#f2dbc4'];
        
        // Define ticket class
        class Ticket {
          x: number;
          y: number;
          rotation: number;
          size: number;
          speed: number;
          color: string;
          opacity: number;
          
          constructor() {
            this.x = p.random(p.width);
            this.y = p.random(-100, -10);
            this.rotation = p.random(-0.2, 0.2);
            this.size = p.random(15, 30);
            this.speed = p.random(0.5, 1.5);
            this.color = p.random(ticketColors);
            this.opacity = p.random(0.2, 0.4);
          }
          
          update() {
            this.y += this.speed;
            this.x += p.sin(this.y / 100) * 0.3;
            this.rotation += p.random(-0.01, 0.01);
            
            // Reset when off bottom screen
            if (this.y > p.height + 50) {
              this.y = p.random(-100, -10);
              this.x = p.random(p.width);
            }
          }
          
          display() {
            p.push();
            p.translate(this.x, this.y);
            p.rotate(this.rotation);
            p.noStroke();
            p.fill(p.color(this.color + p.hex(Math.floor(this.opacity * 255), 2)));
            
            // Draw ticket
            p.rect(-this.size / 2, -this.size / 4, this.size, this.size / 2, 3);
            
            // Draw ticket perforations
            p.stroke(p.color('#ffffff' + p.hex(Math.floor(this.opacity * 255), 2)));
            p.strokeWeight(0.5);
            const perfY = -this.size / 4;
            for (let i = -this.size / 2 + 3; i < this.size / 2; i += 3) {
              p.point(i, perfY);
            }
            p.pop();
          }
        }
        
        p.setup = () => {
          const container = containerRef.current;
          if (container) {
            const canvas = p.createCanvas(container.offsetWidth, container.offsetHeight);
            canvas.parent(container);
            
            // Create tickets
            for (let i = 0; i < 25; i++) {
              tickets.push(new Ticket());
            }
          }
        };
        
        p.draw = () => {
          p.clear();
          
          // Update and display tickets
          tickets.forEach((ticket) => {
            ticket.update();
            ticket.display();
          });
        };
        
        p.windowResized = () => {
          const container = containerRef.current;
          if (container) {
            p.resizeCanvas(container.offsetWidth, container.offsetHeight);
          }
        };
      }, containerRef.current);
    }

    return () => {
      if (sketch) {
        sketch.remove();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default TheatreTicketsAnimation;
