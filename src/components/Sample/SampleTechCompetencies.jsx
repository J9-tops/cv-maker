import React from "react";

const SampleTechCompetencies = () => {
  return (
    <section className="px-3 mb-2 leading-snug font-timesNewRoman">
      <h1 className="mb-1 font-bold uppercase border-b-2 border-black border-solid">
        technical competencies
      </h1>
      <table>
        <tbody>
          <tr>
            <td>Machine Learning (supervised)</td>
            <td> Version Control (Git)</td>
          </tr>
          <tr>
            <td>Control Systems</td>
            <td>Data Analysis</td>
          </tr>
          <tr>
            <td>Embedded Systems</td>
            <td>Solid works</td>
          </tr>
          <tr>
            <td>Programming Languages: Python, C, and MATLAB</td>
            <td>Electronic Design and Fabrication</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default SampleTechCompetencies;
