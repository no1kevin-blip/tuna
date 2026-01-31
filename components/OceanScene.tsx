'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import * as THREE from 'three';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';

// Extend react-three-fiber with Water and Sky
extend({ Water, Sky });

function Ocean() {
  const waterRef = useRef<any>(null);
  const { scene } = useThree();

  // Optimized geometry - smaller for better performance
  const waterGeometry = useMemo(() => new THREE.PlaneGeometry(10000, 10000, 1, 1), []);

  const water = useMemo(() => {
    const waterInstance = new Water(waterGeometry, {
      textureWidth: 256,  // Reduced from 512 for faster rendering
      textureHeight: 256,
      waterNormals: new THREE.TextureLoader().load(
        '/waternormals.jpg',
        (texture) => {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        }
      ),
      alpha: 1.0,
      sunDirection: new THREE.Vector3(),
      sunColor: 0x79bfff,
      waterColor: 0x00124c,
      distortionScale: 3.7,
      fog: scene.fog !== undefined,
    });

    waterInstance.rotation.x = -Math.PI / 2;

    return waterInstance;
  }, [waterGeometry, scene.fog]);

  useFrame(() => {
    if (waterRef.current) {
      waterRef.current.material.uniforms['time'].value += 1.0 / 100.0;
    }
  });

  return <primitive ref={waterRef} object={water} />;
}

function SkyComponent() {
  const skyRef = useRef<any>(null);
  const { scene, gl } = useThree();

  const sky = useMemo(() => {
    const skyInstance = new Sky();
    skyInstance.scale.setScalar(10000);
    return skyInstance;
  }, []);

  useEffect(() => {
    if (skyRef.current) {
      const pmremGenerator = new THREE.PMREMGenerator(gl);
      const sun = new THREE.Vector3();

      // Set sky shader parameters for clear blue sky
      const uniforms = skyRef.current.material.uniforms;
      uniforms['turbidity'].value = 1.0;  // Less haze = clearer sky
      uniforms['rayleigh'].value = 0.3;   // Less scattering = more vibrant blue
      uniforms['mieCoefficient'].value = 0.005;
      uniforms['mieDirectionalG'].value = 0.7;

      // Calculate sun position using the tutorial's approach
      const theta = Math.PI * (0.49 - 0.5);
      const phi = 2 * Math.PI * (0.4456 - 0.5);

      sun.x = Math.cos(phi);
      sun.y = Math.sin(phi) * Math.sin(theta);
      sun.z = Math.sin(phi) * Math.cos(theta);

      // Set sun position
      uniforms['sunPosition'].value.copy(sun);

      // Create environment from sky
      scene.environment = pmremGenerator.fromScene(skyRef.current).texture;

      // Update water sun direction if it exists in scene
      scene.traverse((object: any) => {
        if (object.material && object.material.uniforms && object.material.uniforms['sunDirection']) {
          object.material.uniforms['sunDirection'].value.copy(sun);
        }
      });
    }
  }, [scene, gl]);

  return <primitive ref={skyRef} object={sky} />;
}

export default function OceanScene() {
  return (
    <div className="absolute inset-0 w-full h-full" style={{ willChange: 'transform' }}>
      <Canvas
        camera={{ position: [30, 30, 100], fov: 55, near: 1, far: 20000 }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          preserveDrawingBuffer: true, // Prevent canvas from clearing on scroll
        }}
        dpr={[1, 2]} // Adaptive pixel ratio for performance
        performance={{ min: 0.5 }} // Allow frame rate to drop if needed
        frameloop="always" // Keep rendering even when not visible
      >
        <SkyComponent />
        <Ocean />
      </Canvas>
    </div>
  );
}
