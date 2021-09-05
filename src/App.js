import {Container, Row, Col} from './components/layout/Base'
import React, {useState} from "react"
import TaskForm from "./components/TaskForm"
import Tasks from "./components/Tasks"
import MouseMove from "./MouseMove";
import Effect from "./Effect";
import APICall from "./APICall";


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
      <Row className="mt-5" lg={5} justify="space-around" >
        <Col size={6} height={100}>Formulario
          <TaskForm addTask={addTask}/>
        </Col>
        
        <Col size={6}>
          <Tasks tasks={tasks} deleteTask={deleteTask}/>
        </Col>
      </Row>

      <MouseMove />
      <Effect />
      <APICall />

    </Container>
  );
}

export default App;
