import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Body from './components/Body';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import About from './components/About'

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Outlet/>
    </div>
  );
}


export default App;
