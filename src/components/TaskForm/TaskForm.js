import React, {Form, Button } from "react-bootstrap"
import PropTypes from "prop-types"
import shortId from "short-id"



const TaskForm = ({addTask}) => {
    const handleAddTask = (e)=>{
        e.preventDefault()
        console.log(e.target.elements)
        const [taskName, taskDescription]= e.target.elements

        if ((taskName.value.trim() && taskDescription.value.trim()) != 0) {
            addTask({
                id: shortId.generate(),
                name : taskName.value.trim(),
                description: taskDescription.value.trim()
            })
            e.target.reset();
        }

    }
    return (
        <Form onSubmit={handleAddTask} sm={2}>
            <Form.Group>
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control type="text" name="taskName" placeholder="nombre y apellido"/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Numero de documento</Form.Label>
                <Form.Control as="textarea" type="number" name="taskDescription" 
                    placeholder="numero de documento" rows={3}/>
            </Form.Group>
            
            <Button type="submit">Guardar tarea</Button>
        </Form>
    )
}

TaskForm.propTypes = {
    addTask: PropTypes.func.isRequired
}
 
export default TaskForm;