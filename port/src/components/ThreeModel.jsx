import React from 'react'
import { Canvas } from '@react-three/fiber'
import classes from './ThreeModel.module.css'
import { OrbitControls } from '@react-three/drei'


export default function ThreeModel() {
  return (
    <div className={classes.container}>
      

      <Canvas>
  
          <OrbitControls enableZoom={false}/>
          <ambientLight intensity={2}/>
          <directionalLight position={[5,5,5]}/>
        <mesh>
          <boxGeometry args={[1,1,1]}/>
          <meshStandardMaterial color="green"/>
         
          </mesh>  
      </Canvas>
      
    // </div>
  )
}
