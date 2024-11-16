import React from "react";

const SampleExperience = () => {
  return (
    <section className="px-3 mb-2 leading-snug font-timesNewRoman">
      <h1 className="mb-1 font-bold uppercase border-b-2 border-black border-solid">
        professional experience
      </h1>
      <table className="w-full">
        <thead>
          <tr className="font-bold uppercase">
            <td>intern</td>
          </tr>
        </thead>
        <tbody>
          <tr className="flex justify-between">
            <td>
              Computer Village, <br />
              London, UK
            </td>
            <td>
              March 2008 - <br />
              Aug 2008
            </td>
          </tr>

          <tr>
            <td>Condition-based monitoring</td>
          </tr>
          <tr>
            <td>Learnt about Antivirus</td>
          </tr>
          <tr>
            <td>Interpretation of Machine Language Codes</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default SampleExperience;
