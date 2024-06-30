import { FC, useState } from 'react';
import { Box, Heading, Text, HStack, IconButton, Link, Badge, Image, LinkBox } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from "react-router-dom";

const BlogList: FC = () => {
    const posts = useSelector((state: any) => state.blog.blogs || [])
    const postsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const currentPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);


    return (
        <>
            {
                posts.length ? <>
                    <HStack spacing={4} align="stretch" margin={'20px'}>
                        {currentPosts.map((post: any) => (
                            // <Box >
                            //     <Heading fontSize="xl">{post.title}</Heading>
                            //     <Text mt={4}>{post.content}</Text>
                            // </Box>
                            <Link as={RouterLink} to={'/' + post.id} key={post.id}>
                                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                                    <Image src={post.image} alt={'image'} boxSize='200px' w={'100%'}
                                        objectFit='cover' />
                                    <Box display='flex' alignItems='baseline' marginTop={'10px'}>
                                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                                            {post.category}
                                        </Badge>
                                    </Box>
                                    <Box
                                        mt='1'
                                        fontWeight='semibold'
                                        as='h4'
                                        lineHeight='tight'
                                        noOfLines={1}
                                    >
                                        {post.title}
                                    </Box>


                                    <Box display='flex' mt='2' alignItems='center'>

                                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                            {post.content.substring(0, 100)}
                                        </Box>
                                    </Box>
                                </LinkBox>
                            </Link>
                        ))}
                    </HStack>
                    <HStack>
                        <IconButton
                            aria-label="Previous page"
                            icon={<ChevronLeftIcon />}
                            isDisabled={currentPage === 1}
                            onClick={handlePreviousPage}
                        />
                        <Text>{currentPage}</Text>
                        <IconButton
                            aria-label="Next page"
                            icon={<ChevronRightIcon />}
                            isDisabled={currentPage === totalPages}
                            onClick={handleNextPage}
                        />
                    </HStack>
                </>
                    : <Heading >
                        No Blog found, Please add here
                        <Link as={RouterLink} to="/new-post" color='teal.500'>
                            Add Blog
                        </Link>
                    </Heading>}
        </>
    );
};

export default BlogList;
