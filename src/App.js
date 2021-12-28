import { useReducer } from "react";
import { Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoContext from "./Context/TodoContext";
import TodoReducer from "./Context/reducer";
import TodoForm from "./Components/Inputform";
import Todos from "./Components/Todos";

const App = () => {

  //useReducer is a better way to handle complex state changes in our application. useStates is preferred for small changes
  const [todos, dispatch] = useReducer(TodoReducer, []);//This takes in two parameters the reducer function and the initial state and it returns and array of two elements one is the current state of the application and the other is the dispatch function through which we can update the state.

  return(
    <TodoContext.Provider value={{todos, dispatch}}>
      <Container fluid>
        <h1>Todo list app with Context API</h1>
        <Todos />
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  );

};

export default App;
