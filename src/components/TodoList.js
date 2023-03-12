import {Box, Card, Input, List} from "@chakra-ui/react"


export default function TodoList(props) {
  return (
    <Box as="section"  >


            {props.children}
      
    </Box>
    
  )
}
