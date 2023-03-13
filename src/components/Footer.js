import React from "react";

export const Footer = () => {

  const currentYear = new Date().getFullYear();

  return(
    <div className="p-10 bg-black flex items-center justify-between mt-10">
      <p className="text-white">Copyright © {currentYear} John Doe. All Rights Reserved.</p>
      <p className="text-white">Develop by
        <a
          href="https://sebafurfaro.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-pink-500 transition-all"> SebaFurfaro</a>
      </p>
    </div>
  )
}