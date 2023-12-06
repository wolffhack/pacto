"use client";

import { Box, Heading, Image, Flex, Text, Spacer } from "@chakra-ui/react";

export default function Contratos() {
  const styleContratos = {
    boxSize: "7.5rem",
    m: "4rem",
  };

  return (
    <Box textAlign="center">
      <Heading>Contracts</Heading>
      <Flex w="100%" align="center">
        <Box sx={styleContratos}>
          <Image src={"influencer.svg"} />
          <Text>Influencer Contract</Text>
        </Box>
        <Box sx={styleContratos}>
          <Image src={"Aviso_Privacidad.svg"} />
          <Text>Privacy Politics</Text>
        </Box>
        <Box sx={styleContratos}>
          <Image src={"Pacto_Socios.svg"} />
          <Text>Partner Pact</Text>
        </Box>
        <Box sx={styleContratos}>
          <Image src={"Desarrollo_Software.svg"} />
          <Text>Software Devellopment</Text>
        </Box>
      </Flex>
      <Flex>
        <Spacer />
        <Box sx={styleContratos}>
          <Image src={"Terminos_Condiciones.svg"} />
          <Text>Terms & Conditions</Text>
        </Box>
        <Box sx={styleContratos}>
          <Image src={"Confidencialidad.svg"} />
          <Text>Confidenciality</Text>
        </Box>
        <Box sx={styleContratos}>
          <Image src={"Publicitario.svg"} />
          <Text>Publicity</Text>
        </Box>
        <Spacer />
      </Flex>
    </Box>
  );
}
