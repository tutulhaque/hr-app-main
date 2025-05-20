import { useOutletContext } from "react-router-dom";
import PersonCard from "./PersonCard";
const PersonList = () => {
  const { persons } = useOutletContext();
  return (
    <div className="p-8">
      <h1 className="p-8 text-3xl text-center">Personal Details</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {persons.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
};

export default PersonList;
