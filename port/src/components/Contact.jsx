import React from 'react'
import classes from './Contact.module.css'

function Contact() {
  
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.left}>
          <form className={classes.form} action="">
            <h2 className={classes.title}>Contact</h2>
            <input className={classes.input} placeholder='Name' type="text" />
            <input className={classes.input} placeholder='Email' type="email" />
             <textarea className={classes.textarea} name="" id="" cols="30" rows="10"></textarea>
             <button className={classes.btn}>Send</button>
          </form>
        </div>
        <div className={classes.right}></div>

      </div>
    </div>
  )
}


export default Contact