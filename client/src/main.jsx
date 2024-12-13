import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { store } from './redux/Store.js'
import { Provider } from 'react-redux'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/pages/Home.jsx';
import SignIn from './components/authrization/SignIn.jsx';
import NotFound from './components/pages/NotFound.jsx';
import PostForm from './components/pages/PostForm.jsx';
import SignUp from './components/pages/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'/',
        element : <Home/>
      },
      {
        path:'/signin',
        element : <SignIn/>
      },
      {
        path:'/host-home',
        element : <PostForm/>
      },
      {
        path:'/signup',
        element : <SignUp/>
      },
    ]
  },
  {
    path:'*',
    element: <NotFound/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router={router} />
    </Provider>

  </StrictMode>,
)
