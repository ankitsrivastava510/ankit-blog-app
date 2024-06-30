import { Box, Link, Flex, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <Flex bg="teal.500" px={8} py={4} justifyContent="space-between" alignItems="center" height={'100px'}>
      <Box>
        <Link as={RouterLink} to="/" color="white" fontSize="lg" fontWeight="bold">
          Blog App
        </Link>
      </Box>
      <Box>
        <Button as={RouterLink} to="/" color="white" variant="ghost" mr={4}>
          Home
        </Button>
        <Button as={RouterLink} to="/new-post" color="white" variant="ghost">
          New Post
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
