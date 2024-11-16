import React from "react";

const SampleEducation = () => {
  return (
    <section className="px-3 mb-2 leading-snug font-timesNewRoman">
      <h1 className="mb-1 font-bold uppercase border-b-2 border-black border-solid">
        education
      </h1>
      <table className="w-full">
        <thead>
          <tr className="flex justify-between">
            <td>Northern Hampshire</td>
            <td>London, UK</td>
          </tr>
        </thead>
        <tbody>
          <tr className="flex justify-between">
            <td>B.Sc Computer Science</td>
            <td>2006 - 2010</td>
          </tr>
          <tr>
            <td>First Class</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default SampleEducation;
