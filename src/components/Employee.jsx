import React, { useState } from 'react'
import "./Employee.css"

const Employee = () => {

    const [name, setName] = useState("");
    const [employees, setEmployee]= useState([]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setEmployee((employe)=>{
            return[
                ...employe
                 ,{
                    id:crypto.randomUUID(),
                    name:name
                }
            ]
        });
        setName("")
    }

    return (
        <div>
            <h2>Add new member</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="assignToName"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Assign to ? Eg: John"
                />
                <br />
                <button>Add Employee</button>
            </form>
            <h1>Current Employees</h1>
            {employees.map((employee)=>{
                return  <div className='Employee'>
                            <h3>{employee.name}</h3>
                            <button>Add task</button>
                        </div>
            })}
        </div>
    )
}

export default Employee