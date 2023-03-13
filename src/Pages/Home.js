import React, {useEffect, useRef} from "react";
import { Link } from 'react-scroll';
import data from '../data/data.json';
import user from '../data/johndoe.jpg';
import Typed from 'typed.js';

const Home = () => {

  const home = data.home[0];
  
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Developer", "Designer", "Photographer"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: false,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  },[])

  return(
    <section id="home" className="flex items-center h-screen px-4">
      <div className="container mx-auto">
        <div className="hero flex lg:flex-row flex-col items-center justify-between w-full">
          <div className="lg:max-w-[60vw] lg:text-left text-center w-full text-slate-900 lg:order-1 order-2">
            <h1 className="lg:text-5xl text-3xl font-light uppercase">{home.title}</h1>
            <div className="animation lg:my-1 my-2 lg:min-h-[115px] min-h-[58px]">
              <span className="text-slate-900 font-bold uppercase lg:text-8xl lg:mx-left text-4xl" ref={el}></span>
            </div>
            <h5 className="text-2xl font-light">{home.based}</h5>
            <div className="flex items-center lg:justify-start justify-center lg:w-full mt-5">
              <Link
                to="work"
                smooth={true}
                className="lg:px-5 px-3 py-3 bg-slate-900 text-white hover:bg-slate-800 hover:shadow-xl transition duration-300 ease-in-out cursor-pointer hover:-translate-y-1">{home.btnWork}</Link>
              <Link
                to="contact"
                smooth={true}
                className="lg:px-5 px-3 py-3 bg-white ml-5 text-slate-900 hover:no-underline transition duration-300 ease-in-out flex items-center hover:shadow-xl cursor-pointer hover:-translate-y-1">
                  {home.btnContact}
                  <span className="material-icons-outlined ml-2">arrow_circle_right</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center relative lg:max-w-[30vw] lg:order-2 order-1 lg:mb-0 mb-5">
            <div className="border-solid border-white rounded-full border-8 overflow-hidden shadow-2xl w-[400px] h-[400px] max-md:w-[250px] max-md:h-[250px] mx-auto">
              <img src={user} alt="john doe" className="grayscale" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;