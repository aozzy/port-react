import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { PerspectiveCamera, RenderTexture,Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import Desktop from './Desktop'

export default function IT() {
  return (
    <Canvas>
      <Stage environment={'city'} intensity={1}>
      <PerspectiveCamera makeDefault position={[0,0,0]}/>
      <Desktop/>
      </Stage>
  
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}
