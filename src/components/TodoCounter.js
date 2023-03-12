import React from "react";
import {Heading} from "@chakra-ui/react"
import { TodoContext } from "./TodoContext"

export default function TodoCounter() {
 const {totalTodos, completedTodos} = React.useContext(TodoContext);


  return (
    <Heading>
 Has completado {completedTodos} de {totalTodos} TODOs
    </Heading>
  )
}
