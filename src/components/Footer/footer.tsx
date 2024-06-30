import { Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="teal.500" p={4} color="white" textAlign="center" height={'100px'}>
      <Text>© {new Date().getFullYear()} Blog App</Text>
      <Text>
        <Link color="teal.200" href="https://github.com/your-github-username" isExternal>
          Ankit Blog
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;