import React ,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import About from './components/About'
import Contact from './components/Contact';
import Error from './components/Error'
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';


const Grocery =lazy(()=>import('./components/Grocery'))

const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/restaurants/:resId',
        element:<RestaurantMenu/>
      },
      {
        path:'/grocery',
        element: <Suspense fallback={"Loading..."}><Grocery/></Suspense>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement:<Error/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
