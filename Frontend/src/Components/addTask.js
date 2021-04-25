import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {Redirect} from 'react-router-dom'
const CreateTask = (props) => {
    const [task, setTask] = useState("")
    const [redirect, setRedirect] = useState(null)
    const handleTask = (e) => {
        setTask(e.target.value)
    }
    return (
        <Container fixed style={{marginTop: "40px"}}>
            {redirect === null && (
                <>
                <TextField id="standard-basic" label="Add Task" onChange={handleTask}/> <br></br>
                <Button variant="contained" color="primary" style={{marginTop: "10px"}} onClick={() => {
                    props.addTask({value: false, task: task})
                    setRedirect("/list-task")
                }}>
                    Add Task
                </Button>
                </>
            )} 
            {redirect !== null && (
                <Redirect to={redirect} />
            )}

            
        </Container>
    )
    
}

export default CreateTask