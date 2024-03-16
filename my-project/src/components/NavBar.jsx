import { useState,
  useContext } from "react";
import { NavLink } from "react-router-dom";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AnimationOutlinedIcon from '@mui/icons-material/AnimationOutlined';
import { ThemeContext } from "@/App";
import { Typography } from "@mui/material";
export default function NavBar() {
  const [show, setShow] = useState(false);
  const {theme, switchTheme}=useContext(ThemeContext)
  return (
    <nav className="dark:bg-zinc-800 dark:text-white bg-slate-100 text-slate-950 rounded-lg px-4 py-2 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
        </h1>

        <ul className="md:flex space-x-4 hidden ">
          <li>
            <button onClick={switchTheme}>
              {theme=="dark"?<LightModeIcon/>: <DarkModeIcon/>}
            </button>
          </li>
          <li>
            <NavLink to="/" className="hover:underline">
              <Typography>
                Home
              </Typography>
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className="hover:underline">
            <Typography>
              Movies
            </Typography> 
            </NavLink>
          </li>
          <li>
            <a href="#" className="hover:underline">
            <Typography>
              Wish-List
            </Typography> 
            </a>
          </li>
          <li>
            <NavLink to="/login" className="hover:underline">
              <Typography>
                Login
              </Typography>
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
