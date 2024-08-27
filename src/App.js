import logo from './logo.svg';

import Navbar from './components/Navbar'
import Body from './components/Body';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import About from './components/About'
import UserContext from "./uitls/UserContext";
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import appStore from './uitls/appStore';

function App() {

  const [userName,setUserName] =useState();

  useEffect(()=>{
  //make an api call
  const data={
    name:"Pavan G"
  }
  setUserName(data.name)
  },[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser :userName , setUserName}}>
    <div className="App">
       <Navbar/>
       <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
}


export default App;
