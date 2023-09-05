import React, { useRef } from "react";
import { addTask, deleteTask, editTask, editInput} from "./redux/TodoSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete , AiFillEdit } from "react-icons/ai";

const Todo = () => {
  const dispatch = useDispatch();

const inpRef=useRef()

const edit=(id)=>{
   
   dispatch(editInput(id))
}

  const todos = useSelector((state) => state.todo);
  console.log(todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.todo.value;
    dispatch(addTask(value));
  };

  const handleEdit=(e,id)=>{
e.preventDefault()
    const value=inpRef.current.value
 dispatch(editTask({todo:value, id:id}))
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" id="todo" />
        <button id="add-btn">Add Task</button>
        {todos.map((item, index) => {
          return (
            <div>
              <li>
               { (item.key==true) ? 
               <>
                {item.value}
                <AiFillDelete
                  onClick={() => {
                    dispatch(deleteTask(index));
                  }}
                />
                <AiFillEdit 
                onClick={()=>{edit(index)}}
                /> 
                </> :
                <>
         <input type="text" ref={inpRef}/>
         <button onClick={(e)=>{handleEdit(e,index)}}>save</button>      
         </>
           }
              </li>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default Todo;
