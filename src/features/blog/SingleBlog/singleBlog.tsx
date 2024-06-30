// BlogPage.tsx
import { FC, useContext, useEffect } from 'react';
import { Box, Heading, Text, Button, Link, Image } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog, getBlogById } from '../../../utils/blogSlice';
import { BlogContext } from '../../../utils/reducer/blogContext';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';



const SingleBlog: FC = () => {
    const { dispatch } = useContext(BlogContext);
    const reduxDispatch = useDispatch();
    const history = useNavigate();
    const params: any = useParams();
    useEffect(() => {
        reduxDispatch(getBlogById(params.id));
    }, [params])
    const post = useSelector((state: any) => state.blog.selectedBlog)

    const handleLike = () => {
        dispatch({ type: post.like[post.id] ? 'UNLIKE' : 'LIKE', payload: { id: post.id } });
    };

    const handleDelete = () => {
        reduxDispatch(deleteBlog(post.id || ''));
        history('/')
    };

    const handleEdit = () => {
        history(`/edit-post/${post.id}`);
    };

    if (!post.id) {
        return <>
            <Heading>No BlogId Found</Heading >
            <Link as={RouterLink} to="/new-post" color='teal.500'>
                Add New Here
            </Link>
        </>
    }
    return (
        <>
            {post ? <Box p={5} shadow="md" borderWidth="1px" height={'100%'}>
                <Image src={post.image} alt={'image'} boxSize='300px' w={'100%'}></Image>
                <Heading fontSize="xl" mt={'10px'}>{post.title}</Heading>
                <Text mt={4}>{post.content}</Text>
                <Button mt={4} colorScheme={post.like[String(post.id)] ? 'teal' : 'gray'} onClick={handleLike} mx={'10px'}>
                    {post.like[post.id] ? 'Unlike' : 'Like'}
                </Button>
                <Button mt={4} colorScheme="red" onClick={handleDelete}>
                    Delete
                </Button>


                <Button mt={4} colorScheme="yellow" onClick={handleEdit} mx={'10px'}>
                    Edit
                </Button>
            </Box> : <Heading >
                No Blog found, Please see all blog
                <Link as={RouterLink} to="/" color='teal.500'>
                    Here
                </Link>
            </Heading>}
        </>

    );
};

export default SingleBlog;
