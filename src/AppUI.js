import React from "react";
import CreateTodoButton from "./components/CreateTodoButton";
import { TodoContext } from "./components/TodoContext";
import SerachTodo from "./components/SerachTodo";
import TodoCounter from "./components/TodoCounter";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import { Box, Center, Container } from "@chakra-ui/react";
import TodoForm from "./components/TodoForm";


export default function AppUI() {
  const { 
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    
  
  } =
    
    React.useContext(TodoContext);

  return (
    <Container bg="orange.300" h="100vh" maxW="1240px" mx="auto">
      <Center>
        <Box bg="white" mt="100px" w={520} p={8} borderRadius="60px">
          <TodoCounter />

          <SerachTodo />

          <TodoList>
            {error && <p>desesperate hubo eun error</p>}
            {loading && <p>Eatmis cargando , no sesperes</p>}
            {!loading && !searchedTodos.length && <p>crea tu primer todo</p>}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          

          <CreateTodoButton >
          <TodoForm/>
          </CreateTodoButton>
        </Box>
      </Center>
    </Container>
  );
}
