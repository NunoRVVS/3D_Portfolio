import React, { Suspense, useMemo } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { useSpring, a } from '@react-spring/three';
import { Room } from './Room.jsx';
import HeroLights from './HeroLights.jsx';

// 🧭 Animated camera helper component
const AnimatedCamera = ({ position, fov }) => {
  const { camera } = useThree();

  const { camPosition, camFov } = useSpring({
    camPosition: position,
    camFov: fov,
    config: { mass: 1, tension: 170, friction: 26 },
    onChange: ({ value }) => {
      camera.fov = value.camFov;
      camera.position.set(...value.camPosition);
      camera.updateProjectionMatrix();
    },
  });

  return null; // no JSX needed; updates camera directly
};

const HeroExperience = () => {
  // 🧩 Responsive breakpoints
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  const isMobileSmall = useMediaQuery({ query: '(max-width: 357px)' });

  // 🎥 Responsive camera configuration
  const cameraConfig = useMemo(() => {
    if (isMobileSmall) {
      return { position: [0, 4, 13], fov: 55 };
    } else if (isMobile) {
      return { position: [0, 5, 15], fov: 50 };
    } else {
      return { position: [0, 5, 15], fov: 45 };
    }
  }, [isMobile, isMobileSmall]);

  // 🕹️ Responsive OrbitControls configuration
  const controlsConfig = useMemo(() => {
    if (isMobileSmall) {
      return {
        enablePan: false,
        enableZoom: false,
        maxDistance: 15,
        minDistance: 6,
        minPolarAngle: Math.PI / 5,
        maxPolarAngle: Math.PI / 2.2,
      };
    } else if (isMobile) {
      return {
        enablePan: false,
        enableZoom: false,
        maxDistance: 18,
        minDistance: 5,
        minPolarAngle: Math.PI / 5,
        maxPolarAngle: Math.PI / 2,
      };
    } else {
      return {
        enablePan: false,
        enableZoom: !isTablet,
        maxDistance: 20,
        minDistance: 5,
        minPolarAngle: Math.PI / 5,
        maxPolarAngle: Math.PI / 2,
      };
    }
  }, [isMobile, isMobileSmall, isTablet]);

  // 🧱 Animated group props
  const { scale } = useSpring({
    scale: isMobileSmall ? 0.55 : isMobile ? 0.7 : 1,
    config: { mass: 1, tension: 120, friction: 18 },
  });

  return (
    <Canvas shadows frameloop="demand">
      <Suspense fallback={null}>
        {/* Smooth animated camera */}
        <AnimatedCamera {...cameraConfig} />

        {/* Orbit controls */}
        <OrbitControls {...controlsConfig} />

        {/* Scene lights */}
        <HeroLights />

        {/* Animated group with Room */}
        <a.group
          scale={scale}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </a.group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
