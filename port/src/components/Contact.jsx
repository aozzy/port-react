import React, { useRef }from 'react'
import emailjs from '@emailjs/browser'
import classes from './Contact.module.css'
import Map from './Map'

function Contact() {
  
const handleSubmit = (e) => {
  e.preventDefault()

}

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.left}>
          <form className={classes.form} action="" onSubmit={handleSubmit}>
            <h2 className={classes.title}>Contact</h2>
            <input className={classes.input} placeholder='Name' type="text" />
            <input className={classes.input} placeholder='Email' type="email" />
             <textarea className={classes.textarea} placeholder='Type message here' name="" id="" cols="30" rows="10"></textarea>
             <button className={classes.btn}>Send</button>
          </form>
        </div>
        <div className={classes.right}>
          <Map>

          </Map>
        </div>

      </div>
    </div>
  )
}


export default Contact