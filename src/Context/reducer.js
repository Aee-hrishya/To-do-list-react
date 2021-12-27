import { ADD_TODO, REMOVE_TODO } from "./action.types";

const TodoReducer = (state, action) => {
    //action is an object that has a variety of properties
    switch (action.type) {
        case ADD_TODO: return [...state, action.payload];
        
        case REMOVE_TODO: return state.filter((todo) => todo.id !== action.payload);
            
        default: return state;
    }
}

export default TodoReducer;