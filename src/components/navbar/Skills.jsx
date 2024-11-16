import React, { useState } from "react";

const Skills = ({
  addSkillsData,
  handleShowSkillsForm,
  skillsData,
  showSkillsForm,
}) => {
  const [formData, setFormData] = useState({
    notes: "",
    skill: [],
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
  formData.skill = splitMultipleSentences(formData.notes);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitForm = () => {
    formData.degree === "" ? null : addSkillsData(formData);
    console.log(formData);
    setFormData({
      notes: "",
      skill: [],
    });
    handleShowSkillsForm();
  };
  return (
    <section className="mt-3">
      {showSkillsForm ? (
        <form className="rounded-xl bg-white px-3 py-2">
          <h1 className="font-bold">Write your Skills</h1>
          <div>
            <div>
              <label htmlFor="skills">
                Skills{" "}
                <span className="ml-1 text-[0.7rem] text-slate-400">
                  recommended
                </span>
              </label>
              <textarea
                name="notes"
                id="notes"
                placeholder="Enter your skills, separate each description with a !"
                className="w-full rounded-md bg-neutralLighter px-2 py-1"
                onChange={handleChange}
                value={formData.notes}
              />
            </div>
          </div>
          <div className="mt-3 flex w-full gap-x-3 bg-white pb-2">
            <button
              onClick={handleShowSkillsForm}
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
          <span>Skills</span>
          <button
            className="rounded-[40%] bg-red-600 px-3 py-1 text-white"
            onClick={handleShowSkillsForm}
          >
            +
          </button>
        </div>
      )}
    </section>
  );
};

export default Skills;
