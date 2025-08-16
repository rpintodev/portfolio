import { OrbitControls, Preload, useGLTF,Float } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import CanvasLoader from '../Loader';


const Computers = ({ isMobile }) => {
  const computer = useGLTF('./lost_programmer/scene.gltf');

  return (
    <Float speed={1.75} rotationIntensity={2} floatIntensity={3}>
      <mesh>
        <hemisphereLight intensity={0.15} groundColor='black' />
        <pointLight intensity={1} />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive
          object={computer.scene}
          scale={isMobile ? 1.5 : 2}
          position={[0, -2.75, -1.5]}
          rotation={[0, 1.5, -0.1]}
        />
      </mesh>
    </Float>
  );
};


const ComputersCanvas = ()=>{
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{
      const mediaQuery = window.matchMedia('(max-width: 500)');
      setIsMobile(mediaQuery.matches);
      const handleMediaQueryChange = (event)=> {
        setIsMobile(event.matches);
      }

      mediaQuery.addEventListener('change',handleMediaQueryChange);
      return ()=> {
        mediaQuery.removeEventListener('change',handleMediaQueryChange);

      }
  },[]);

  return(
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camara= {{position: [20,3,5], fov: 25}}

    >
    <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls
        enableZoom={true}
         minPolarAngle={0.1}
         maxPolarAngle={Math.PI - 0.1}

      />
      <Computers isMobile = {isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  );
}

export default ComputersCanvas;