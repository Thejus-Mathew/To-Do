import { MDBBadge, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from '../Redux/todoSlice';
import { toast } from 'react-toastify';
import { updateSearch } from '../Redux/searchSlice';



function AllTodo() {
  const todos = useSelector(state=>state.todoSlice)
  const[todo,setTodo]=useState({
    description:"",
    status:false,
    id:0,
    priority:"1",
    time:"",
    date:""
  })
  const dispatch = useDispatch()


  useEffect(()=>{
    if(todos.length>0){
      setTodo({...todo,id:(todos[todos.length-1].id+1)})
    }else{
      setTodo({...todo,id:1})
    }
  },[todos])


  const[filter,setFilter] = useState("0")
  

  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const handleCloseEdit = () => {
    setTodo({
      description:"",
      status:false,
      id:0,
      priority:'1',
      time:"",
      date:""
    })
    setShowEdit(false)
  }


  const handleShowEdit = (id) => {
    setTodo(todos.find(item=>item?.id==id))
    setShowEdit(true)
  }


  const handleCloseAdd = () => {
    setTodo({
      description:"",
      status:false,
      id:0,
      priority:'1',
      time:"",
      date:""
    })
    setShowAdd(false)
  }
  const handleShowAdd = () => setShowAdd(true);

  const handleAddTodo = () => {
    if(!todo.description || !todo.time || !todo.date) {
      toast.info("Add missing fields")
    }else{
      dispatch(addTodo(todo))
      handleCloseAdd()
    }
  }

  const handleEditTodo = () =>{
    dispatch(editTodo(todo))
    handleCloseEdit()
  }


  const handleFilter = (item)=>{
    if (filter == "0") {
      return true
    }else if(item?.priority == filter){
      return true
    }else{
      return false
    }
  }

  const handleDelete = (id) =>{
    dispatch(deleteTodo(id))
  }


  const handleComplete = (id) =>{
    let payload = {...todos.find(item=>item.id==id)}
    payload.status = payload.status?false:true
    dispatch(editTodo(payload))
  }


  const time = (date,time,status)=>{
    const now = Math.floor(new Date().getTime()/(1000*60))
    const then = new Date(`${date} ${time}`).getTime()/(1000*60)

    let days = then>now?Math.floor((then-now)/(60*24)):Math.floor((now-then)/(60*24))
    let hour = then>now?Math.floor(((then-now)%(60*24))/60):Math.floor(((now-then)%(60*24))/60)
    let min = then>now?((then-now)%(60*24))%60:((now-then)%(60*24))%60

    if(then>=now){
      if(status){
        return <span className='text-success'>{`${days==0?'':`${days}day`} ${hour==0?'':`${hour}hr`}  ${min==0 && days==0 && hour==0?'59Sec':min==0?"":`${min}min`} spare`}</span>
      }else{
        return <span className='text-dark'>{`${days==0?'':`${days}day`} ${hour==0?'':`${hour}hr`}  ${min==0 && days==0 && hour==0?'59Sec':min==0?"":`${min}min`}`}</span>
      }
    }else{
      if(status){
        return <span className='text-dark'>{`-- -- --`}</span>
      }else{
        return <span className='text-danger'>{`${days==0?'':`${days}day`} ${hour==0?'':`${hour}hr`}  ${min==0 && days==0 && hour==0?'59Sec':min==0?"":`${min}min`} overdue`}</span>
      }
    }    
  }

  useEffect(()=>{
    dispatch(updateSearch(""))
  },[])

  return (
    <div className='p-3'>
      <div className="add d-flex justify-content-end gap-2 mb-2 align-items-center">
        <div className="filter d-flex align-items-center">
            <span style={{width:"200px"}}>Filter Priorities</span>
            <Form.Select aria-label="Default select example" value={filter} onChange={(e)=>setFilter(e.target.value)}>
                <option value="0">All</option>
                <option value="1">High</option>
                <option value="2">Medium</option>
                <option value="3">Low</option>
            </Form.Select>
        </div>
        <button className='btn btn-info me-5 text-light' onClick={handleShowAdd}>Add Task</button>
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
        {
          todos.filter(item=>handleFilter(item)).map((item,index)=>(
            <tr key={index} className='border-bottom border-info'>
              <td>
                <p className='fw-bold mb-1'>{item?.description}</p>
              </td>
              <td>
                <MDBBadge color={item?.status?"success":"danger"} style={{width:"80px"}} pill>
                  {item?.status?"Completed":"Pending"}
                </MDBBadge>
              </td>
              <td>
                <MDBBadge color={item?.priority=="1"?"danger":item?.priority=="2"?"warning":item?.priority=="3"?"success":""} style={{width:"60px"}} pill>
                  {item?.priority=="1"?"High":item?.priority=="2"?"Medium":item?.priority=="3"?"Low":""}
                </MDBBadge>
              </td>
              <td>{time(item?.date,item?.time,item?.status)}</td>
              <td>
                <button className={item?.status?'btn btn-light text-success m-1':'btn btn-light text-secondary m-1'} onClick={()=>handleComplete(item?.id)}><i className="fa-solid fa-circle-check"></i></button>
                <button className='btn btn-light text-info m-1' onClick={()=>handleShowEdit(item?.id)}><i className="fa-solid fa-pen-to-square"></i></button>
                <button className='btn btn-light text-danger m-1' onClick={()=>handleDelete(item?.id)}><i className="fa-solid fa-trash"></i></button>
              </td>
            </tr>
          ))
        }
      </MDBTableBody>
    </MDBTable>
    <div className='bg-warning' style={{height:"14vh"}}></div>



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
                <Form.Control type="text" placeholder="Description" value={todo.description} onChange={(e)=>setTodo({...todo,description:e.target.value})} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm="2">
                Status
                </Form.Label>
                <Col sm="10">
                    <Form.Select aria-label="Default select example" value={todo.status?"2":"1"} onChange={(e)=>setTodo({...todo,status:e.target.value=="2"?true:false})}>
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
                    <Form.Select aria-label="Default select example" value={todo.priority} onChange={(e)=>setTodo({...todo,priority:e.target.value})}>
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
                <Form.Control type="date" value={todo.date} onChange={(e)=>setTodo({...todo,date:e.target.value})}/>
                <Form.Control type="time" value={todo.time} onChange={(e)=>setTodo({...todo,time:e.target.value})}/>
                </Col>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
            Close
            </Button>
            <Button variant="primary" onClick={handleEditTodo}>
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
                <Form.Control type="text" placeholder="Description" value={todo.description} onChange={(e)=>setTodo({...todo,description:e.target.value})} />
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
                    <Form.Select aria-label="Default select example" value={todo.priority} onChange={(e)=>setTodo({...todo,priority:e.target.value})}>
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
                <Form.Control type="date" value={todo.date} onChange={(e)=>setTodo({...todo,date:e.target.value})}/>
                <Form.Control type="time" value={todo.time} onChange={(e)=>setTodo({...todo,time:e.target.value})}/>
                </Col>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAdd}>
            Close
            </Button>
            <Button variant="primary" onClick={handleAddTodo}>
            Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
    </div>
  )
}

export default AllTodo
