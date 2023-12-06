"use client";

import { Box, Heading, Image, Flex, Text, Spacer } from "@chakra-ui/react";

export default function Contratos() {
  const styleContratos = {
    boxSize: "7.5rem",
    m: "4rem",
  };

  return (
    <Box textAlign="center">
      <Heading>Contratos</Heading>
      <Flex w="100%" align="center">
        <Box sx={styleContratos}>
          <Image src={"influencer.svg"} />
          <Text>Contrato de influencer</Text>
        </Box>
        <Box sx={styleContratos}>
          <Image src={"Aviso_Privacidad.svg"} />
          <Text>Aviso de Privacidad</Text>
        </Box>
        <Box sx={styleContratos}>
          <Image src={"Pacto_Socios.svg"} />
          <Text>Pacto de Socios</Text>
        </Box>
        <Box sx={styleContratos}>
          <Image src={"Desarrollo_Software.svg"} />
          <Text>Desarrollo de software</Text>
        </Box>
      </Flex>
      <Flex>
        <Spacer />
        <Box sx={styleContratos}>
          <Image src={"Terminos_Condiciones.svg"} />
          <Text>Términos y Condiciones</Text>
        </Box>
        <Box sx={styleContratos}>
          <Image src={"Confidencialidad.svg"} />
          <Text>Confidencialidad</Text>
        </Box>
        <Box sx={styleContratos}>
          <Image src={"Publicitario.svg"} />
          <Text>Publicitario</Text>
        </Box>
        <Spacer />
      </Flex>
    </Box>
  );
}
