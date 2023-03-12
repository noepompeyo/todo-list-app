import {Box, Text, chakra, Spacer} from '@chakra-ui/react'

export default function TodoItem(props) {


  
// asi se crea un cambio en l ainterfaz con chakra ui
  const textChange = (props) => {
    let as
    if (props.completed === true) {
    as ="del"
    } else {
    as ="kbd"
    }
    return as
  }

  return (
    <Box 
    
    display="flex" 
    alignItems="center" 
  
    mb="20px" 
    bg="orange.300" 
    p="10px" 
    borderRadius="lg" 
    >
        <chakra.button
        px="3"
        py="2"
        bg="green.100"
        rounded="md"
        _hover={{bg:"green.600"}}
        onClick={props.onComplete}
        >
          ✔
        </chakra.button>
        
      
            
              <Text 
              as={textChange(props)}
              
              pl={2}
              fontSize="lg"
              
          
              
              >
              {props.text}

              </Text>
        <Spacer/>
              
      <chakra.button
        px="3"
        py="2"
        bg="red.100"
        rounded="md"
        _hover={{bg:"red.600"}}
        onClick={props.onDelete}
        
        
      >
        ❌
      </chakra.button>
    </Box>
  )
  }
