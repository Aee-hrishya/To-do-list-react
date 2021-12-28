import { useState, useContext } from "react"; //We import the usestate here to store the temporary states
import { FormGroup, Button, Input, Form, InputGroup } from "reactstrap";
import TodoContext from "../Context/TodoContext";
import { ADD_TODO } from "../Context/action.types";
import { v4 } from "uuid"; //For generating Random ID's for the application

const TodoForm = () => {

    const [todoString, setTodoString] = useState("");
    const { dispatch } = useContext(TodoContext);


    const changeHandler = (e) => {

        setTodoString(e.target.value); //Whatever value we get here will be set automatically to the todoString basically our state will get updated from the initial empty state. we always update the state from the function that we get with it
    };

    const clickHandler = (e) => {
        e.preventDefault(); //Prevent the default form behaviour which is reloading 
        if (todoString === "") {
            return alert("Please enter something");
        }

        //Creating an object of what we  want to dispatch(Basically what we want to add to the todo list)
        const todo = {
            todoString,
            id: v4() //Using uuid to generate random id strings
        }

        //Here we dispatch the state and the necessary changes so that they can be stored in a central place and our main state gets updated
        dispatch({
            type: ADD_TODO,
            payload: todo
        });

        //To empty the input field after adding the task 
        setTodoString("");

    };

    return (
        <Form>
            <FormGroup>
                <InputGroup>
                    <Input type="text" name="todo" id="todo" placeholder="Enter your Task here..." value={todoString} onChange={changeHandler} />
                    <Button color="warning" onClick={clickHandler} >Add</Button>
                </InputGroup>
            </FormGroup>
        </Form>
    );

};

export default TodoForm;