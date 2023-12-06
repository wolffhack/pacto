"use client";

import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Nosotros() {
  return (
    <Flex
      direction={"column"}
      align={"center"}
      borderTop={"1px"}
      borderStyle={"dotted"}
    >
      <Heading m="3rem">Nosotros</Heading>
      <Flex>
        <Image src="Pacto_image_01.jpg" rounded={"10%"} w="50%" m="1.5rem" />
        <Flex direction="column" m="1.5rem">
          <Text fontSize={"1.5rem"}>Web3 Lawyers</Text>
          <Text mt="1rem">
            Welcome to your legal DAO platform,
            <br /> accesibles y justos para empresarios y empresas <br /> del
            entorno digital.
          </Text>
          <Text mt="1rem">
            Nosotros te protegemos y somos transparentes, <br /> sin
            malentendidos y documentos confusos.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
