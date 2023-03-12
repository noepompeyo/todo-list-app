import { Box,   Spacer ,chakra, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,  ModalFooter, Button} from "@chakra-ui/react"

export default function CreateTodoButton({children}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Box display="flex"
   
    >
      
      <Spacer/>
    <chakra.button
    onClick= { onOpen }
    px="6"
    py="4"
    bg="blue.100"
    rounded="xl"
    _hover={{bg:"blue.600"}}
    
    >
      ➕ 
      </chakra.button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader align="center">Añadir nuevo todo</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
           {children}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
    

      </Modal>
    </Box>
    </>

    
  )
}
