import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { store } from './redux/Store.js'
import { Provider } from 'react-redux'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/pages/Home.jsx';
import SignIn from './components/authrization/SignIn.jsx';
import NotFound from './components/pages/NotFound.jsx';
import SignUp from './components/authrization/SignUp.jsx';
import Rooms from './components/pages/Rooms.jsx'
import RoomForm from './components/pages/RoomForm.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/host-home/:id',
        element: <RoomForm />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/room/:id',
        element: <Rooms />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <RouterProvider router={router} />
      <ToastContainer/>    

    </Provider>

  </StrictMode>,
)
