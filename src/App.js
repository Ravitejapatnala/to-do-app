import React, { useState } from "react";


function App() {
  const[task, setTask]= useState("");
  const[todo, setTodo]= useState([]);
  const[id, setId]= useState(1);

  function implementTask(){
    setTodo([...todo, {title: task, id: id}])
    setId(id+1);
    setTask("");
  }

  function deleteTask(delete_id){
    setTodo(todo.filter((item)=>(
      item.id!=delete_id
    )))
  }

  // function editTask(id){
  //   const updatedTodo= todo.map((item)=>(
  //     item.id===id?{...item, title: prompt("Edit task:", item.title) ||item.title}: item
  //   ))
  //   setTodo(updatedTodo)
  // }

  function editTask(id){
    setTodo(todo.map((item)=>(
      item.id==id?{...item, title: prompt(item.title) || item.title}: item
    )))
  }


  return (
    <div>
        <input type="text" placeholder="Add task" onChange={(e)=>setTask(e.target.value)} value={task}/>
        <button onClick={implementTask}>Add</button>

        <ul>
          {
            todo.map((item)=>(
              <li key={item.id}>{item.title}  <button onClick={()=>deleteTask(item.id)}>Delete</button> <button onClick={()=>editTask(item.id)}>Edit</button> </li>
            ))
          }
        </ul>
    </div>
  );
}

export default App;
