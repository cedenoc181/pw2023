import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div id='footer' className='w-100 p-5 pb-2 bg-dark d-flex flex-column '>
<div className='icons-con'>
<ul className='ficons'>
    <li>
      <i className='bi bi-chevron-left text-secondary' style={{fontSize: '25px'}}></i>
     </li>
    <li>
      <i className='bi bi-filetype-js text-secondary' style={{fontSize: '25px'}}></i>
  </li> 
    <li>
      <i className='bi bi-filetype-jsx text-secondary' style={{fontSize: '25px'}}> </i>
    </li>
    <li>
      <i className='bi bi-filetype-rb text-secondary' style={{fontSize: '25px'}}></i>
      </li>
    <li>
      <i className='bi bi-filetype-css text-secondary' style={{fontSize: '25px'}}></i>
     </li>
     <li>
      <i className='bi bi-filetype-html text-secondary' style={{fontSize: '25px'}}></i>
     </li>
     <li>
      <i className='bi bi-chevron-right text-secondary' style={{fontSize: '25px'}}></i>
     </li>
</ul>
</div>


    <div  className='w-100 pb-2 d-flex flex-column justify-content-center text-align-center align-items-center'>
        <p className='footerEmail' >Christiancedenob.f@gmail.com</p>
    </div>
    </div>
  )
}





export default Footer