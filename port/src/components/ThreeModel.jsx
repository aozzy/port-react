import React from 'react'
import { Canvas } from '@react-three/fiber'
import classes from './ThreeModel.module.css'
import { OrbitControls, PerspectiveCamera, RenderTexture,Text } from '@react-three/drei'


export default function ThreeModel() {
  return (
    <div className={classes.container}>
      

      <Canvas>
  
          <OrbitControls enableZoom={false}/>
          <ambientLight intensity={2}/>
          <directionalLight position={[1,1,1]}/>
        <mesh>
          <boxGeometry args={[2,2,2]}/>
          <meshStandardMaterial>
            <RenderTexture attach='map'>
              <PerspectiveCamera makeDefault position={[0,0,2]}/>
              <color attach="background" args={['yellow']}/>
              <Text fontSize={0.5} color="#555">`hello world`</Text>
            </RenderTexture>
          </meshStandardMaterial>
         
          </mesh>  
      </Canvas>
      
    // </div>
  )
}
