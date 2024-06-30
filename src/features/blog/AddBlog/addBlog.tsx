import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { Formik, Form, Field, FieldProps } from 'formik';
import { useDispatch } from 'react-redux';
import { addBlog } from '../../../utils/blogSlice';
import { useNavigate } from 'react-router-dom';
interface FormValues {
    title: string;
    category: string;
    content: string;

}

const AddBlog: React.FC = () => {
    const initialValues: FormValues = { title: '', category: '', content: '' };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const redirectToHomePage = () => {
        navigate('/')
    }
    return (
        <Box p={4}>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    // Handle form submission here
                    actions.setSubmitting(false);
                    console.log(values);
                    dispatch(addBlog(values as any));
                    navigate('/')
                }}
                onReset={redirectToHomePage}
            >
                {props => (
                    <Form>
                        <Field name="title">
                            {({ field }: FieldProps<string, FormValues>) => (
                                <FormControl>
                                    <FormLabel htmlFor="title">Title</FormLabel>
                                    <Input {...field} id="title" placeholder="Title" />
                                </FormControl>
                            )}
                        </Field>
                        <Field name="category">
                            {({ field }: FieldProps<string, FormValues>) => (
                                <FormControl mt={4}>
                                    <FormLabel htmlFor="category">category</FormLabel>
                                    <Input {...field} id="category" placeholder="category" />
                                </FormControl>
                            )}
                        </Field>
                        <Field name="content">
                            {({ field }: FieldProps<string, FormValues>) => (
                                <FormControl mt={4}>
                                    <FormLabel htmlFor="content">Content</FormLabel>
                                    <Textarea {...field} id="content" placeholder="Content" />
                                </FormControl>
                            )}
                        </Field>
                        <Box mt={4}>
                            <Button colorScheme="teal" isLoading={props.isSubmitting} type="submit">
                                Submit
                            </Button>
                            <Button colorScheme="gray" ml={4} onClick={props.handleReset}>
                                Cancel
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default AddBlog;
