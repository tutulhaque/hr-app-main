import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.salary.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim()
    ) {
      toast.error(
        "Please fill in all required fields: Name, Salary, Phone, and Email."
      );
      return;
    }

    const newEmployee = {
      ...formData,
      id: String(Date.now()),
      salary: parseFloat(formData.salary),
      skills: formData.skills.split(",").map((skill) => skill.trim()),
    };

    try {
      const res = await post("/employees", newEmployee);
      handleAddEmployee(res.data);
      navigate("/employees", { replace: true });
    } catch (error) {
      console.error("Failed to add employee:", error);
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center my-6 sm:my-10 text-[#412ad5] flex items-center justify-center gap-3">
        ✜
        <span className="underline decoration-[#412ad5] decoration-4">
          Add Employee
        </span>
      </h1>

      <div className="max-w-2xl mx-auto p-5 sm:p-8 my-8 bg-white rounded-3xl shadow-lg border border-[#412ad5]/30">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 sm:space-y-6"
          autoComplete="off"
        >
          {[
            { name: "name", placeholder: "Name" },
            { name: "title", placeholder: "Title" },
            { name: "salary", placeholder: "Salary", type: "number" },
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
              className="input input-bordered w-full text-base sm:text-lg placeholder:text-gray-400 focus:border-[#412ad5] focus:ring-2 focus:ring-[#412ad5]/50 transition"
              required={field.name === "name" || field.name === "email"}
            />
          ))}

          <button
            type="submit"
            className="btn btn-primary w-full py-3 text-base sm:text-lg font-semibold tracking-wide shadow-lg hover:shadow-xl transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
