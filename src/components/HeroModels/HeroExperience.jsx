import React, { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room.jsx';
import HeroLights from './HeroLights.jsx';


const HeroExperience = () => {
    const isTablet = useMediaQuery( {query: '(max-width: 1024px)'} );
    const isMobile = useMediaQuery( {query: '(max-width: 480px)'} );
    const isMobileSmall = useMediaQuery({ query: '(max-width: 360px)' });
  
    const controlsConfig = useMemo(() => ({
    enablePan: false,
    enableZoom: !isTablet,
    maxDistance: 20,
    minDistance: 5,
    minPolarAngle: Math.PI / 5,
    maxPolarAngle: Math.PI / 2,
  }), [isTablet]);

  const groupProps = useMemo(() => ({
    scale: isMobile ? 0.7 : 1,
    position: [0, -3.5, 0],
    rotation: [0, -Math.PI / 4, 0],
  }), [isMobile]);

  const groupSmallProps = useMemo(() => ({
    scale: isMobileSmall ? 0.7 : 1, // smaller scale for tiny devices
    position: [0, -5.5, 2],
    rotation: [0, -Math.PI / 4, 0],
  }), [isMobileSmall]);


  return (
    <Canvas camera={{ position: [0, 4, 15], fov: 45 }}>
        {/* <OrbitControls 
        enablePan={false} 
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2} 
        /> */}
        <Suspense fallback={null}>
          <OrbitControls {...controlsConfig} />
          <HeroLights />

          {/* Standard Group */}
          {!isMobileSmall && (
            <group {...groupProps}>
              <Room />
            </group>
          )}

          {/* Small Mobile Group */}
          {isMobileSmall && (
            <group {...groupSmallProps}>
              <Room />
            </group>
          )}
        </Suspense>
        {/* <HeroLights />
        <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}>
            <Room />
        </group> */}
    </Canvas>
  )
}

export default HeroExperience