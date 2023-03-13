import React from "react";
import Carousel from 'framer-motion-carousel';

export const WorkModal = ({ hideModal, dataItem }) => {

  return(
    <div className="modal fixed top-0 left-0 w-full h-full bg-white/30 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="modal-dialog relative lg:max-w-5xl max-w-[95vw] mx-auto bg-white text-slate-900 lg:h-fit h-[98vh] px-5 py-8">
        <div className="modal-header flex items-center justify-center h-10">
          <h2 className="text-center self-center font-bold lg:text-3xl text-2xl lg:mb-10 mb-5">Details {dataItem.title}</h2>
          <button className="absolute right-2 top-2" onClick={hideModal}>
            <span className="material-icons" style={{ fontSize: '32px' }}>close</span>
          </button>
        </div>
        <div className="modal-body grid lg:grid-cols-2 grid-cols-1 lg:gap-x-4 items-center">
          <div className="gallery-img bg-slate-300 lg:max-w-[620px] lg:max-h-[670px] h-full w-full lg:block hidden">
            <Carousel>
              {dataItem.gallery.map((slide) => (
                <img
                  src={`${slide.url}`}
                  alt="gallery"
                  draggable="true"
                  key={slide.id}
                  width="100%" />
              ))}
            </Carousel>
          </div>
          <div className="project-info">
            <div className="border-b border-solid border-slate-400 pb-4">
              <h3 className="font-bold lg:text-2xl text-xl">Project info</h3>
              <p>{dataItem.summary}</p>
            </div>
            <h3 className="font-bold lg:mt-10 mt-5 lg:text-2xl text-xl">Project Deatils</h3>
            <ul>
              <li className="border-b border-solid border-slate-400 flex lg:flex-row flex-col lg:items-center py-4">
                <p className="font-bold mr-2">Client</p>
                <p className="font-light">{dataItem.clientName}</p>
              </li>
              <li className="border-b border-solid border-slate-400 flex lg:flex-row flex-col lg:items-center py-4">
                <p className="font-bold mr-2">Technologies</p>
                <p className="font-light">{dataItem.technologies}</p>
              </li>
              <li className="border-b border-solid border-slate-400 flex lg:flex-row flex-col lg:items-center py-4">
                <p className="font-bold mr-2">Industry</p>
                <p className="font-light">{dataItem.industry}</p>
              </li>
              <li className="border-b flex lg:flex-row flex-col lg:items-center py-4">
                <p className="font-bold mr-2">Date</p>
                <p className="font-light">{dataItem.date}</p>
              </li>
              <li className="flex lg:flex-row flex-col lg:items-center py-4">
                <p className="font-bold mr-2">URL</p>
                <p className="lg:bg-pink-500 lg:text-slate-900 text-pink-500 font-bold flex items-center lg:p-2 cursor-pointer">{dataItem.url} <span className="material-icons lg:ml-2 ml-1">chevron_right</span></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}