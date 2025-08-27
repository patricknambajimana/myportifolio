import React from "react";
import { Link} from "react-router";

const NavBar = () => {
  return (
    <div className="bg-cyan-600 p-7 flex justify-between  shadow">
      <div>
        <img src="" alt="" />
      </div>
      <div className="flex gap-5 text-2xl capitalize text-white mr-20 font-bold">
        <Link
          to="/"
          className="hover:underline decoration-cyan-400 decoration-5">
          home
        </Link>
        <Link
          to="/about"
          className="hover:underline decoration-cyan-400 decoration-5">
          about
        </Link>
        <Link
          to="/contact"
          className=" hover:underline decoration-cyan-400 decoration-5 ">
          contact
        </Link>
        <Link
          to="/skills"
          className=" hover:underline decoration-cyan-400 decoration-5">
          skills
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
