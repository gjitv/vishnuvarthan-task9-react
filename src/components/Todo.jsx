import React, { useEffect, useState } from "react";
import "./Todo.css";

const Todo = () => {
    const [name, setName] = useState("");
    const [item, setItem] = useState("");
    const [todos, setTodos] = useState(()=>{
        const localVal=localStorage.getItem("Items")
        if(localVal===null) return []
        return JSON.parse(localVal);
    });

    useEffect(()=>{
        localStorage.setItem("Items", JSON.stringify(todos))
    },[todos])
    const handleSubmit = (e) => {
        const checkName=name;
        const checkItem= item;
        e.preventDefault();
        if((checkName==="") || (checkItem=="")){
            alert("Enter valid name and task")
        }
        else{
        setTodos((currentTodo) => { 
            return [
                ...currentTodo,
                {
                    id: crypto.randomUUID(),
                    title: item,
                    completed: false,
                    name: name,
                },
            ];
        });
        setItem("");
        setName("")
    }
    };
    const deleteTodo=(id)=>{
        setTodos(currentTodo=>{    
            return currentTodo.filter(todo=>todo.id !==id);
        });
    }
    const updateTodo=(id)=>{
        setTodos(currentTodo=>{
          
        })
    }
    return (
        <div className="Todo">
            <h2>TODO LIST</h2>
            <h4>Add New Task</h4>
            <form  className="TodoForm">
                <input
                    name="assignToName"
                    type="text"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                    placeholder="Assign Task to - Eg: John"
                />
                <br />
                <input
                    type="text"
                    name="taskName"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    placeholder="Enter the task"
                    id="item"
                />
                <br />
                <button onClick={handleSubmit}>ASSIGN TASK</button>
            </form>
            <div className="Tasks">
                <h1>TASKS TO DO</h1>
                <ol className="List">
                    {todos.map((todo) => {
                        return<li key={todo.id}>
                                <p className="empName">{todo.name}</p>
                                <label className="label">
                                    <div>
                                        {todo.title}
                                    </div> 
                                    <div className="buttonsub">
                                        <button style={{backgroundColor:"green"}} onClick={()=>updateTodo(todo.id)}>Completed</button>
                                        <button style={{backgroundColor:"red"}} onClick={()=>deleteTodo(todo.id)}>Delete</button>   
                                    </div>     
                                </label>
                            </li>;
                    })}
                </ol>
            </div>
        </div>
    );
};

export default Todo;
