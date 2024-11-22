import { useContext, useState, useEffect, useRef } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [menu, setMenu] = useState(false);
  const menuRef = useRef(null); // Reference to the menu for detecting outside clicks

  const handleMenuToggle = () => {
    setMenu(!menu);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="hover:text-orange-500 transition-colors">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/vocabulary"
          className="hover:text-orange-500 transition-colors"
        >
          Vocabulary
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/user-profile"
          className="hover:text-orange-500 transition-colors"
        >
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className="hover:text-orange-500 transition-colors"
        >
          Contact us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 backdrop-blur-2xl">
      <header className="relative">
        <div className="text-lg shadow-md">
          <nav className="flex items-center justify-between py-2 lg:py-3 w-11/12 mx-auto">
            {/* Mobile Menu Toggle Button */}
            <button
              className={`${
                menu && "bg-red-800"
              } text-xl text-white p-2 rounded-full md:hidden`}
              onClick={handleMenuToggle}
              aria-label="Toggle menu"
            >
              {!menu ? <FaBars className="text-black" /> : <FaXmark />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="text-xl md:text-2xl font-bold text-orange-500 flex items-center gap-2"
            >
              <img
                className="w-6 md:w-8"
                src="/vintage-vocab.png"
                alt="V-Vocab Logo"
              />
              V-Vocab
            </Link>

            {/* Large Device Menu */}
            <ul className="hidden md:flex gap-8">{navLinks}</ul>

            {/* Login/Logout Section */}
            <div>
              {user ? (
                <div className="flex items-center gap-3">
                  <img
                    className="w-12 h-12 object-cover rounded-full"
                    src={user.photoURL}
                    alt="User Profile"
                  />
                  <button onClick={signOutUser} className="btn btn-warning">
                    Log out
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <FaUser className="text-2xl" />
                  <Link to="/login" className="btn btn-warning">
                    Login
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Small Device Menu */}
        <ul
          ref={menuRef}
          className={`${
            menu ? "block" : "hidden"
          } bg-gray-100 rounded-lg shadow-md p-6 space-y-3 absolute top-16 left-5 w-48 z-50 transition-transform`}
        >
          {navLinks}
        </ul>
      </header>
    </div>
  );
};

export default Header;
