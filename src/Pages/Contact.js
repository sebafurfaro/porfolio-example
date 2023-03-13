import React from "react";
import data from '../data/data.json';
import { FormContact } from "../components/FormContact";
import { Footer } from "../components/Footer";

const Contact = () => {

  const talk = data.contact[0];

  return(
    <section id="contact" className="text-white bg-slate-900">
      <div className="container mx-auto lg:px-20 px-5 py-20 pb-0">
        <header className="header-section flex flex-col items-center">
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="py-1 px-4 mb-4 text-white relative">{talk.title}</span>
          </span>
        </header>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-10">
          <div className="lg:p-8">
            <h2 className="font-bold text-4xl mb-6">{talk.title}</h2>
            <h5 className="text-2xl">{talk.subtitle}</h5>
            <p>{talk.livingIn}</p>
          </div>
          <div className="lg:p-8 mt-20 lg:mt-0">
            <h2 className="font-bold text-4xl mb-6">{talk.formTitle}</h2>
            <FormContact />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Contact;