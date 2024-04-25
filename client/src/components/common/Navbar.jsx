import React from "react";
import { Link } from "react-router-dom";
import XSvg from "../svgs/X";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    // <div className=" w-full flex items-center justify-between py-4">
    //   <div className="flex items-center">
    //     <Link to="/" className="flex justify-center md:justify-start">
    //       {/* <XSvg className="px-2 w-12 h-12 rounded-full fill-white hover:bg-stone-900" /> */}
    //       Logo
    //     </Link>

    //     <label className="input input-bordered flex items-center gap-2">
    //       <input type="text" className="grow" placeholder="Search" />
    //       <IoSearchOutline />
    //     </label>
    //   </div>

    //   <div>
    //     <h1>Container</h1>
    //   </div>
    // </div>
    <div className="navbar bg-base-100 border-b">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to="/">
          daisyUI
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
