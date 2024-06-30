import { Dispatch, createContext, useEffect, useReducer } from 'react';
import { Blog, editBlog, getBlogById } from '../blogSlice';
import store from '../store';
import { useDispatch } from 'react-redux';
interface BlogState {
    blog: { blogs: Blog[] };
}
const initialState = {
    blog: { blogs: [] },
};
type BlogAction =
    | { type: 'LIKE', payload: any }
    | { type: 'UNLIKE', payload: any }
    | { type: 'UPDATE_STATE', payload: any };


export function blogReducer(state: any, action: BlogAction) {
    const reduxDispatch = useDispatch();

    const index: any = state.blog.blogs.findIndex((blog: any) => blog.id === action.payload.id);
    console.log(state.blog.blogs[index], index, 'asas')
    switch (action.type) {
        case 'LIKE':
            if (index !== -1) {
                reduxDispatch(editBlog({ ...state.blog.blogs[index], like: { ...state.blog.blogs[index].like, [action.payload.id]: true } }));
                reduxDispatch(getBlogById(state.blog.blogs[index].id));
            }
            return state
        case 'UNLIKE':
            if (index !== -1) {
                reduxDispatch(editBlog({ ...state.blog.blogs[index], like: { ...state.blog.blogs[index].like, [action.payload.id]: false } }));
                reduxDispatch(getBlogById(state.blog.blogs[index].id));

            }
            return state
        case 'UPDATE_STATE':
            return { ...state, ...action.payload }
        default:
            return state;
    }
}
interface BlogContextProps {
    state: BlogState;
    dispatch: Dispatch<BlogAction>;
}
export const BlogContext = createContext<BlogContextProps>({ state: initialState, dispatch: () => null });

export const BlogProvider = ({ children }: { children: any }) => {
    const [state, dispatch] = useReducer(blogReducer, store.getState());

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            dispatch({ type: 'UPDATE_STATE', payload: store.getState() });
        })
        return unsubscribe
    }, []);
    return (
        <BlogContext.Provider value={{ state, dispatch }}>
            {children}
        </BlogContext.Provider>
    );
};