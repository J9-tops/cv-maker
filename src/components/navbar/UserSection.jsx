import PropTypes from "prop-types";
import React from "react";
import MenuDownIcon from "../../assets/MenuDownIcon";
import EditIcon from "../../assets/EditIcon";
import CancelIcon from "../../assets/CancelIcon";
import EmailIcon from "../../assets/EmailIcon";
import AddressIcon from "../../assets/AddressIcon";
import PhoneIcon from "../../assets/PhoneIcon";
const UserSection = ({
  isActive,
  handleSectionClick,
  userData,
  setUserData,
  handleShowUserFormToggle,
  showUserForm,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <section className="relative rounded-xl bg-white">
      <button
        className="absolute right-3 top-2 rounded-[50%] bg-red-500 p-2 text-white"
        onClick={handleShowUserFormToggle}
      >
        {showUserForm ? <CancelIcon /> : <EditIcon />}
      </button>
      {showUserForm ? (
        <div className="p-2">
          <h1 className="font-bold">Edit Personal Details</h1>
          <form className="flex flex-col gap-y-3">
            <div className="flex flex-col">
              <label htmlFor="fullName" className="text-[0.9rem]">
                Full name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Enter your title, first and last name"
                className="rounded-md bg-neutralLighter px-2 py-1"
                onChange={handleChange}
                value={userData.fullName || ""}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="jobTitle" className="text-[0.9rem]">
                Job title{" "}
                <span className="ml-1 text-[0.7rem] text-slate-400">
                  optional
                </span>
              </label>
              <input
                type="text"
                name="jobTitle"
                id="jobTitle"
                placeholder="Enter Job title"
                className="rounded-md bg-neutralLighter px-2 py-1"
                onChange={handleChange}
                value={userData.jobTitle || ""}
              />
            </div>
            <div className="flex gap-x-3">
              <div className="flex w-1/2 flex-col">
                <label htmlFor="email" className="text-[0.9rem]">
                  Email{" "}
                  <span className="ml-1 text-[0.7rem] text-slate-400">
                    recommended
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  className="w-full rounded-md bg-neutralLighter px-2 py-1"
                  onChange={handleChange}
                  value={userData.email || ""}
                />
              </div>
              <div className="flex w-1/2 flex-col">
                <label htmlFor="phoneNumber" className="text-[0.9rem]">
                  Phone{" "}
                  <span className="ml-1 text-[0.7rem] text-slate-400">
                    recommended
                  </span>
                </label>
                <input
                  type="tel"
                  name="telephone"
                  id="telephone"
                  placeholder="Enter Phone"
                  className="w-full rounded-md bg-neutralLighter px-2 py-1"
                  onChange={handleChange}
                  value={userData.telephone || ""}
                />
              </div>
            </div>
            <div>
              <label htmlFor="address" className="text-[0.9rem]">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="City, Country"
                className="w-full rounded-md bg-neutralLighter px-2 py-1"
                onChange={handleChange}
                value={userData.address || ""}
              />
            </div>
            <div>
              <label htmlFor="links" className="text-[0.9rem]">
                Link
              </label>
              <input
                type="url"
                name="link"
                id="link"
                placeholder="Contact you on ..."
                className="w-full rounded-md bg-neutralLighter px-2 py-1"
                onChange={handleChange}
                value={userData.link || ""}
              />
            </div>
          </form>
        </div>
      ) : (
        <div className="rounded-xl px-2 py-3 text-slate-400">
          <p className="font-bold capitalize text-black">
            {userData.fullName === "" ? "Your name" : userData.fullName}
          </p>
          <p className="mt-1 flex items-center gap-x-1">
            <EmailIcon /> {userData.email === "" ? "Email" : userData.email}
          </p>
          <p className="mt-1 flex items-center gap-x-1">
            <PhoneIcon />{" "}
            {userData.telephone === "" ? "Phone" : userData.telephone}
          </p>
          <p className="mt-1 flex items-center gap-x-1">
            <AddressIcon />{" "}
            {userData.address === "" ? "Address" : userData.address}
          </p>
        </div>
      )}
    </section>
  );
};

UserSection.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handleSectionClick: PropTypes.func.isRequired,
};

export default UserSection;
