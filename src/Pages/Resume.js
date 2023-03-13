import React from "react";
import data from '../data/data.json';

export const Resume = () => {

  const resume = data.resume[0];

  return(
    <section id="resume" className="bg-slate-900 text-white lg:px-20 px-5 py-20 min-h-screen">
      <div className="container mx-auto">
        <header className="header-section flex flex-col items-center mb-16">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="py-1 px-4 text-white relative">{resume.title}</span>
          </span>
          <h2 className="lg:text-6xl text-3xl font-bold mt-8">{resume.subtitle}</h2>
        </header>
        <div className="flex lg:flex-row flex-col items-center justify-between">
          <div className="lg:max-w-[50vw]">
            <h3 className="lg:text-4xl text-2xl lg:text-left text-center mb-5">{resume.greeting} <span className="font-bold">{resume.greetingBold}</span></h3>
            <p className="lg:text-2xl text-xl1 lg:text-left text-center">{resume.resume}</p>
          </div>
          <div className="relative lg:max-w-[30vw]">
            <span className="before:block before:rounded-full before:bg-sky-300 before:absolute before:m-auto before:inset-0 before:w-32 before:h-32 before:animate-ping ">
              <h3 className="relative font-bold" style={{ fontSize: '180px' }}>{resume.years}</h3>
            </span>
            <h5 className="relative text-center">{resume.yearsExperiance} <span className="font-bold">{resume.yearsBold}</span></h5>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-8 gap-4 mt-16">
          {resume.contact.map((item) => (
            <div className="flex flex-col items-left" key={item.id}>
              <p>{item.label}</p>
              <p className="font-bold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}