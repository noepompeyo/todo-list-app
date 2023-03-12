import React from 'react'
import { TodoContext } from './TodoContext'
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';


export default function TodoForm() {
    
    const [newTodoValue,setTodoValue] = React.useState('');
    const {
        addTodo,
    } = React.useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
    };
    const onChange = (event) => {
        setTodoValue(event.target.value)
    };
    
  return (
    <>
    <FormControl >
        <FormLabel >
            Escribe tu nueva tarea por hacer ...
        </FormLabel>
        

    </FormControl>

    <form onSubmit={onSubmit}>
        
        <Input
        value={newTodoValue}
        onChange={onChange}
        placeholder='cortar la cebolla para el almuerzo'
        />
        <div>
            
            <Button 
            type='submit'
            colorScheme='green' mr={3} mt={6} 
            
            >
              Add todo
            </Button>
        </div>
    </form>
        </>
  )
}

