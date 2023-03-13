import React from "react";
import { Link } from 'react-scroll';

const Header = () => {
  return(
    <header className="header absolute left-0 top-0 w-full py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center lg:pr-6 pl-2">
          <div className="logo">
            <h1 className="text-white font-thin text-3xl">John <span className="font-black uppercase">Doe</span></h1>
          </div>
          <Link
            to="contact"
            smooth={true}
            className="btn bg-transparent border-white border-2 border-solid text-white capitalize font-semibold hover:bg-pink-500 hover:border-pink-500 rounded-full px-6 max-md:mr-2">Work with me</Link>
        </div>
      </div>
    </header>
  )
}

export default Header;