import React, { useRef,useState }from 'react'
import emailjs from '@emailjs/browser'
import classes from './Contact.module.css'
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
    }, (error) => {
      console.log(error.text);
      setIsError(false)
  });
}

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.left}>
          <form className={classes.form} action="" onSubmit={handleSubmit} ref={form}>
            <h2 className={classes.title}>Contact</h2>
            <input className={classes.input} placeholder='Name' type="text" name='name' />
            <input className={classes.input} placeholder='Email' type="email" name='email'/>
             <textarea className={classes.textarea} placeholder='Type message here' name="message"  cols="30" rows="10"></textarea>
             <button className={classes.btn}>Send</button>
             {isError && <div className={classes.sent}>Your message has been sent sucessfully</div>}
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