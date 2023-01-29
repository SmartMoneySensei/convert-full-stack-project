import React from 'react'
import { useEffect,useState } from 'react';
import Table from "react-bootstrap/Table";
import { useNavigate } from 'react-router-dom';

export default function ViewBugs() {

     const [bugs, setBugs] = useState([]);

    useEffect(() => {
    const fetchBugs = async () => {
        try{
             const data = await fetch("/bugs");
      const json = await data.json();
      setBugs(json)
        } catch(err){console.log(err)}
     
    }
    
    fetchBugs();
    }, []);

  const deleteBug = async (id:any) => {
    await fetch(`/bugs/delete/${id}`, {
      method: "DELETE",
    });
  };


    let navigate = useNavigate();
  

    return (
        <div style={{ display:"flex",justifyContent:"center", flexDirection:"column", alignContent:"center",alignItems:"center"}} ><h1>ViewBugs</h1>
           <Table striped bordered hover responsive style={{width:"80vw"}}>
            <thead>
                <tr>
                    <th>Order</th>
                    <th>Name</th>
                    <th>Priority</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {bugs.map((bug:any,index)=>{

                    return (
                      <tr key={bug._id}>
                        <td>{index}</td>
                        <td>{bug.name}</td>
                        <td>{bug.priority}</td>
                        <td>{bug.details}</td>
                        <td>
                          <button id='edit' onClick={() => navigate(`/bugs/${bug._id}`)}>
                            Edit
                          </button>
                        </td>
                        <td>
                          <button id='delete' onClick={() => {
                            deleteBug(bug._id); window.location.reload()}} >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                })}
            </tbody>
           </Table>
        </div>
        
    )
}
