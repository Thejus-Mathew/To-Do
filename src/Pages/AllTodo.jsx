import { MDBBadge, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'



function AllTodo() {
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  return (
    <div className='p-3'>
      <div className="add d-flex justify-content-end gap-2 mb-2 align-items-center">
        <div className="filter d-flex align-items-center">
            <span style={{width:"200px"}}>Filter Priorities</span>
            <Form.Select aria-label="Default select example">
                <option value="1">All</option>
                <option value="2">High</option>
                <option value="3">Medium</option>
                <option value="4">Low</option>
            </Form.Select>
        </div>
        <button className='btn btn-info me-5 text-light' onClick={handleShowAdd}>Add To-Do</button>
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
            <button className='btn btn-light text-secondary m-1'><i className="fa-solid fa-circle-check"></i></button>
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

            <button className='btn btn-light text-secondary m-1'><i className="fa-solid fa-circle-check"></i></button>
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
            <button className='btn btn-light text-success m-1'><i className="fa-solid fa-circle-check"></i></button>
            <button className='btn btn-light text-info m-1' onClick={handleShowEdit}><i className="fa-solid fa-pen-to-square"></i></button>
            <button className='btn btn-light text-danger m-1'><i className="fa-solid fa-trash"></i></button>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>



    <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
            <Modal.Title>Edit To-Do</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm="2">
                    Description
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" placeholder="Description" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm="2">
                Status
                </Form.Label>
                <Col sm="10">
                    <Form.Select aria-label="Default select example">
                        <option value="1">Pending</option>
                        <option value="2">Completed</option>
                    </Form.Select>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm="2">
                Priority
                </Form.Label>
                <Col sm="10">
                    <Form.Select aria-label="Default select example">
                        <option value="1">High</option>
                        <option value="2">Medium</option>
                        <option value="3">Low</option>
                    </Form.Select>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm="2">
                    Time
                </Form.Label>
                <Col sm="10">
                <Form.Control type="date" placeholder="Description" />
                <Form.Control type="time" placeholder="Description" />
                </Col>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
            Close
            </Button>
            <Button variant="primary" onClick={handleCloseEdit}>
            Save Changes
            </Button>
        </Modal.Footer>
    </Modal>

    <Modal show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
            <Modal.Title>Add To-Do</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm="2">
                    Description
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" placeholder="Description" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm="2">
                Status
                </Form.Label>
                <Col sm="10">
                    <Form.Control type='text' placeholder='Pending' readOnly />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm="2">
                Priority
                </Form.Label>
                <Col sm="10">
                    <Form.Select aria-label="Default select example">
                        <option value="1">High</option>
                        <option value="2">Medium</option>
                        <option value="3">Low</option>
                    </Form.Select>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm="2">
                    Time
                </Form.Label>
                <Col sm="10">
                <Form.Control type="date" placeholder="Description" />
                <Form.Control type="time" placeholder="Description" />
                </Col>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAdd}>
            Close
            </Button>
            <Button variant="primary" onClick={handleCloseAdd}>
            Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
    </div>
  )
}

export default AllTodo
