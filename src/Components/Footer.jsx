import { MDBBtn, MDBContainer, MDBFooter, MDBIcon } from 'mdb-react-ui-kit'
import React from 'react'



function Footer() {
  return (
    <div>
    <MDBFooter className='text-center text-white position-fixed bottom-0 w-100' style={{ backgroundColor: '#0dcbf199' }}>
      <MDBContainer className='pt-4 text-dark fs-4 d-flex justify-content-center gap-5' style={{height:"10vh"}}>
        <MDBIcon fab className='fab fa-facebook-f' />
        <MDBIcon fab className='fa-twitter' />
        <MDBIcon fab className='fa-google' />
        <MDBIcon fab className='fa-instagram' />
        <MDBIcon fab className='fa-linkedin' />
        <MDBIcon fab className='fa-github' />
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
