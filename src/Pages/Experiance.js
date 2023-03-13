import React from 'react';
import data from '../data/data.json';
import { Skills } from '../components/Skills';

export const Exps = () => {

  const exp = data.experiance[0];

  return(
    <section id="experiance" className="bg-slate-900 text-white lg:px-20 px-5 py-20 py min-h-screen">
      <div className="container mx-auto">
        <header className="header-section flex flex-col items-center">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block mb-4">
            <span className="py-1 px-4 mb-4 text-white relative">{exp.title}</span>
          </span>
          <h2 className="lg:text-6xl text-3xl text-center font-bold">{exp.subtitle}</h2>
        </header>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-16">
          <div className="exp-box">
            <h2 className="font-bold text-3xl">My Education</h2>
            <div className=" border-solid border-pink-500 border-l-2 mt-3">
              {exp.education.map((edu) => (
                <div className="box-container ml-4 border-b border-solid border-slate-200/50 py-4 last:border-none" key={edu.id}>
                  <h4 className="text-2xl">{edu.title}</h4>
                  <h5 className="font-medium text-1xl">{edu.subtitle}</h5>
                  <p>{edu.summary}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="exp-box">
            <h2 className="font-bold text-3xl">My Experiance</h2>
            <div className="box  border-l-2 border-solid border-pink-500 mt-3">
              {exp.jobs.map((job) => (
                <div className="box-container ml-4 border-b border-solid border-slate-200/50 py-4 last:border-none" key={job.id}>
                  <h4 className="font-bold text-2xl">{job.title}</h4>
                  <h5 className="font-medium text-1xl">{job.subtitle}</h5>
                  <p>{job.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="skills mt-16">
          <Skills />
        </div>
      </div>
    </section>
  )
}