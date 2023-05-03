import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Components/Home.jsx';
import Blog from './Components/Blog.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AuthProviders from './Components/AuthProviders.jsx';
import FavoriteRecipe from './Components/FavoriteRecipe.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
import Error from './Components/Error.jsx';
import AboutUs from './Components/AboutUs.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: 'recipe/:id',
        element: <PrivateRoute> <FavoriteRecipe></FavoriteRecipe></PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-server-abdussamadsaiful7.vercel.app/allData/${params.id}`)
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      }

    ]
  },
  {
    path: '/header',
    element: <Header></Header>
  },
  {
    path: '/footer',
    element: <Footer></Footer>
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
