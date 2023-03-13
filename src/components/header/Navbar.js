import React from 'react';
import { Link } from 'react-scroll';

export const Navbar = () => {
  return(
    <div className="navbar fixed bottom-10 m-auto inset-x-0 w-fit" style={{ zIndex: '9998' }}>
      <nav className="flex justify-between bg-slate-200/50 backdrop-blur-sm p-1 rounded-full shadow-lg">
      <Link
        className="px-3 cursor-pointer rounded-full w-12 h-12 flex items-center justify-center"
        activeClass="active"
        to="header"
        smooth={true}>
          <span className="material-icons-outlined text-slate-900">home</span>
      </Link>
      <Link
        className="px-3 cursor-pointer rounded-full w-12 h-12 flex items-center justify-center"
        activeClass="active"
        to="resume"
        smooth={true}>
          <span className="material-icons-outlined text-slate-900">boy</span>
        </Link>
      <Link
        className="px-3 cursor-pointer rounded-full w-12 h-12 flex items-center justify-center"
        activeClass="active"
        to="services"
        smooth={true}>
          <span className="material-icons-outlined text-slate-900">design_services</span>
        </Link>
      <Link
        className="px-3 cursor-pointer rounded-full w-12 h-12 flex items-center justify-center"
        activeClass="active"
        to="work"
        smooth={true}>
          <span className="material-icons-outlined text-slate-900">work_outline</span>
        </Link>
      <Link
        className="px-3 cursor-pointer rounded-full w-12 h-12 flex items-center justify-center"
        activeClass="active"
        to="contact"
        smooth={true}>
          <span className="material-icons-outlined text-slate-900">email</span>
        </Link>
      </nav>
    </div>
  )
}