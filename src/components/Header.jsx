import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const handleMenuToggle = () => {
    setMenu(!menu);
  };
  console.log(menu);
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/Services"}>Services</NavLink>
      </li>
    </>
  );
  return (
    <header className="relative">
      <div className="bg-gray-100 text-lg">
        <nav className="flex items-center justify-between relative py-2 lg:py-3 w-11/12 mx-auto">
          <button
            className={`${
              menu ? "bg-red-800" : "bg-slate-950"
            } text-xl  p-2 rounded-full md:hidden`}
            onClick={handleMenuToggle}
          >
            {!menu ? <FaBars /> : <FaXmark />}
          </button>

          <Link
            to={"/"}
            className="text-2xl font-bold text-orange-500 flex items-center gap-2"
          >
            {" "}
            <img className="w-8" src="/public/vintage-vocab.png" alt="" />
            V-Vocab
          </Link>
          {/* Large Device Menu */}
          <ul className="hidden md:flex gap-5 ">{navLinks}</ul>
          <button className="btn btn-warning">button</button>
        </nav>
      </div>
      {/* Small Device Menu */}
      <ul
        className={`${
          !menu ? "hidden" : "block"
        } w-54 bg-gray-100 rounded-xl w-32 p-6 space-y-1 absolute left-5`}
      >
        {navLinks}
      </ul>
    </header>
  );
};

export default Header;
