import React, { useRef,useState }from 'react'
import emailjs from '@emailjs/browser'
import classes from './modules/Contact.module.css'
import Map from './Map'

function Contact() {
  const form = useRef();
  const [isError,setIsError] = useState(null)

const handleSubmit = (e) => {
  e.preventDefault()
 

 
  emailjs.sendForm('service_nyoyae2', 'template_rby5hxq', form.current, 'RCSBYoAu5e8OgHNhN')
  .then((result) => {
      console.log(result.text);
      setIsError(true)
      form.current.reset()
    }, (error) => {
      console.log(error.text);
      setIsError(false)
  });
}

  return (
    <section id='contact' className={classes.section}>
      <div className={classes.container}>
        <div className={classes.left}>
          <form className={classes.form} action="" onSubmit={handleSubmit} ref={form}>
            <div className={classes.titleContainer}>

            <h2 className={classes.title}>Contact</h2>
            </div>
            <input className={classes.input} placeholder='Name' type="text" name='name' required/>
            <input className={classes.input} placeholder='Email' type="email" name='email' required/>
             <textarea className={classes.textarea} placeholder='Type message here' name="message"  cols="30" rows="10" required></textarea>
             <button className={classes.btn}>Send</button>
             {isError && <div className={classes.sent}>Your message has been sent sucessfully</div>}
          </form>
        </div>
        <div className={classes.right}>
          <Map>

          </Map>
        </div>

      </div>
    </section>
  )
}


export default Contact