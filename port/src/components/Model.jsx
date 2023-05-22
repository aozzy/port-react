import React from 'react'
import { PerspectiveCamera, RenderTexture,Text } from '@react-three/drei'

export default function Model() {
  return (
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
  )
}
