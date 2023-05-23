import React,{useRef} from 'react'
import { PerspectiveCamera, RenderTexture,Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model() {
  const frame = useFrame(state=> textRef.current.position.x = Math.sin(state.clock.elapsedTime)*2)
  const textRef = useRef()
  return (
    <mesh>
          <boxGeometry/>
          <meshStandardMaterial>
            <RenderTexture attach='map'>
              <PerspectiveCamera makeDefault position={[0,0,5]}/>
              <color attach="background" args={['yellow']}/>
              <Text ref={textRef} fontSize={0.5} color="#555">hello world</Text>
            </RenderTexture>
          </meshStandardMaterial>
         
          </mesh>  
  )
}
