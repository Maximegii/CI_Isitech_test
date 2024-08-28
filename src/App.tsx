import { useState } from "react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Input } from "./components/input";

type Todo = {
  value: string;
  isDone: boolean;
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const addNewTodo = () => {
    const newTodosValue = [
      ...todos,
      {
        value: inputValue,
        isDone: false,
      },
    ];
    setTodos(newTodosValue);
    setInputValue("");
  };

  return (
    <>
      <p className="text-red-500">Hello World</p>

      {todos.map((todo, idx) => {
        return (
          <div  key={idx}>
            <div data-testid="list" >{todo.value}</div>
            <Checkbox
              onChange={() => {
                const newTodosValue = todos.map((todo, todoIdx) => {
                  if (todoIdx === idx) {
                    return { ...todo, isDone: !todo.isDone };
                  }
                  return todo;
                });

                setTodos(newTodosValue);
              }}
              checked={todo.isDone}
            />
          </div>
        );
      })}
      <Button text="Add task" onClick={addNewTodo} />
      <Input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          console.log(inputValue);
        }}
        type="text"
        placeholder="New Task"
      />
    </>
  );
}

export default App;
