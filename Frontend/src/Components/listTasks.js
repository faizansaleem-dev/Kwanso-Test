import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const ListTask = (props) => {
    return (
        <Container fixed style={{marginTop: "40px"}}>
            {props.tasks.length === 0 && (
               <Typography color="textSecondary" gutterBottom>
                    No Tasks Added Yet!
                </Typography>
            )}
            {props.tasks.length > 0 &&  props.tasks.map((task) => (
                <>
                <Card style={{width: "390px"}}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Task Name
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {task.task}
                        </Typography>
                    </CardContent>
                </Card>
                <br></br>
                </>
            ))}
           
        </Container>
    )
    
}

export default ListTask