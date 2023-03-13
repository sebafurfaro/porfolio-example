import React, { useState } from "react";
import data from '../data/data.json';
import { WorkModal } from "../components/modal/WorkModal";

export const Work = () => {

  const [ showModal, setShowModal ] = useState(false);
  const [ selectedProject, setSelectedProject ] = useState('');
  
  const openModal = (item) => {
    setShowModal(true)
    setSelectedProject(item)
    document.body.style.overflowY = 'hidden'
  }

  const closeModal = () => {
    setShowModal(false)
    document.body.style.overflowY = 'auto'
  }

  const w = data.works[0];
  const projects = data.works[0].projects;

  return(
    <div>
      <section id="work" className="text-white lg:px-20 lg:pb-40 px-5 py-20 min-h-screen">
        <div className="container mx-auto">
          <header className="header-section flex flex-col items-center text-center mb-16">
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
              <span className="py-1 px-4 text-white relative">{w.title}</span>
            </span>
            <h2 className="lg:text-6xl text-3xl font-bold mt-8">{w.subtitle}</h2>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-16 lg:gap-x-4">
            {projects.map((item) =>(
              <button
                onClick={() => {openModal(item)}}
                className="p-modal flex justify-content items-center mx-auto transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-3"
                key={item.id}>
                <img src={`${item.featureImage}`} alt={item.title} />
              </button>
            ))}
          </div>
        </div>
      </section>
      {showModal && (
        <WorkModal hideModal={closeModal} show={showModal} dataItem={selectedProject} />
      )}
    </div>
  );
}