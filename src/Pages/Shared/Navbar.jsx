import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router"; 
import { AuthContext } from "../../Context/Authcontext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "light" ? "light" : "dark"
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.querySelector("html").setAttribute("data-theme", savedTheme);
  }, []);

  const handleThemeChange = (event) => {
    const newTheme = event.target.checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme);
  };

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOutUser()
          .then(() => {
            Swal.fire("Logged Out!", "You have been logged out successfully.", "success");
          })
          .catch((error) => {
            Swal.fire("Error!", error.message || "Something went wrong.", "error");
          });
      }
    });
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gray-800 text-white sticky top-0  shadow-sm">
      <div className="flex-1">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52"
          >
            {links}
            {user ? (
              <li><button onClick={handleSignOut}>Sign Out</button></li>
            ) : (
              <>
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
              </>
            )}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">NextHire</NavLink>
      </div>

      <div className="hidden lg:flex flex-1 justify-between">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="hidden lg:flex items-center space-x-2">
        {user ? (
          <button className="btn btn-sm" onClick={handleSignOut}>Sign Out</button>
        ) : (
          <>
            <NavLink to="/register" className="btn btn-sm">Register</NavLink>
            <NavLink to="/login" className="btn btn-sm">Login</NavLink>
          </>
        )}

        <label className="flex cursor-pointer items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            className="toggle theme-controller"
            checked={theme === "dark"}
            onChange={handleThemeChange}
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
