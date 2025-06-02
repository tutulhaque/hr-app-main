import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Pencil, Plus, X, Save } from "lucide-react";
import EmployeeDetailsModal from "./EmployeeDetailsModal";
import { animalEmojis } from "../../data/animalEmojis";
import {
  getExperience,
  shouldShowSavedMessage,
} from "../utils/employeeHelpers";

import useAxios from "../../hooks/useAxios";

const PersonCard = ({ person }) => {
  const { patch } = useAxios();
  const { handleUpdatePerson, setHasUnsavedChanges } = useOutletContext();

  const [isEditing, setIsEditing] = useState(false);
  const [salary, setSalary] = useState(person.salary);
  const [location, setLocation] = useState(person.location);
  const [department, setDepartment] = useState(person.department);
  const [skills, setSkills] = useState(person.skills.join(", "));
  const [showSavedMessage, setShowSavedMessage] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!isEditing) {
      setSalary(person.salary);
      setLocation(person.location);
      setDepartment(person.department);
      setSkills(person.skills.join(", "));
      setSaved(false);
    }
  }, [person, isEditing]);

  const handleSave = async () => {
    const updates = {};
    const parsedSalary = parseFloat(salary);

    if (!isNaN(parsedSalary) && parsedSalary !== person.salary)
      updates.salary = parsedSalary;
    if (location !== person.location) updates.location = location;
    if (department !== person.department) updates.department = department;

    const updatedSkillsArray = skills.split(",").map((s) => s.trim());
    if (JSON.stringify(updatedSkillsArray) !== JSON.stringify(person.skills)) {
      updates.skills = updatedSkillsArray;
    }

    if (Object.keys(updates).length === 0) {
      setIsEditing(false);
      setHasUnsavedChanges(false);
      return;
    }

    try {
      await patch(`/employees/${person.id}`, updates);

      localStorage.setItem("showSavedMessage", "true");

      setIsEditing(false);
      setShowSavedMessage(true);
      setTimeout(() => setShowSavedMessage(false), 3000);
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  const handleCancel = () => {
    setSalary(person.salary);
    setLocation(person.location);
    setDepartment(person.department);
    setSkills(person.skills.join(", "));
    setIsEditing(false);
    setHasUnsavedChanges(false);
    setSaved(false);
  };

  useEffect(() => {
    const savedFlag = localStorage.getItem("showSavedMessage");
    if (savedFlag === "true") {
      setShowSavedMessage(true);
      localStorage.removeItem("showSavedMessage");
      setTimeout(() => setShowSavedMessage(false), 3000);
    }
  }, []);

  useEffect(() => {
    shouldShowSavedMessage(setShowSavedMessage);
  }, []);

  const { years, months } = getExperience(person.startDate);
  const totalMonths = years * 12 + months;

  const isAnniversary = years > 0 && years % 5 === 0;
  const isNewHire = totalMonths < 6;

  return (
    <>
      {showModal && (
        <EmployeeDetailsModal
          person={person}
          onClose={() => setShowModal(false)}
        />
      )}

      <div className="relative w-96 card bg-white shadow-md border border-gray-200 overflow-hidden transition hover:shadow-xl">
        {/* Badge */}
        {(isAnniversary || isNewHire) && (
          <div className="absolute top-2 left-2/3 -translate-x-2/3 flex gap-2">
            {isAnniversary && (
              <span className="badge badge-success text-white text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 animate-pulse shadow-md whitespace-nowrap">
                🎉 Anniversary
              </span>
            )}
            {isNewHire && (
              <span className="badge badge-warning text-white text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 animate-pulse shadow-md whitespace-nowrap">
                🔔 New Hire
              </span>
            )}
          </div>
        )}

        <div className="card-body">
          {/* Name */}
          <h2 className="text-2xl font-extrabold text-[#412AD5] text-left">
            {person.name}
          </h2>

          {/* Animal */}
          <div className="text-5xl text-left">
            {animalEmojis[person.animal?.trim().toLowerCase()] || "🐾"}
          </div>
          {animalEmojis[person.animal?.trim().toLowerCase()] && (
            <p className="text-left font-semibold text-[17px] capitalize">
              {"Animal: " + person.animal}
            </p>
          )}

          {isEditing ? (
            <>
              {[
                {
                  label: "Salary",
                  value: salary,
                  onChange: setSalary,
                  type: "number",
                },
                { label: "Location", value: location, onChange: setLocation },
                {
                  label: "Department",
                  value: department,
                  onChange: setDepartment,
                },
                { label: "Skills", value: skills, onChange: setSkills },
              ].map((field, idx) => (
                <div key={idx}>
                  <label className="font-semibold">{field.label}:</label>
                  <input
                    type={field.type || "text"}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    className="input input-bordered w-full"
                  />
                </div>
              ))}

              <div className="flex gap-2 mt-4 justify-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSave}
                >
                  Save <Save size={20} />
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={handleCancel}
                >
                  Cancel <X size={20} />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="text-left space-y-2 text-gray-800 text-[17px] leading-relaxed">
                <p>
                  <span className="font-bold">💶 Salary:</span>{" "}
                  <span className="font-sm">{person.salary}€</span>
                </p>
                <p>
                  <span className="font-bold ">📍 Location:</span>{" "}
                  <span className="font-sm">{person.location}</span>
                </p>
                <p>
                  <span className="font-bold">🏢 Department:</span>{" "}
                  <span className="font-sm">{person.department}</span>
                </p>
                <p>
                  <span className="font-bold">🛠️ Skills:</span>{" "}
                  <span className="font-sm">{person.skills.join(", ")}</span>
                </p>
              </div>

              <button
                className="absolute top-2 right-2 bg-[#412AD5] text-white rounded-full p-2 hover:bg-[#602AD5] transition cursor-pointer"
                onClick={() => {
                  setIsEditing(true);
                  setSaved(false);
                }}
                aria-label="Edit"
              >
                <Pencil size={16} />
              </button>

              {showSavedMessage && (
                <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 animate-fadeIn">
                  ✅ Changes saved!
                </div>
              )}
            </>
          )}

          <button
            onClick={() => setShowModal(true)}
            className="btn btn-primary w-full mt-4"
          >
            See More <Plus size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default PersonCard;
