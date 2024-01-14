import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'
import Aos from 'aos'; //this is for animation
import 'aos/dist/aos.css';
import {useEffect, useState} from 'react'

function Contact() {
  const form = useRef();
const [emailMe, setEmailMe] = useState(true)

function handleClick() {
  setEmailMe(!emailMe)
  console.log('contact clicked', emailMe)
}


function sendEmail (e) {
  e.preventDefault();

    emailjs.sendForm('service_63zzo4h', 'template_gxnvd2d', form.current, 'L-ETeGXe38lmLimjM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
}


  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])



  return (
  <div id='contact' className="contact w-100 vh-100 bg-dark d-flex flex-column justify-content-center align-items-center">
    <div className='main-forum w-50 text-center' data-aos ="flip-right" data-aos-delay="500" data-aos-duration="1500">
        <p className='tyv'><span className='span'>04. </span>Thank you for visiting!</p>
      {emailMe ? ( <div><h1 className='text-white'>Feel free to reach out to me</h1><p className='detail'>I am actively seeking new opportunites in Software engineering positions where i can apply 
          and expand my skills in programming, problem-solving, and teamwork. I am confident in my 
          ability to contribute to any Software development project and work collaboratively with 
          cross-functional teams. I am excited about the prospect of exploring new roles and finding 
          a position that aligns with my career goals and values.
        </p></div> ) : (
          <div className="
          "> 
            <form ref={form} onSubmit={sendEmail}className="text-white justify-content-center text-align-center mt-5">
              {/* <label className="labels">Name: </label> */}
              <br />
              <input className="bg-transparent item text-white" type="name" placeholder="Name here..." name="name"/>
              <br />
              {/* <label>Email: </label> */}
              <br />
              <input className="bg-transparent item text-white" type="email" placeholder='Email here...' name="email"/>
              <br />
              {/* <label className="message">Message: </label> */}
              <br />
              <textarea className="bg-transparent text-white" rows="5" id="text-box" placeholder='message here...' name="message"/>
              <br />
              <input className="bg-transparent text-white button " type="submit" value="Send"/>
            </form>
          </div>
        )}
        {emailMe? (<button className='bg-transparent' onClick={handleClick}>Say Hello!</button>)
         :
          (<button className='bg-transparent' onClick={handleClick}>close</button>) 
          }

    </div>
  </div>
  )
}

export default Contact