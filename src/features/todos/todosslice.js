import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    
    todos:[{id:1,text:"do work",completed:false},

        {id:2,text:"go home ",completed:false}
     ]
}

const todosSlice=createSlice({
  name: 'todo',
initialState,
reducers:{

removeTodo:{
    reducer:(state,action)=>{
        state.todos=state.todos.filter(todo=>todo.id!=action.payload)
    }
}

,
addTodo:{

   reducer:(state,action)=>{
    state.todos.push(action.payload);
   },
    
    prepare :(text)=>{
        
        return{
            payload:{
                id:nanoid(),
                text,
                completed:false
            }
        }
    }
}


,
updateTodo:{

reducer:(state,action)=>{
 state.todos=state.todos.map(
        (todos)=>{
            if(todos.id==action.payload)
            {
                return {...todos,completed:true}
            }
            return todos;
        }
    )
}

}




}

});

export const { addTodo, removeTodo, updateTodo } = todosSlice.actions;
export default todosSlice.reducer;
