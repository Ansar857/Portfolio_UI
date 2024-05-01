// components/TypeformPopup.js
"use client"
import { useEffect } from 'react';
import { createPopup } from '@typeform/embed';
import { Box, Button, Center, Flex } from '@chakra-ui/react';
import '@typeform/embed/build/css/popup.css';

const TypeformPopup = () => {
  useEffect(() => {
    const { toggle } = createPopup("obVXEEKd");
    const button = document.getElementById('typeform-popup-button');
    if (button) {
      button.onclick = toggle;
    }
  }, []);

  return (
    <Box>
    <Box id="typeform-popup-button" onClick={() => {}}  display={"flex"} flexDir={"row"} justifyContent={"center"} alignItems={"center"} gap={0} w={"fit-content"} pos={"relative"} _hover={{
        "& div": {
            bgColor: "PennBlue",
            color: "Yellow",
        }
    }} cursor={"pointer"} transition={"all"}>
        <Box bgColor={"Yellow"} transform={"rotate(130deg)"} h={"31px"} borderRadius={"5px"} w={"30px"} pos={"absolute"} left={"-7px"} top={"5px"} ></Box>
        <Center bgColor={"Yellow"} zIndex={10} borderRadius={"10px"} w={"312px"} h={"40px"} color={"PennBlue"} fontWeight={500} fontSize={16} lineHeight={"20px"} textAlign={"center"} >Request a Demo</Center>
        <Box bgColor={"Yellow"} transform={"rotate(130deg)"} h={"31px"} borderRadius={"5px"} w={"30px"} pos={"absolute"} right={"-9px"} top={"5px"} ></Box>
    </Box>
</Box>
    // <Flex justify="center" align="center" h="100vh">
    //   <Button
    //     id="typeform-popup-button"
    //     colorScheme="blue"
    //     onClick={() => {}}
    //     _hover={{ bg: 'blue.700' }}
    //     borderRadius="md"
    //     px="4"
    //     py="2"
    //     fontWeight="bold"
    //   >
    //     Open Form Popup
    //   </Button>
    // </Flex>
  );
};

export default TypeformPopup;
