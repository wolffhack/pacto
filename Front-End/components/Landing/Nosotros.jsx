"use client";

import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useUserContext } from "../../context/User";
import { useRouter } from "next/navigation";

export default function Nosotros() {
  const { MetaLog } = useUserContext();
  const router = useRouter();

  const handleMetaLog = () => {
    MetaLog();
    router.push("/DID");
  };
  return (
    <Flex
      direction={"column"}
      align={"center"}
      borderTop={"1px"}
      borderStyle={"dotted"}
    >
      <Heading m="3rem">ASK FOR FUNDS</Heading>
      <Flex>
        <Image src="Pacto_image_01.jpg" rounded={"10%"} w="50%" m="1.5rem" />
        <Flex direction="column" m="1.5rem">
          <Text fontSize={"1.5rem"}>Descentralized Identity</Text>
          <Text mt="1rem">
            The first step to fund your case is create a descentralized
            identity.
          </Text>
          <Text mt="1rem">
            After one of our lawyers attestate your DID, you will be able tu
            submmit a funding request.
          </Text>
          <Button bgColor={"#05D5FB"} color="#000575" onClick={handleMetaLog}>
            Create DID
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
