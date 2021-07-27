import {Container, Row, Col} from './components/layout/Base'
import React, {useState} from "react"
import TaskForm from "./components/TaskForm"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task)=>{
    setTasks([...tasks, task])
  };

  const deleteTask = (id) => {
    const finalTasks = tasks.filter((task)=> task.id !== id)
    setTasks(finalTasks);
  }

  return (
    <Container>
      <Row className="mt-4" justify="space-between">
        <Col size={6}>Formulario
          <TaskForm addTask={addTask}/>
        </Col>
        <Col size={6}>
          <Tasks tasks={tasks} deleteTask={deleteTask}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
