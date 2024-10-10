import { MDBBadge, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

function Search() {
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
  return (
    <div className='p-3'>
        Search
        <div className="add d-flex justify-content-end gap-2 mb-2 align-items-center">
        <div className="filter d-flex align-items-center me-5">
            <span style={{width:"200px"}}>Filter Priorities</span>
            <Form.Select aria-label="Default select example">
                <option value="1">All</option>
                <option value="2">High</option>
                <option value="3">Medium</option>
                <option value="4">Low</option>
            </Form.Select>
        </div>
      </div>
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr className='border-bottom border-dark'>
          <th scope='col'>Description</th>
          <th scope='col'>status</th>
          <th scope='col'>Priority</th>
          <th scope='col'>Time Remaning</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr className='border-bottom border-info'>
          <td>
            <p className='fw-bold mb-1'>John Doe</p>
          </td>
          <td>
            <MDBBadge color='danger' style={{width:"80px"}} pill>
              Pending
            </MDBBadge>
          </td>
          <td>
            <MDBBadge color='danger' style={{width:"60px"}} pill>
              high
            </MDBBadge>
          </td>
          <td>12hr 13min</td>
          <td>
            <button className='btn btn-light text-info m-1' onClick={handleShowEdit}><i className="fa-solid fa-pen-to-square"></i></button>
            <button className='btn btn-light text-danger m-1'><i className="fa-solid fa-trash"></i></button>
          </td>
        </tr>
        <tr className='border-bottom border-info'>
          <td>
            <p className='fw-bold mb-1'>John Doe</p>
          </td>
          <td>
            <MDBBadge color='success' style={{width:"80px"}} pill>
              Completed
            </MDBBadge>
          </td>
          <td>
            <MDBBadge color='warning' style={{width:"60px"}} pill>
              Medium
            </MDBBadge>
          </td>
          <td>12hr 13min</td>
          <td>
            <button className='btn btn-light text-info m-1' onClick={handleShowEdit}><i className="fa-solid fa-pen-to-square"></i></button>
            <button className='btn btn-light text-danger m-1'><i className="fa-solid fa-trash"></i></button>
          </td>
        </tr>
        <tr className='border-bottom border-info'>
          <td>
            <p className='fw-bold mb-1'>John Doe</p>
          </td>
          <td>
            <MDBBadge color='danger' style={{width:"80px"}} pill>
              Pending
            </MDBBadge>
          </td>
          <td>
            <MDBBadge color='success' style={{width:"60px"}} pill>
              Low
            </MDBBadge>
          </td>
          <td>12hr 13min</td>
          <td>
            <button className='btn btn-light text-info m-1' onClick={handleShowEdit}><i className="fa-solid fa-pen-to-square"></i></button>
            <button className='btn btn-light text-danger m-1'><i className="fa-solid fa-trash"></i></button>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>



    <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
            Close
            </Button>
            <Button variant="primary" onClick={handleCloseEdit}>
            Save Changes
            </Button>
        </Modal.Footer>
    </Modal> 
    </div>
  )
}

export default Search
