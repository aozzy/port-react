import React from 'react'
import classes from './modules/NewAbout.module.css'

function NewAbout() {
  return (
    <section className={classes['section-about']}>
   <div className={classes.container}>
    <div className={`${classes['grid-item']} ${classes['grid-item-1']}`}>hello</div>
    <div className={`${classes['grid-item']} ${classes['grid-item-2']}`}></div>
    <div className={`${classes['grid-item']} ${classes['grid-item-3']}`}></div>
    <div className={`${classes['grid-item']} ${classes['grid-item-4']}`}></div>
    <div className={`${classes['grid-item']} ${classes['grid-item-5']}`}></div>
    <div className={`${classes['grid-item']} ${classes['grid-item-6']}`}></div>
   
   </div>
    </section>
  )
}

export default NewAbout