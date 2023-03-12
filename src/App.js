import React from "react";
import AppUI from "./AppUI";
import { TodoProvider } from "./components/TodoContext";



export default function App() {



  return (
    <TodoProvider>

      <AppUI />
    </TodoProvider>
  );
}
