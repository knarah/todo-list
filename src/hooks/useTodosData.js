import React from "react";

export const useTodosData = () => {
  const [todos, setTodos] = React.useState(() => readTodos());

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
  };

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  return { todos, addTodo, editTodo, deleteTodo };
};

const readTodos = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};
