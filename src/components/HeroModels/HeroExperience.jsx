import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room.jsx';
import HeroLights from './HeroLights.jsx';


const HeroExperience = () => {
    const isTablet = useMediaQuery( {query: '(max-width: 1024px)'} );
    const isMobile = useMediaQuery( {query: '(max-width: 480px)'} );
    const isMobileSmall = useMediaQuery({ query: '(max-width: 370px)' });
    
    return (
        <Canvas camera={{ position: [0, 1, 15], fov: 50 }}>
            <Suspense fallback={null}>
                <OrbitControls 
                enablePan={false} 
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2} 
                />
                <HeroLights />
            {/* Only render the 3D Room if screen > 370px */}
                {!isMobileSmall && (
                <group
                    scale={isMobile ? 0.9 : 1}
                    position={[0, -3.5, 0]}
                    rotation={[0, -Math.PI / 4, 0]}
                >
                    <Room />
                </group>
                )}
            </Suspense>
        </Canvas>
    )
}

export default HeroExperience