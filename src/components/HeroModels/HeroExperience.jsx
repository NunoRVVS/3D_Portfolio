import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room.jsx';
import HeroLights from './HeroLights.jsx';
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';


const HeroExperience = () => {
    const isTablet = useMediaQuery( {query: '(max-width: 1024px)'} );
    const isMobile = useMediaQuery( {query: '(max-width: 480px)'} );
    // const isMobileSmall = useMediaQuery({ query: '(max-width: 370px)' });
    const screensRef = useRef();
    const lightsRef = useRef();
    
    return (
        <Canvas camera={{ position: [2, 4, 15], fov: 50 }}>
            <Suspense fallback={null}>
                <OrbitControls 
                enablePan={false} 
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2} 
                />
                <HeroLights ref={lightsRef} />
                <EffectComposer>
                    <SelectiveBloom
                        selection={screensRef}
                        lights={lightsRef}
                        intensity={1.2} // Strength of the bloom
                        luminanceThreshold={0.2} // Minimum luminance needed
                        luminanceSmoothing={1.1} // Smooth transition
                        blendFunction={BlendFunction.ADD} // How it blends
                    />
                </EffectComposer>
            {/* Only render the 3D Room if screen > 370px */}
                {/* {!isMobileSmall && ( */}
                <group
                    scale={isMobile ? 0.7 : 1}
                    position={[0, -3.5, 0]}
                    rotation={[0, -Math.PI / 4, 0]}
                > 
                    <Room screensRef={screensRef} />
                </group>
                {/* )} */}
            </Suspense>
        </Canvas>
    )
}

export default HeroExperience