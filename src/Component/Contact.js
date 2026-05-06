import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'
import Aos from 'aos'; //this is for animation
import 'aos/dist/aos.css';
import {useEffect, useState} from 'react'

function Contact() {
  const form = useRef();
  const [emailMe, setEmailMe] = useState(true)
  const [intent, setIntent] = useState(null)

function handleClick(selectedIntent) {
  setIntent(selectedIntent)
  setEmailMe(false)
}



function sendEmail (e) {
  e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      setTimeout(() => {
        setEmailMe(true);
        setIntent(null);
      }, 500);
}


  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])



  return (
  <div id='contact' className="contact w-100 vh-100 bg-dark d-flex flex-column justify-content-center align-items-center">
    <div className='main-forum w-50 vh-100 text-center' data-aos ="flip-right" data-aos-delay="500" data-aos-duration="1500">
      {emailMe ? ( <div className="email-prompt">
        <p className='tyv'><span className='span'>04. </span>Thank you for visiting!</p>
        <h1 className='text-white'>Let's talk</h1>
        <p className='detail'>
          Whether you're a recruiter, an engineer interested in collaborating, or someone curious
          about Sandlotpicks — I'd love to hear from you. Pick the conversation you'd like to start
          and I'll respond within 24 hours.
        </p>
        <div className='cta-row'>
          <button className='bg-transparent cta-btn' onClick={() => handleClick('hiring')}>
            Hiring?
          </button>
          <button className='bg-transparent cta-btn' onClick={() => handleClick('sandlotpicks')}>
            Interested in Sandlotpicks?
          </button>
        </div>
      </div> ) : (
          <div className='form-container'>
            <form ref={form} onSubmit={sendEmail}className=" form text-white justify-content-center text-align-center mt-5 ">
              <h3 className="form-prompt">
                {intent === 'sandlotpicks'
                  ? "Tell me about your interest in Sandlotpicks"
                  : "Tell me about the role"}
              </h3>
              <input className="bg-transparent item text-white" type="name" placeholder="Name here..." name="name"/>
              <input className="bg-transparent item text-white" type="email" placeholder='Email here...' name="email"/>
              <input type="hidden" name="intent" value={intent || ''} />
              <textarea className="bg-transparent text-white" rows="5" id="text-box" placeholder='message here...' name="message"/>
              <br />
              <input className="bg-transparent text-white button " type="submit" value="Send"/>
            </form>
          </div>
        )}
    </div>
  </div>
  )
}

export default Contact
