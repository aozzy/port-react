import React from 'react'
import classes from './Main.module.css'
import Navbar from './Navabr'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere} from '@react-three/drei'
export default function Main() {
  
  return (
    <div className={classes.hero}>
      <Navbar/>
      {/* <div className={classes.container}>
        <div className={classes.left}>
          <h1 className={classes.title}>Hi, my name is</h1>
          <h2 className={classes.subtitle}>Abdi Osman</h2>
          <h2 className={classes.subtitle}>I build things for the web</h2>
          <p className={classes.description}>I'm a Software Engineer that welcomes challenges and architects solutions.</p>
          <button className={classes.btn}>Learn More</button>
        </div>
        <div className={classes.right}>
        <Canvas> //* to increase zoom change the fov
  
  <OrbitControls enableZoom={false} autoRotate/>
  <ambientLight intensity={2}/>
  <directionalLight position={[1,1,1]}/>
<Sphere args={[1,100,200]} scale={2.5}>
<MeshDistortMaterial color='#E94560' attach='material' distort={0.5} speed={2}/>
</Sphere>
</Canvas>
          <div className={classes.image}>

          <img className={classes.heroImage} src="./images/place-holder.jpeg" alt="" />
          </div>
        </div>
      </div> */}

    </div>
  )
}
