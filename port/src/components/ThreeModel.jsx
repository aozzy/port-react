import React from 'react'
import { Canvas } from '@react-three/fiber'
import classes from './ThreeModel.module.css'


export default function ThreeModel() {
  return (
    <div className={classes.container}>
      

      <Canvas>
  
        <mesh>
          <boxGeometry args={[1,1,1]}/>
          </mesh>  
      </Canvas>
      
    // </div>
  )
}
