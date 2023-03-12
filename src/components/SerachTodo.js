import { Box, Input } from "@chakra-ui/react"
import React from "react";
import { TodoContext } from "./TodoContext";




export default function SerachTodo() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);

 const onSearchValueChange = (event) => {
  console.log(event.target.value)
  setSearchValue(event.target.value)
 };
 

  return (
    <Box mt="20px" mb="20px">

    <Input variant="outline"
     placeholder="buscar TODO"
     value={searchValue}
     onChange={onSearchValueChange}
     />
     
    </Box>
  )
}
