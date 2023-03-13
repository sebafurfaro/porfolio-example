import React from "react";
import data from '../data/data.json';
import { Link } from 'react-scroll';

const Services = () => {

  const serv = data.services[0];

  return(
    <section id="services" className="text-white lg:px-20 py-20 px-5 min-h-screen">
      <div className="container mx-auto">
        <header className="header-section flex flex-col items-center mb-20">
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="py-1 px-4 mb-4 text-white relative">{serv.title}</span>
          </span>
          <h2 className="lg:text-6xl text-3xl text-center font-bold mt-4">{serv.subtitle}</h2>
        </header>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 md:gap-y-8 max-md:divide-y-2">
          {serv.boxes.map((box) => (
            <div className="flex flex-col text-center justify-between max-sm:justify-center overflow-hidden service-card max-md:py-5" key={box.id}>
              <span className="material-icons" style={{ fontSize: '50px' }}>{box.icon}</span>
              <h4 className="font-bold text-3xl my-3">{box.title}</h4>
              <p>{box.summary}</p>
            </div>
          ))}
        </div>
        <Link to="experiance" smooth={true} className="animate-bounce mx-auto flex items-center justify-center mt-20 cursor-pointer p-2 w-10 h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full">
          <span className="material-icons">arrow_downward</span>
        </Link>
      </div>
    </section>
  )
}

export default Services;