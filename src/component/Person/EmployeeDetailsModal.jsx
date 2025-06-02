import React from "react";
import { X } from "lucide-react";

const EmployeeDetailsModal = ({ person, onClose }) => {
  if (!person) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-2 sm:px-4">
      <div className="bg-white px-4 py-6 sm:p-8 rounded-3xl shadow-xl w-full max-w-3xl relative animate-fade-in">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-all"
          onClick={onClose}
          aria-label="Close details modal"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-[#412ad5] flex items-center justify-center gap-2">
          🧑‍💼 Employee Details
        </h3>

        {/* Profile */}
        <div className="bg-[#f4f4ff] px-4 py-5 sm:p-5 rounded-xl border border-[#dedcff]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 text-[15px] sm:text-[17px] leading-snug">
            <p>
              <span className="font-bold text-[#412ad5]">🆔 ID:</span>{" "}
              <span className="font-medium">{person.id}</span>
            </p>
            <p>
              <span className="font-bold text-[#412ad5]">❇️ Title:</span>{" "}
              <span className="font-medium">{person.title}</span>
            </p>
            <p>
              <span className="font-bold text-[#412ad5]">📛 Name:</span>{" "}
              <span className="font-medium">{person.name}</span>
            </p>
            <p>
              <span className="font-bold text-[#412ad5]">💶 Salary:</span>{" "}
              <span className="font-medium">{person.salary}€</span>
            </p>
            <p>
              <span className="font-bold text-[#412ad5]">📍 Location:</span>{" "}
              <span className="font-medium">{person.location}</span>
            </p>
            <p>
              <span className="font-bold text-[#412ad5]">🏢 Department:</span>{" "}
              <span className="font-medium">{person.department}</span>
            </p>
            <p>
              <span className="font-bold text-[#412ad5]">📧 Email:</span>{" "}
              <span className="font-medium break-all">{person.email}</span>
            </p>
            <p>
              <span className="font-bold text-[#412ad5]">📞 Phone:</span>{" "}
              <span className="font-medium">{person.phone}</span>
            </p>
            <p>
              <span className="font-bold text-[#412ad5]">🙊 Animal:</span>{" "}
              <span className="font-medium">{person.animal}</span>
            </p>
            <p>
              <span className="font-bold text-[#412ad5]">📌 Start:</span>{" "}
              <span className="font-medium">{person.startDate}</span>
            </p>
            <p className="col-span-1 sm:col-span-2">
              <span className="font-bold text-[#412ad5]">🛠️ Skills:</span>{" "}
              <span className="font-medium">{person.skills.join(", ")}</span>
            </p>
          </div>
        </div>

        {/* Footer Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="btn btn-outline btn-primary rounded-full px-6 w-full sm:w-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailsModal;
