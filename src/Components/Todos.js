import { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheck } from "react-icons/fa";
import { REMOVE_TODO } from "../Context/action.types";
import TodoContext from "../Context/TodoContext";

const Todos = () => {

    const { todos, dispatch } = useContext(TodoContext);


    return (
        <ListGroup className="mt-5 mb-2 items">
            {todos.map(todo => (
                <ListGroupItem className="border-2 border-success" key={todo.id}>
                    {todo.todoString}
                    {/*the below onClick handler is for removing element from todo it takes dispatch and it contains the type of action to be performed and type of payload(information) */}
                    <span onClick={() => {
                        dispatch({
                            type: REMOVE_TODO,
                            payload: todo.id
                        });
                    }}><FaCheck /></span>
                </ListGroupItem>
            ))}
        </ListGroup>
    );

}

export default Todos;