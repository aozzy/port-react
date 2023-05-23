import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Desktop from './Desktop'
import Memcard from './Memcard'
export default function IT() {
  return (
    <Canvas>
      <Stage environment={'city'} intensity={1}>

      <Desktop/>
      </Stage>
      {/* <Memcard/> */}
      <OrbitControls />
    </Canvas>
  )
}
