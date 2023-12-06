"use client";

import {
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Box,
  Input,
} from "@chakra-ui/react";
export default function Portada() {
  const mainImage = {
    // filter: 'blur(8px)',
    objectFit: "contain",
    boxSize: "150px",
    m: "10",
  };

  return (
    <Flex align="center" borderTop={"1px"}>
      <Flex direction={"column"} w="60%" p="5" pl="10" align="center">
        {/* <Image m="2rem" src={"logo_pacto_blanco.png"} boxSize={"70%"} /> */}
        <Heading>PRO-IUS</Heading>
        <Text fontSize={"1.5rem"}>Real World Justice Funding</Text>
        <Image src="Pacto_Socios.svg" sx={mainImage} />
        {/* <Text fontSize={"1.5rem"}>Redactamos los términos y condiciones, y el aviso de privacidad  de tu página web.</Text> */}

        <Button bgColor={"rgba(0,0,0,0)"} color="#05D5FB" w="45%" border="1px">
          ask for Justice!
        </Button>
      </Flex>
    </Flex>
  );
}
