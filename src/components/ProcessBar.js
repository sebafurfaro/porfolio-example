import React, {useState, useEffect} from "react";

export const ProcessBar = ({ width, label }) => {
  const [ values, setValues ] = useState(0);

  useEffect(() => {
    setValues(width)
    // eslint-disable-next-line
  },[values]);

  return(
    <div className="relative flex flex-col">
      <div className="flex align-center justify-between mb-2">
        <span className="font-bold">{label}</span>
        <span className="font-bold">{values}</span>
      </div>
      <div className="progress-bar w-full h-2 overflow-hidden rounded-full bg-slate-700">
        <div className="progress h-2 bg-pink-500 transition-all duration-1000 rounded-full" style={{ width: `${values}` }} />
      </div>
    </div>
  );
}