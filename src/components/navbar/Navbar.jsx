import React, { useState, lazy, Suspense } from "react";
const UserSection = lazy(() => import("./UserSection"));
const EducationSection = lazy(() => import("./EducationSection"));
const ProfessionalExperience = lazy(() => import("./ProfessionalExperience"));
const Skills = lazy(() => import("./Skills"));
import PropTypes from "prop-types";

const Navbar = (props) => {
  const {
    userData,
    setUserData,
    setEducationData,
    educationData,
    showUserForm,
    handleShowUserFormToggle,
    handleShowEducationForm,
    showEducationForm,
    addEducationData,
    showResult,
    handleShowExperienceForm,
    addExperienceData,
    showProfExperienceForm,
    profExperienceData,
    handleShowSkillsForm,
    addSkillsData,
    showSkillsForm,
    skillsData,
  } = props;

  // State to track which section is clicked/open
  const [activeSection, setActiveSection] = useState(null);

  // Toggle the section, if clicked again, close it
  const handleSectionClick = (section) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section,
    );
  };

  return (
    <nav
      className={
        showResult
          ? "hidden w-full border border-solid border-black px-5 py-4 xl:block xl:w-[40%] print:hidden"
          : "w-full border border-solid border-black px-5 py-4 lg:w-[60%] xl:w-[40%] print:hidden"
      }
    >
      <Suspense fallback={<div>Loading...</div>}>
        <UserSection
          handleSectionClick={() => handleSectionClick("user")}
          isActive={activeSection === "user"}
          userData={userData}
          setUserData={setUserData}
          showUserForm={showUserForm}
          handleShowUserFormToggle={handleShowUserFormToggle}
        />

        <EducationSection
          handleSectionClick={() => handleSectionClick("education")}
          isActive={activeSection === "education"}
          setEducationData={setEducationData}
          educationData={educationData}
          handleShowEducationForm={handleShowEducationForm}
          showEducationForm={showEducationForm}
          addEducationData={addEducationData}
        />

        <ProfessionalExperience
          profExperienceData={profExperienceData}
          handleShowExperienceForm={handleShowExperienceForm}
          addExperienceData={addExperienceData}
          showProfExperienceForm={showProfExperienceForm}
        />

        <Skills
          addSkillsData={addSkillsData}
          handleShowSkillsForm={handleShowSkillsForm}
          showSkillsForm={showSkillsForm}
          skillsData={skillsData}
        />
      </Suspense>
    </nav>
  );
};

Navbar.propTypes = {
  showResult: PropTypes.bool,
  userData: PropTypes.object,
  setUserData: PropTypes.func,
  setEducationData: PropTypes.func,
  educationData: PropTypes.array,
};

export default Navbar;
