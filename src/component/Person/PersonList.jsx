import React from "react";
import { useOutletContext } from "react-router-dom";
import PersonCard from "./PersonCard";

const PersonList = () => {
  const { persons } = useOutletContext();

  return (
    <div className="p-8">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-[#412ad5] flex items-center justify-center gap-3">
        🗂️ <span className="underline decoration-[#412ad5]">Employee List</span>
      </h1>

      <div className="flex flex-wrap gap-6 justify-center">
        {persons.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
};

export default PersonList;
