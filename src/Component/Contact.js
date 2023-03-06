import React from 'react'
import './Contact.css'
import Aos from 'aos'; //this is for animation
import 'aos/dist/aos.css';
import {useEffect, useState} from 'react'

function Contact() {

const [emailMe, setEmailMe] = useState(true)

function handleClick() {
  setEmailMe(!emailMe)
  console.log('contact clicked', emailMe)
}



  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])



  return (
  <div id='contact' className="contact w-100 vh-100 bg-dark d-flex flex-column justify-content-center align-items-center">
    <div className='w-50 text-center' data-aos ="flip-right">
        <p className='tyv'><span className='span'>04. </span>Thank you for visiting!</p>
        <h1 className='text-white'>Feel free to reach out to me</h1>
        <p className='detail'>I am actively seeking new opportunites in Software engineering positions where i can apply 
          and expand myu skills in programming, problem-solving, and teamwork. I am confiodent in my 
          ability to contribute to any Software development project and work collaboratively with 
          cross-functional teams. I am excited about the prospect of exploring new roles and finding 
          a position that aligns with my career goals and values.
        </p>
        <button className='bg-transparent' onClick={handleClick}>Say Hello!</button>
        {emailMe ? (null) : (
          <div> 
            <form className="text-white justify-content-center text-align-center mt-5">
              <label>Name: </label>
              <input className="bg-transparent" type="name" placeholder="Name here..."/>
              <br />
              <label>Email: </label>
              <input className="bg-transparent" type="email" placeholder='Email here...'/>
              <br />
              <label>Message: </label>
              <input className="bg-transparent" type="text" id="text-box" placeholder='message here...'/>
            </form>
          </div>

        )}
    </div>
  </div>
  )
}

export default Contact