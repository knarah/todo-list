import React from "react";

export const useTodosData = () => {
  //   localStorage.clear();
  const storedData = localStorage.getItem("todos");

  const [todos, setTodos] = React.useState(storedData && JSON.parse(storedData));
  //   const storedData = localStorage.getItem("todos");

  //   React.useEffect(() => {
  //     localStorage.setItem("todos", JSON.stringify([...todos]));
  //     const storedData = localStorage.getItem("todos");
  //     if (storedData) {
  //       setTodos(JSON.parse(storedData));
  //     }
  //   }, []);

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    const newTodoObj = {
      id: Math.random().toString(36).substr(2, 9),
      value: newTodo.value,
      isChecked: false,
    };

    setTodos((prevTodos) => [...(prevTodos || []), newTodoObj]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodoObj]));
  };

  const editTodo = (newTodo) => {
    if (typeof newTodo === "string") {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === newTodo) {
          return {
            ...todo,
            isChecked: !todo.isChecked,
          };
        } else return todo;
      });

      setTodos(updatedTodos);
    } else {
      setTodos((prev) => {
        const updatedTodos = prev.map((todo) => {
          if (todo.id === newTodo.id) {
            return { ...todo, value: newTodo.value };
          } else return todo;
        });

        return updatedTodos;
      });
    }
    // localStorage.setItem("todos", JSON.stringify([...todos, newTodoObj]));
  };

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  return { todos, addTodo, editTodo, deleteTodo };
};
