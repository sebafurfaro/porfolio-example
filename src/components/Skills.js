import React from "react";
import data from '../data/data.json';
import { ProcessBar } from '../components/ProcessBar';

export const Skills = () => {

  const skills = data.experiance[0].skills;

  return(
    <div className="mt-16">
      <h2 className="font-bold text-4xl">My Skills</h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-4">
        {skills.map((skill) => (
          <div className="skill" key={skill.id}>
            <ProcessBar label={skill.title} width={skill.value} />
          </div>
        ))}
        </div>
    </div>
  );
}