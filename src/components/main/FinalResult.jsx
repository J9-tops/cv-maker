import PropTypes from "prop-types";
import React from "react";
import jsPDF from "jspdf";
import DownloadIcon from "../../assets/DownloadIcon";
const FinalResult = (props, ref) => {
  const {
    showResult,
    userData,
    educationData,
    profExperienceData,
    skillsData,
  } = props;

  return (
    <>
      <main
        id="final-result"
        className={
          showResult
            ? "w-full border border-solid border-black bg-white pt-2 font-timesNewRoman lg:w-[60%] xl:block xl:w-[40%] print:block print:border-none"
            : "hidden w-full border border-solid border-black bg-white pt-2 font-timesNewRoman xl:block xl:w-[40%] print:block print:border-none"
        }
      >
        <header className="mb-3 flex flex-col items-center">
          <h1 className="text-center text-xl font-bold uppercase">
            {userData.fullName}
          </h1>
          <p className="text-center">{userData.jobTitle}</p>
          <p className="w-[30rem] text-center">
            <a className="mr-1">{userData.email}</a>
            {userData.telephone !== "" && "|"}
            <a href={userData.telephone} className="ml-1">
              {userData.telephone}
            </a>{" "}
            {userData.address !== "" && "|"}
            <span className="ml-1">{userData.address}</span>{" "}
            {(userData.link !== "" &&
              userData.email !== "" &&
              userData.address !== "" &&
              userData.telephone !== "") ||
            userData.fullName === ""
              ? ""
              : "|"}
            <a className="ml-1" href={userData.link}>
              {userData.link}
            </a>
          </p>
        </header>
        {educationData.length >= 1 && (
          <section className="mb-2 px-3 font-timesNewRoman leading-snug">
            <h1 className="mb-1 border-b-2 border-solid border-black text-[0.8rem] font-bold uppercase">
              education
            </h1>
            {educationData.map((entry, index) => (
              <div key={index} className="mb-2 text-[0.8rem]">
                <h3 className="flex justify-between font-bold">
                  <span className="uppercase">{entry.school}</span>
                  <span>
                    {entry.city}
                    {entry.city === "" ? "" : ","} {entry.country}
                  </span>
                </h3>
                <p className="flex justify-between">
                  <span>{entry.degree}</span>
                  <span>
                    {entry.startDateMonth} {entry.startDateYear}{" "}
                    {entry.startDateMonth === "" && entry.startDateYear === ""
                      ? ""
                      : "-"}{" "}
                    {entry.presentYear
                      ? "Present"
                      : `${entry.endDateMonth} ${entry.endDateYear}`}
                  </span>
                </p>
                <ul>
                  {entry.descriptions.map((item) => (
                    <li key={item} className="mx-6 list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}
        {profExperienceData.length >= 1 && (
          <section className="mb-2 px-3 font-timesNewRoman leading-snug">
            <h1 className="mb-1 border-b-2 border-solid border-black text-[0.8rem] font-bold uppercase">
              professional experience
            </h1>
            {profExperienceData.map((entry, index) => (
              <div key={index} className="mb-2 text-[0.8rem]">
                <h3 className="flex justify-between font-bold">
                  <span>{entry.jobTitle}</span>
                  <span>
                    {entry.city}, {entry.country}
                  </span>
                </h3>
                <p className="flex justify-between">
                  <span className="font-bold capitalize">{entry.employer}</span>
                  <span className="font-bold">
                    {entry.startDateMonth} {entry.startDateYear}{" "}
                    {entry.startDateMonth === "" && entry.startDateYear === ""
                      ? ""
                      : "-"}{" "}
                    {entry.presentYear
                      ? "Present"
                      : `${entry.endDateMonth} ${entry.endDateYear}`}
                  </span>
                </p>
                <ul>
                  {entry.descriptions.map((item) => (
                    <li key={item} className="mx-6 list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {skillsData.length >= 1 && (
          <section className="mb-2 px-3 font-timesNewRoman text-[0.8rem] leading-snug">
            <h1 className="mb-1 border-b-2 border-solid border-black text-[0.8rem] font-bold uppercase">
              skills
            </h1>
            {skillsData.map((entry, index) => (
              <ul key={index} className="grid grid-cols-3 leading-[0.8rem]">
                {entry.skill.map((item, index) => (
                  <li key={index} className="ml-6 list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </section>
        )}
      </main>
      <button
        id="print-btn"
        className="absolute left-8 top-10 h-fit w-fit rounded-xl bg-red-600 p-2"
        onClick={() => window.print()}
      >
        <DownloadIcon />
      </button>
    </>
  );
};

FinalResult.propTypes = {
  showResult: PropTypes.bool,
  handleShowResultToggle: PropTypes.func,
  profExperienceData: PropTypes.array,
  userData: PropTypes.object,
};

export default FinalResult;
