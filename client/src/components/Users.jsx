import axios from 'axios';
import React,{useState,useEffect} from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Users = () => {
    const [data,setData]=useState([])
    const fetchUsers=async()=>{
const response=await axios.get(`${process.env.REACT_APP_BASE_URL}/user`)
if(response.data.success){
    setData(response.data.users)
}
    }
    useEffect(()=>{
        fetchUsers()
    },[])

    const handleDelete=async(id)=>{
        const response=await axios.delete(`${process.env.REACT_APP_BASE_URL}/user/${id}`)
        if(response.data.success){
            toast.success(response.data.message)
            fetchUsers()
        }
    }

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Age',
            selector: row => row.age,
        },
        {
            name: 'Password',
            selector: row => row.password,
        },
        {
            name: 'Actions',
            cell: row => (
                <div>
                    <Link to={`/user/${row._id}`}>Edit</Link>
                    <button onClick={() => handleDelete(row._id)}>Delete</button>
                </div>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ]
  return (
    <div>
		<DataTable
			columns={columns}
			data={data}
            pagination
		/>
    </div>
  )
}

export default Users
