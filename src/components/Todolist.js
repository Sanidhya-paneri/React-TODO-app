import React, { useState } from 'react'
import {Todotask} from './Todotask'

export default function Todolist(props) {
    const [task, setTask] = useState("");
    const onSubmit = (e)=>{
        e.preventDefault();
        if(!task){
            alert("Task can not be empty.");
        }
        else{
        props.addTodo(task);
        setTask("");
    }
    }
    return (
        <div className="container">
             <div id ="task-container">
                 <div id="form-wrapper">

                    <form id="form" onSubmit={onSubmit}>
                    <div className="flex-wrapper">
                        <div style={{flex: 6}}>
                            <input className="form-control"  value={task} onChange={(e)=>setTask(e.target.value)} id="title"  type="text" name="title" placeholder="Add task.." />
                         </div>

                         <div style={{flex: 1}}>
                            <input id="submit" className="btn btn-warning" type="submit" name="Add" />
                          </div>
                      </div>
                    </form>

                    {props.todolist.length===0? "No Todos to display":
                    props.todolist.map((todo)=>{
                        return  <Todotask todotasks ={todo} key={todo.id} onDelete={props.onDelete} strikeUnstrike={props.strikeUnstrike}/>
                    })}
                  

                 </div>
             </div>
         </div>
    )
}
