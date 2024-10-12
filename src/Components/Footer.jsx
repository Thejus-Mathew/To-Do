import { MDBBtn, MDBContainer, MDBFooter, MDBIcon } from 'mdb-react-ui-kit'
import React from 'react'



function Footer() {
  return (
    <div>
    <MDBFooter className='text-center text-white position-fixed bottom-0 w-100' style={{ backgroundColor: 'rgb(125, 233, 255)' }}>
      <MDBContainer className='pt-4 border-bottom fs-4 d-flex justify-content-center align-items-center gap-5 text-light' style={{height:"10vh"}}>
        <div className='bg-light text-info d-flex justify-content-center align-items-center p-3 mb-3' style={{aspectRatio:"1/1",borderRadius:"50%", height:"43px",width:"43px"}}>
          <MDBIcon fab className='fab fa-facebook-f' />
        </div>
        <div className='bg-light text-info d-flex justify-content-center align-items-center p-3 mb-3' style={{aspectRatio:"1/1",borderRadius:"50%", height:"43px",width:"43px"}}>
          <MDBIcon fab className='fab fa-twitter' />
        </div>
        <div className='bg-light text-info d-flex justify-content-center align-items-center p-3 mb-3' style={{aspectRatio:"1/1",borderRadius:"50%", height:"43px",width:"43px"}}>
          <MDBIcon fab className='fab fa-google' />
        </div>
        <div className='bg-light text-info d-flex justify-content-center align-items-center p-3 mb-3' style={{aspectRatio:"1/1",borderRadius:"50%", height:"43px",width:"43px"}}>
          <MDBIcon fab className='fab fa-instagram' />
        </div>
        <div className='bg-light text-info d-flex justify-content-center align-items-center p-3 mb-3' style={{aspectRatio:"1/1",borderRadius:"50%", height:"43px",width:"43px"}}>
          <MDBIcon fab className='fab fa-linkedin' />
        </div>
        <div className='bg-light text-info d-flex justify-content-center align-items-center p-3 mb-3' style={{aspectRatio:"1/1",borderRadius:"50%", height:"43px",width:"43px"}}>
          <MDBIcon fab className='fab fa-github' />
        </div>
      </MDBContainer>

      <div className='text-center text-light p-3 bg-info'>
        © 2020 Copyright:
        <a className='text-light ms-2 text-decoration-none' href='/'>
          To-Do App.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer
