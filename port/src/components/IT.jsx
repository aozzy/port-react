import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { PerspectiveCamera, RenderTexture,Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import Desktop from './Desktop'
import classes from './IT.module.css'

export default function IT() {
  return (
    <React.Fragment>

    <Canvas camera={{fov:35,position:[5,5,5]}}>
      <Stage environment={'city'} intensity={1}>
      <PerspectiveCamera makeDefault position={[1.5,0.5,1]}/>
      <mesh  scale={[1,1,1]}>

      <Desktop />
      </mesh>
      </Stage>
  
      <OrbitControls enableZoom={false} />
    </Canvas>
    <p className={classes.description}>I created this model using Blender</p>
    </React.Fragment>
  )
}
