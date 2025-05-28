import React, { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Pencil, Plus, X, Save } from "lucide-react";

const PersonCard = ({ person, onUpdate }) => {
  const { patch } = useAxios();
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [salary, setSalary] = useState(person.salary);
  const [location, setLocation] = useState(person.location);
  const [department, setDepartment] = useState(person.department);
  const [skills, setSkills] = useState(person.skills.join(", "));
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    const updates = {};

    if (salary !== person.salary) {
      updates.salary = Number(salary);
    }

    if (location !== person.location) {
      updates.location = location;
    }

    if (department !== person.department) {
      updates.department = department;
    }

    const updatedSkillsArray = skills.split(",").map((s) => s.trim());
    if (JSON.stringify(updatedSkillsArray) !== JSON.stringify(person.skills)) {
      updates.skills = updatedSkillsArray;
    }

    // No changes? Exit edit mode
    if (Object.keys(updates).length === 0) {
      setIsEditing(false);
      return;
    }

    try {
      const res = await patch(`/employees/${person.id}`, updates);
      onUpdate(res.data);
      setIsEditing(false);
      setSaved(true);
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
  };

  // Helper to calculate years and months of experience
  const getExperience = (startDateStr) => {
    const startDate = new Date(startDateStr);
    const today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months };
  };

  const { years, months } = getExperience(person.startDate);
  const totalMonths = years * 12 + months;

  const isAnniversary = years > 0 && years % 5 === 0;

  const isNewHire = totalMonths < 6;

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              <X size={20} />
            </button>
            <h3 className="text-lg font-bold mb-4">Employee Details</h3>
            <p>
              <strong>ID:</strong> {person.id}
            </p>
            <p>
              <strong>Name:</strong> {person.name}
            </p>
            <p>
              <strong>Salary:</strong> {person.salary}€
            </p>
            <p>
              <strong>Location:</strong> {person.location}
            </p>
            <p>
              <strong>Department:</strong> {person.department}
            </p>
            <p>
              <strong>Email:</strong> {person.email}
            </p>
            <p>
              <strong>Phone:</strong> {person.phone}
            </p>
            <p>
              <strong>Skills:</strong> {person.skills.join(", ")}
            </p>
          </div>
        </div>
      )}

      <div className="card w-96 bg-base-100 shadow-sm border border-gray-200 relative">
        <div className="card-body">
          <h2 className="card-title">Name: {person.name}</h2>
          <p>ID: {person.id}</p>

          {isEditing ? (
            <>
              <div>
                <label className="font-semibold">Salary:</label>
                <input
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="font-semibold">Location:</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="font-semibold">Department:</label>
                <input
                  type="text"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="font-semibold">Skills:</label>
                <input
                  type="text"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleSave}
                >
                  Save <Save size={20} />
                </button>
                {saved && (
                  <p className="text-green-600 mt-2 font-medium animate-pulse">
                    ✅ Changes saved!
                  </p>
                )}

                <button className="btn btn-outline" onClick={handleCancel}>
                  Cancel <X size={20} />
                </button>
              </div>
            </>
          ) : (
            <>
              <p>Salary: {person.salary}€</p>
              <p>Location: {person.location}</p>
              <p>Department: {person.department}</p>
              <p>Skills: {person.skills.join(", ")}</p>
              <p>Favorite Animal: {person.animal}</p>

              {isAnniversary && (
                <p className="text-green-600 font-semibold">
                  🎉 Schedule recognition meeting.
                </p>
              )}
              {isNewHire && (
                <p className="text-yellow-600 font-semibold">
                  🔔 Schedule probation review.
                </p>
              )}
              <button
                className="absolute top-2 right-2 bg-black text-white rounded-full p-2 hover:bg-gray-800 cursor-pointer"
                onClick={() => setIsEditing(true)}
                aria-label="Edit"
              >
                <Pencil size={16} />
              </button>

              {saved && (
                <div className="text-green-600 text-sm mt-2">
                  ✅ Changes saved!
                </div>
              )}
            </>
          )}
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-neutral"
          >
            See More
            <Plus size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default PersonCard;
