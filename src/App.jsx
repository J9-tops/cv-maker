import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import Sample from "./components/Sample/Sample";
const FinalResult = lazy(() => import("./components/main/FinalResult"));
const CreateNew = lazy(() => import("./components/CreateNew"));
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const ShowResult = lazy(() => import("./components/ShowResult"));

const App = () => {
  const [isCreateButtonClicked, setIsCreateButtonClicked] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showProfExperienceForm, setShowProfExperienceForm] = useState(false);
  const [showSkillsForm, setShowSkillsForm] = useState(false);
  const [profExperienceData, setProfExperienceData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [userData, setUserData] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    telephone: "",
    address: "",
    link: "",
  });
  const handleShowResultToggle = () => {
    setShowResult((prevState) => !prevState);
  };

  const handleShowUserFormToggle = () => {
    setShowUserForm((prevState) => !prevState);
  };

  const handleShowEducationForm = () => {
    setShowEducationForm((prevState) => !prevState);
  };

  const addEducationData = (educationEntry) => {
    setEducationData((prevData) => [...prevData, educationEntry]);
  };

  const addExperienceData = (experience) => {
    setProfExperienceData((prevData) => [...prevData, experience]);
  };

  const handleShowExperienceForm = () => {
    setShowProfExperienceForm((prevState) => !prevState);
  };

  const addSkillsData = (skills) => {
    setSkillsData((prevData) => [...prevData, skills]);
  };

  const handleShowSkillsForm = () => {
    setShowSkillsForm((prevState) => !prevState);
  };

  return (
    <div className="relative flex min-h-screen justify-center gap-x-20 bg-neutralLighterAlt px-6 py-10">
      {!isCreateButtonClicked && <Sample />}

      <CreateNew
        setIsCreateButtonClicked={setIsCreateButtonClicked}
        isCreateButtonClicked={isCreateButtonClicked}
      />
      {isCreateButtonClicked && (
        <Suspense fallback={<div>Loading ...</div>}>
          <ShowResult
            showResult={showResult}
            handleShowResultToggle={handleShowResultToggle}
            setShowResult={setShowResult}
          />

          <Navbar
            showResult={showResult}
            setShowResult={setShowResult}
            handleShowResultToggle={handleShowResultToggle}
            userData={userData}
            setUserData={setUserData}
            setEducationData={setEducationData}
            educationData={educationData}
            showUserForm={showUserForm}
            handleShowUserFormToggle={handleShowUserFormToggle}
            showEducationForm={showEducationForm}
            handleShowEducationForm={handleShowEducationForm}
            addEducationData={addEducationData}
            handleShowExperienceForm={handleShowExperienceForm}
            addExperienceData={addExperienceData}
            showProfExperienceForm={showProfExperienceForm}
            profExperienceData={profExperienceData}
            addSkillsData={addSkillsData}
            handleShowSkillsForm={handleShowSkillsForm}
            showSkillsForm={showSkillsForm}
            skillsData={skillsData}
          />
          <FinalResult
            userData={userData}
            educationData={educationData}
            showResult={showResult}
            profExperienceData={profExperienceData}
            skillsData={skillsData}
          />
        </Suspense>
      )}
    </div>
  );
};

export default App;
