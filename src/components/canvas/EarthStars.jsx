import {Canvas} from '@react-three/fiber';
import {Suspense, suspense} from 'react';
import {OrbitControls, Preload} from '@react-three/drei';
import CanvasLoader from '../Loader';
import Earth from './Earth';
import Stars from './Stars';

const EarthStars = ()=>{
    <Canvas 
        shadows
        frameloop='demand'
        dpr={[1,2]}
        camera={{
            fov:45,
            near:0.1,
            far:200,
            position:[-4,3,6]
        }}
    >
        <Suspense fallback={<CanvasLoader/>}>
            <OrbitControls 
            autoRotate 
            enableZoom={false}
            maxPolarAngle={Math.PI /2} 
            minPolarAngle={Math.PI/2}
            />
            <Stars/>
            <Earth/>
            <Preload all/>
            </Suspense>
    </Canvas>
}

export default EarthStars;