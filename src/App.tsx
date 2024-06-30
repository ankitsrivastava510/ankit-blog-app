

import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ChakraProvider } from '@chakra-ui/react';
import store from './utils/store';
import { Provider } from 'react-redux';
import { BlogProvider } from './utils/reducer/blogContext';

function App() {
  return (
    <>
      <ChakraProvider>
        <Provider store={store}>
          <BlogProvider>
            <RouterProvider router={router} />
          </BlogProvider>
        </Provider>
      </ChakraProvider>
    </>
  );
}

export default App;
