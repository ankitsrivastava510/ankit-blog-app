// src/features/blog/blogSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { blogJson } from '../assets/blog';
export interface Blog {
    id?: string;
    title: string;
    content: string;
    category: string;
    image: string,
    like: {
        id: string,
    } | {};
}

export interface BlogState {
    blogs: Blog[];
    selectedBlog: Blog
}

const initialState: BlogState = {
    blogs: blogJson,
    selectedBlog: {
        category: '',
        content: '',
        like: {},
        title: '',
        id: '',
        image: ''
    }
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        getBlogs: (state) => state,
        addBlog: (state, action: PayloadAction<Omit<Blog, "id">>) => {
            console.log(state, '1029384')
            if (action.payload) {
                const id = uuidv4()
                state.blogs.push({ ...action.payload, id, like: { [id]: false }, image: 'https://gravitec.net/blog/wp-content/uploads/2023/08/rsz_alexmaker_limitations_of_mind_in_chroma_universe_c43069fb-1540-458f-9da5-790b6fc105f5.jpg' });
            }

        },
        editBlog: (state, action: PayloadAction<Blog>) => {
            const index = state.blogs.findIndex((blog) => blog.id === action.payload.id);
            if (index !== -1) {
                state.blogs[index] = action.payload;
            }
        },
        deleteBlog: (state, action: PayloadAction<string>) => {
            const index = state.blogs.findIndex((blog) => blog.id === action.payload);
            if (index !== -1) {
                state.blogs.splice(index, 1);
            }
        },
        getBlogById: (state, action: PayloadAction<string>) => {
            const index = state.blogs.findIndex((blog) => blog.id == action.payload);
            if (index !== -1) {
                state.selectedBlog = state.blogs[index]
            }
        }
    },
});

export const { getBlogs, addBlog, editBlog, deleteBlog, getBlogById } = blogSlice.actions;

export default blogSlice.reducer;
