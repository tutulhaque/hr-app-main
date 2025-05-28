import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const AddEmployee = () => {
  const { post } = useAxios();
  const navigate = useNavigate();
  const { handleAddEmployee } = useOutletContext();

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    salary: "",
    phone: "",
    email: "",
    animal: "",
    startDate: "",
    location: "",
    department: "",
    skills: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      ...formData,
      id: Date.now(),
      salary: parseFloat(formData.salary),
      skills: formData.skills.split(",").map((skill) => skill.trim()),
    };
    post("/employees", newEmployee).then((res) => {
      handleAddEmployee(res.data); // use actual returned data
      navigate("/employees");
      setFormData({ title: "", salary: "", phone: "", email: "" });
    });
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto py-8">
        <form
          onSubmit={handleSubmit}
          className="p-6 bg-base-200 rounded-box shadow-md space-y-4"
        >
          <h2 className="text-xl font-bold text-center">Add New Employee</h2>

          {[
            { name: "name", placeholder: "Name" },
            { name: "title", placeholder: "Title" },
            { name: "salary", placeholder: "Salary" },
            { name: "phone", placeholder: "Phone" },
            { name: "email", placeholder: "Email", type: "email" },
            { name: "animal", placeholder: "Favorite Animal" },
            { name: "startDate", placeholder: "Start Date", type: "date" },
            { name: "location", placeholder: "Location" },
            { name: "department", placeholder: "Department" },
            { name: "skills", placeholder: "Skills (comma separated)" },
          ].map((field) => (
            <input
              key={field.name}
              type={field.type || "text"}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          ))}

          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
