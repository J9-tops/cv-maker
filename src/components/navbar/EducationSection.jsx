import PropTypes from "prop-types";
import React, { useState } from "react";
import MenuDownIcon from "../../assets/MenuDownIcon";
import OpenIcon from "../../assets/OpenIcon";

const EducationSection = ({
  isActive,
  handleSectionClick,
  setEducationData,
  educationData,
  handleShowEducationForm,
  showEducationForm,
  addEducationData,
}) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 30;

  const startYearArray = [];
  for (let year = currentYear; year >= startYear; year--) {
    startYearArray.push(year);
  }

  const endYearArray = [];
  const endYear = currentYear + 10;
  for (let year = endYear; year >= startYear; year--) {
    endYearArray.push(year);
  }

  const [formData, setFormData] = useState({
    degree: "",
    school: "",
    city: "",
    country: "",
    startDateMonth: "",
    startDateYear: "",
    endDateMonth: "",
    endDateYear: "",
    presentYear: false,
    notes: "",
    descriptions: [],
  });
  function splitMultipleSentences(text) {
    const points = [];
    let remainingText = text;

    while (remainingText.includes("!")) {
      // Find the index of the next exclamation mark
      const exclamationIndex = remainingText.indexOf("!");

      // Extract the part before the exclamation mark
      const beforeExclamation = remainingText.slice(0, exclamationIndex).trim();

      // Find the last full stop before the exclamation mark
      const lastFullStopIndex = beforeExclamation.lastIndexOf(".");

      // Check if there is a valid full stop to split at
      if (lastFullStopIndex !== -1) {
        // Extract the sentence up to the last full stop
        const point = beforeExclamation.slice(0, lastFullStopIndex + 1).trim();
        points.push(point);
      } else {
        // If no full stop is found, take the whole text before the exclamation mark
        points.push(beforeExclamation);
      }

      // Update remainingText to be the part after the current exclamation mark
      remainingText = remainingText.slice(exclamationIndex + 1).trim();
    }

    // Add the remaining text as the last point if it's not empty
    if (remainingText.length > 0) {
      points.push(remainingText);
    }

    return points;
  }

  formData.descriptions = splitMultipleSentences(formData.notes);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitForm = () => {
    formData.degree === "" ? null : addEducationData(formData);
    // formData.notes = pointArray;
    setFormData({
      degree: "",
      school: "",
      city: "",
      country: "",
      startDateMonth: "",
      startDateYear: "",
      endDateMonth: "",
      endDateYear: "",
      presentYear: false,
      notes: "",
      descriptions: [],
    });
    handleShowEducationForm();
  };

  return (
    <section className="mt-3">
      {showEducationForm ? (
        <form className="rounded-xl bg-white px-3 py-2">
          <h1 className="font-bold">Create Education</h1>
          <div className="container">
            <div>
              <label htmlFor="degree">
                Degree{" "}
                <span className="ml-1 text-[0.7rem] text-slate-400">
                  recommended
                </span>
              </label>
              <input
                type="text"
                name="degree"
                id="degree"
                placeholder="Enter Degree / Field of Study / Exchange Semester"
                className="w-full rounded-md bg-neutralLighter px-2 py-1"
                onChange={handleChange}
                value={formData.degree}
              />
            </div>
            <div>
              <label htmlFor="school">
                School{" "}
                <span className="ml-1 text-[0.7rem] text-slate-400">
                  optional
                </span>
              </label>
              <input
                type="text"
                name="school"
                id="school"
                placeholder="Enter school / university"
                className="w-full rounded-md bg-neutralLighter px-2 py-1"
                onChange={handleChange}
                value={formData.school}
              />
            </div>
            <div className="flex w-full gap-x-3">
              <div className="w-1/2">
                <label htmlFor="city">
                  City{" "}
                  <span className="ml-1 text-[0.7rem] text-slate-400">
                    optional
                  </span>
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter City"
                  className="w-full rounded-md bg-neutralLighter px-2 py-1"
                  onChange={handleChange}
                  value={formData.city}
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="country">
                  Country{" "}
                  <span className="ml-1 text-[0.7rem] text-slate-400">
                    optional
                  </span>
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Enter Country"
                  className="w-full rounded-md bg-neutralLighter px-2 py-1"
                  onChange={handleChange}
                  value={formData.country}
                />
              </div>
            </div>
            <div className="flex gap-x-3">
              <div className="w-1/2">
                <label htmlFor="startDate">
                  Start Date{" "}
                  <span className="ml-1 text-[0.7rem] text-slate-400">
                    optional
                  </span>
                </label>
                <div className="flex w-full gap-x-3">
                  <div className="relative w-[60%] rounded-xl bg-neutralLighter">
                    <select
                      name="startDateMonth"
                      id="startDateMonth"
                      className="w-full appearance-none rounded-md border-none bg-neutralLighter p-1 text-slate-400 outline-red-600"
                      onChange={handleChange}
                      value={formData.startDateMonth}
                    >
                      <option
                        value=""
                        disabled
                        hidden
                        className="text-slate-400"
                      >
                        Month
                      </option>
                      {months.map((month) => (
                        <option key={month} className="text-black">
                          {month}
                        </option>
                      ))}
                    </select>
                    <OpenIcon />
                  </div>
                  <div className="relative w-[40%] rounded-xl bg-neutralLighter">
                    <select
                      name="startDateYear"
                      id="startDateYear"
                      className="w-full appearance-none rounded-md border-none bg-neutralLighter p-1 text-slate-400 outline-red-600"
                      onChange={handleChange}
                      value={formData.startDateYear}
                    >
                      <option
                        value=""
                        disabled
                        hidden
                        className="text-slate-400"
                      >
                        Year
                      </option>
                      {startYearArray.map((year) => (
                        <option key={year}>{year}</option>
                      ))}
                    </select>
                    <OpenIcon />
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div>
                  <label htmlFor="EndDate">
                    End Date{" "}
                    <span className="ml-1 text-[0.7rem] text-slate-400">
                      optional
                    </span>
                  </label>
                  <div className="flex w-full gap-x-3">
                    <div className="relative w-[60%] rounded-xl bg-neutralLighter">
                      <select
                        name="endDateMonth"
                        id="endDateMonth"
                        className="w-full appearance-none rounded-md border-none bg-neutralLighter p-1 text-slate-400 outline-red-600"
                        onChange={handleChange}
                        value={formData.endDateMonth}
                      >
                        <option
                          value=""
                          disabled
                          hidden
                          className="text-slate-400"
                        >
                          Month
                        </option>
                        {months.map((month) => (
                          <option key={month} className="text-black">
                            {month}
                          </option>
                        ))}
                      </select>
                      <OpenIcon />
                    </div>
                    <div className="relative w-[40%] rounded-xl bg-neutralLighter">
                      <select
                        name="endDateYear"
                        id="endDateYear"
                        className="w-full appearance-none rounded-md border-none bg-neutralLighter p-1 text-slate-400 outline-red-600"
                        onChange={handleChange}
                        value={formData.endDateYear}
                      >
                        <option
                          value=""
                          disabled
                          hidden
                          className="text-slate-400"
                        >
                          Year
                        </option>
                        {endYearArray.map((year) => (
                          <option key={year}>{year}</option>
                        ))}
                      </select>
                      <OpenIcon />
                    </div>
                  </div>
                </div>
                <div className="mt-1 flex items-center gap-x-1 bg-white">
                  <input type="checkbox" name="present" id="present" />
                  <label htmlFor="present"> Present (Current)</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="description">
                Description{" "}
                <span className="ml-1 text-[0.7rem] text-slate-400">
                  optional
                </span>
              </label>
              <textarea
                name="notes"
                id="notes"
                placeholder="Add a description to your entry, separate each description with a !"
                className="w-full rounded-md bg-neutralLighter px-2 py-1"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-3 flex w-full gap-x-3 bg-white pb-2">
            <button
              onClick={handleShowEducationForm}
              className="ml-auto bg-red-400 px-2 py-1 text-white"
            >
              Cancel
            </button>
            <button
              onClick={submitForm}
              className="bg-red-600 px-2 py-1 text-white"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div className="flex items-center justify-between rounded-md border border-solid border-slate-400 p-3">
          <span>Education</span>
          <button
            className="rounded-[40%] bg-red-600 px-3 py-1 text-white"
            onClick={handleShowEducationForm}
          >
            +
          </button>
        </div>
      )}
    </section>
  );
};

EducationSection.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handleSectionClick: PropTypes.func.isRequired,
  educationData: PropTypes.array,
  setEducationData: PropTypes.func,
  handleEducationDataCount: PropTypes.func,
};

export default EducationSection;
