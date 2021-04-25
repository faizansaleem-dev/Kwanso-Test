import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const DeleteTasks = (props) => {
    const [value, setValue] = useState(-1)
    const [tasks, setTasks] = useState(props.tasks)
  
    const handleChange = (index) => {
        
        if(tasks[index].value){
            if(index === value){
                setValue(-1)
            } else {
                setValue(index)
            }
            tasks[index].value = false
        } else {
            if(index === value){
                setValue(-1)
            } else {
                setValue(index)
            }
            
            tasks[index].value = true
        }
        
    }
    return (
        <Container fixed style={{marginTop: "40px"}}>
             {tasks.length === 0 && (
               <Typography color="textSecondary" gutterBottom>
                    No Tasks To Delete!
                </Typography>
            )}
            {tasks.length > 0 && tasks.map((task, index) => (
                <>
                <Card style={{width: "390px"}}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Task Name
                        </Typography>
                        <Typography variant="h5" component="h2">
                        <Checkbox
                            id={index}
                            checked={task.value}
                            onChange={() => {
                                handleChange(index)
                            }}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                            {task.task}
                        </Typography>
                    </CardContent>
                </Card>
                <br></br>
                </>
            ))}
            {tasks.length > 0 && (
                <Button variant="contained" color="primary" style={{marginTop: "10px"}} onClick={() => {
                    const result = tasks.filter(task => !task.value)
                    props.updateTask(result)
                    setTasks(result)
                }}>
                     Delete
                 </Button>
            )}
           
        </Container>
    )
    
}

export default DeleteTasks