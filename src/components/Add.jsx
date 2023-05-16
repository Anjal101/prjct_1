import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Add = (props) => {
    var[inputs,setInputs] = useState(props.data)

    const inputHandler = (e)=>{
        const{name,value} = e.target
        setInputs((inputs)=>({...inputs,[name]:value}))
    }
    const readValues = ()=>{
        console.log("Clicked")
        console.log("inputs:",inputs);
        if(props.method==="post")
        axios.post("http://localhost:3005/create",inputs)
        .then((response)=>{
            alert("success");
            window.location.reload(false)
        })
        .catch(err=>console.log(err))
    
    if(props.method==="put"){
        axios.put("http://localhost:3005/update/"+inputs._id,inputs)
        .then((response)=>{
            console.log("put:"+ response.data);
            alert("updated");
            window.location.reload(false)
        })
        .catch((err)=>{console.log(err)})
    }}
  return (
    <div style={{paddingTop:'100px'}}>
        <Typography varient='h2'>Add Student</Typography>
        <br/><br/>
        <TextField label='name' name='sname' value={inputs.sname} onChange={inputHandler}></TextField>
        <br/><br/>
        <TextField type='number' label='grade'name='sgrade' value={inputs.sgrade} onChange={inputHandler}></TextField>
        <br/>
        <br/>
        <Button variant='contained' onClick={readValues}>submit</Button>
    </div>
  )
}

export default Add