import { MDBInput } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { Flip, toast, ToastContainer } from 'react-toastify'



function Header() {
    const navigate = useNavigate()
    const[search,setSearch]=useState("")
    const handleSearch =()=>{
        if(!search){
            toast.info("please enter search content")
        }else{
            navigate('search')
            setSearch('')
        }
    }
  return (
    <div>
        <ToastContainer position="top-center" theme="colored" transition= {Flip}/>
        <Navbar expand="lg" className="bg-info text-light">
            <Container fluid>
                <Link to='/' style={{textDecoration:"none"}}><Navbar.Brand className='fs-3 fw-bold text-light'>To-Do App</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0 d-flex align-items-center"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Link to='/' style={{textDecoration:"none"}}><Navbar.Brand className='text-light fs-6 m-2'>All</Navbar.Brand></Link>
                    <Link to='pending' style={{textDecoration:"none"}}><Navbar.Brand className='text-light fs-6 m-2'>Pending</Navbar.Brand></Link>
                    <Link to='completed' style={{textDecoration:"none"}}><Navbar.Brand className='text-light fs-6 m-2'>Completed</Navbar.Brand></Link>
                </Nav>
                <div className='d-flex justify-content-center'>
                    <MDBInput value={search}  type="text" onChange={(e)=>setSearch(e.target.value)}/>
                    <button className='btn btn-outline-light mx-3' onClick={handleSearch}>Search</button>
                </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header
