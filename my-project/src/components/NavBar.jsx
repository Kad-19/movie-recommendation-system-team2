import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function NavBar() {
  const [show, setShow] = useState(false);
  return (
    <nav className="bg-gray-800 text-white px-4 py-2 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">CinemaScope</h1>

        <ul className="md:flex space-x-4 hidden ">
          <li>
            <NavLink
              to="/"
              className="hover:font-semibold transition-all duration-300 ease-in-out"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className="hover:font-semibold transition-all duration-300 ease-in-out"
            >
              Movies
            </NavLink>
          </li>
          <li>
            <a
              href="#"
              className="hover:font-semibold transition-all duration-300 ease-in-out"
            >
              Wish-List
            </a>
          </li>
          <li>
            <NavLink
              to="/login"
              className="hover:font-semibold transition-all duration-300 ease-in-out"
            >
              Login
            </NavLink>
          </li>
        </ul>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <FontAwesomeIcon icon={faBars}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <NavLink to="/" className="hover:underline w-[100%] h-[100%]">
                  Home
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink
                  to="/movies"
                  className="hover:underline w-[100%] h-[100%]"
                >
                  Movies
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink
                  to="/login"
                  className="hover:underline w-[100%] h-[100%]"
                >
                  Login
                </NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* <div className="flex space-x-4 md:hidden mr-5">
          <button onClick={() => setShow((prev) => !prev)}>///</button>
          {show && (
            <ul className="flex-col space-x-4  absolute right-5 top-16 text-white  gap-3 shadow-lg ">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  login
                </a>
              </li>
            </ul>
          )}
          
        </div> */}
      </div>
    </nav>
  );
}
