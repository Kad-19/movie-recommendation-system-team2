import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  const [show, setShow] = useState(false);
  return (
    <nav className="bg-gray-800 text-white px-4 py-2 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">LOGO</h1>

        <ul className="md:flex space-x-4 hidden ">
          <li>
            <NavLink to="/" className="hover:underline">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className="hover:underline">
              Movies
            </NavLink>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Wish-List
            </a>
          </li>
          <li>
            <NavLink to="/login" className="hover:underline">
              Login
            </NavLink>
          </li>
        </ul>

        <div className="flex space-x-4 md:hidden mr-5">
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
        </div>
      </div>
    </nav>
  );
}
