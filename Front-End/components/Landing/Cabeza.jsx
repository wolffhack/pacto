"use client";
import { Flex, Image, Button } from "@chakra-ui/react";
import { ethers } from "ethers";
import { useState } from "react";

export default function Heeader() {
  return (
    <Flex
      // bgColor={"black"}
      color="#05D5FB"
      justify="space-between"
      align={"center"}
      h="10vh"
    >
      <Image
        src="Logo_pacto_blanco.png"
        objectFit={"contain"}
        boxSize={"80px"}
      />
      {/* <Button bgColor={"#05D5FB"} color="#000575" >
        Connect Wallet
      </Button>
      <h3>Wallet Address: </h3> */}
    </Flex>
  );
}
