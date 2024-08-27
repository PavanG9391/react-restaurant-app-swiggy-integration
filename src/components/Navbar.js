import logo from "../uitls/images/logo.jfif";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../uitls/customHooks/useOnlineStatus";
  import UserContext from "../uitls/UserContext";
  import { useSelector } from "react-redux";
const Navbar = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus()
  const { loggedInUser } = useContext(UserContext)

  const cartItems =useSelector((store)=>store.cart.items)
  
  return (
    <div className="flex justify-between bg-pink-100 sm:bg-yellow-50 lg:bg-green-50 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-56" src={logo} alt="no logo found" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            OnlineStatus:{onlineStatus ? '🟢':'🔴'}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About US</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact US</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
          <Link to="/cart">Cart-({cartItems.length} items)</Link>
            </li>
          <button
            className="login"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
