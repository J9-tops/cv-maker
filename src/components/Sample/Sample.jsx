import React from "react";
import SampleUser from "./SampleUser";
import SampleProfile from "./SampleProfile";
import SampleEducation from "./SampleEducation";
import SampleExperience from "./SampleExperience";
import SampleTechCompetencies from "./SampleTechCompetencies";
import SampleReferences from "./SampleReferences";
import Watermark from "./Watermark";

const Sample = () => {
  return (
    <div className="relative lg:mx-auto lg:my-14 lg:w-[540px] lg:border lg:border-solid lg:border-black">
      <SampleUser />
      <SampleProfile />
      <SampleEducation />
      <SampleExperience />
      <SampleTechCompetencies />
      <SampleReferences />
      <Watermark />
    </div>
  );
};

export default Sample;
