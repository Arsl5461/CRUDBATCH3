import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserRegister = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        age:0,
        password:""
    })
    const navigate=useNavigate();
    const {name,email,age,password}=formData;
    const onChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
    }
    const onSubmit=async(e)=>{
        e.preventDefault();
        const response=await axios.post(`${process.env.REACT_APP_BASE_URL}/user`,formData)
        if(response.data.success){
          setFormData({
            name:"",
            email:"",
            age:0,
            password:"" 
          })
          toast.success(response.data.message)
        navigate("/users")
        }
        else{
            toast.warning("Something Went Wrong")
        }
    }

  return (
    <div className='d-flex justify-content-center'>
        <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter User name" name='name' value={name} onChange={onChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" name='email' value={email} onChange={onChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Age:</Form.Label>
        <Form.Control type="number" placeholder="Enter age" name='age' value={age} onChange={onChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" name='password' value={password} onChange={onChange} />
      </Form.Group>
      <Button type='submit'>Submit</Button>
    </Form>
    </div>
  )
}

export default UserRegister
