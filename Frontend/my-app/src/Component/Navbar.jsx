import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      justifyContent="space-between"
      color="white"
      backgroundColor="#003366"
      padding="20px"
   
    >
      <Link as={RouterLink} to="/" color="white" textDecoration={"none"} fontSize={"18px"}>
        Home
      </Link>

      <Link as={RouterLink} to="/" color="white" textDecoration={"none"} fontSize={"18px"}>
        Genre
      </Link>

      <Link as={RouterLink} to="/" color="white" textDecoration={"none"} fontSize={"18px"}>
        Leader Board
      </Link>

      <Link as={RouterLink} to="/" color="white" textDecoration={"none"} fontSize={"18px"}>
        Daily Quiz
      </Link>

      <Link as={RouterLink} to="/" color="white" textDecoration={"none"} fontSize={"18px"}>
        Logout
      </Link>
    </Flex>
  );
};

export default Navbar;
