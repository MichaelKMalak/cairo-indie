
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface TheatricalCurtainProps {
  color?: string;
  openDuration?: number;
  delay?: number;
}

const TheatricalCurtain = ({ 
  color = '#f52e38', 
  openDuration = 2000,
  delay = 300 
}: TheatricalCurtainProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      -1, 1, 1, -1, 0.1, 10
    );
    
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    
    // Set renderer size to cover viewport
    const updateSize = () => {
      if (containerRef.current) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.left = -width / height;
        camera.right = width / height;
        camera.updateProjectionMatrix();
      }
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    
    // Add renderer to DOM
    containerRef.current.appendChild(renderer.domElement);
    
    // Create curtain material with subtle texture
    const textureLoader = new THREE.TextureLoader();
    const curtainTexture = new THREE.CanvasTexture(createCurtainTexture());
    curtainTexture.wrapS = THREE.RepeatWrapping;
    curtainTexture.wrapT = THREE.RepeatWrapping;
    curtainTexture.repeat.set(5, 5);
    
    const curtainMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      map: curtainTexture,
      side: THREE.DoubleSide,
      transparent: true,
    });
    
    // Create left curtain
    const leftCurtainGeometry = new THREE.PlaneGeometry(1, 2);
    const leftCurtain = new THREE.Mesh(leftCurtainGeometry, curtainMaterial);
    leftCurtain.position.z = -1;
    leftCurtain.position.x = -0.5;
    scene.add(leftCurtain);
    
    // Create right curtain
    const rightCurtainGeometry = new THREE.PlaneGeometry(1, 2);
    const rightCurtain = new THREE.Mesh(rightCurtainGeometry, curtainMaterial);
    rightCurtain.position.z = -1;
    rightCurtain.position.x = 0.5;
    scene.add(rightCurtain);
    
    // Position camera
    camera.position.z = 1;
    
    // Animation variables
    let startTime: number | null = null;
    let animationFrameId: number;
    
    // Animation function
    const animate = (time: number) => {
      if (startTime === null) {
        startTime = time;
      }
      
      const elapsed = time - startTime;
      let progress = Math.min(elapsed / openDuration, 1);
      
      // Ease-out function for smoother ending
      progress = 1 - Math.pow(1 - progress, 3);
      
      // Move curtains apart
      leftCurtain.position.x = -0.5 - progress * 1.5;
      rightCurtain.position.x = 0.5 + progress * 1.5;
      
      // Add subtle wave effect
      const waveAmplitude = 0.05 * (1 - progress);
      const waveTime = time * 0.001;
      
      leftCurtain.rotation.z = Math.sin(waveTime * 2) * waveAmplitude;
      rightCurtain.rotation.z = -Math.sin(waveTime * 2) * waveAmplitude;
      
      // Render scene
      renderer.render(scene, camera);
      
      // Continue animation until complete
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // Fade out curtains when fully open
        setTimeout(() => {
          const fadeOutDuration = 1000;
          const fadeStartTime = performance.now();
          
          const fadeCurtains = (currentTime: number) => {
            const fadeElapsed = currentTime - fadeStartTime;
            const fadeProgress = Math.min(fadeElapsed / fadeOutDuration, 1);
            
            // Fade out opacity
            curtainMaterial.opacity = 1 - fadeProgress;
            
            renderer.render(scene, camera);
            
            if (fadeProgress < 1) {
              requestAnimationFrame(fadeCurtains);
            }
          };
          
          requestAnimationFrame(fadeCurtains);
        }, 300);
      }
    };
    
    // Start animation after delay
    setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, delay);
    
    // Create curtain texture
    function createCurtainTexture(): HTMLCanvasElement {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw vertical fold lines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 2;
        
        for (let i = 0; i < canvas.width; i += 16) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, canvas.height);
          ctx.stroke();
        }
        
        // Add some texture details
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        for (let i = 0; i < 100; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const size = Math.random() * 4 + 1;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      return canvas;
    }
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [color, openDuration, delay]);
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-10 pointer-events-none"
      style={{ overflow: 'hidden' }}
    />
  );
};

export default TheatricalCurtain;
