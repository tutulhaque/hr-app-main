// Root.jsx
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useAxios from "./hooks/useAxios"; // Adjust path as necessary
import Header from "../../../../hr-app-copy/hr-app/step-3/hr-app-main/src/Header";
import Banner from "../../../../hr-app-copy/hr-app/step-3/hr-app-main/src/Banner";
import Footer from "../../../../hr-app-copy/hr-app/step-3/hr-app-main/src/Footer";

const Root = () => {
  const { get } = useAxios();
  const [persons, setPersons] = useState([]);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const fetchPersons = async () => {
    try {
      const response = await get("/employees");
      setPersons(response.data);
    } catch (error) {
      console.error("Failed to fetch employees", error);
      toast.error("❌ Failed to fetch employee data");
    }
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  const handleUpdatePerson = (updatedPerson) => {
    setPersons((prev) =>
      prev.map((p) => (p.id === updatedPerson.id ? updatedPerson : p))
    );
    toast.success("✅ Changes saved!", {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: true,
    });
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!hasUnsavedChanges) return;
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [hasUnsavedChanges]);

  return (
    <>
      <Header />
      <Banner />
      <Outlet
        context={{
          persons,
          setPersons,
          setHasUnsavedChanges,
          handleUpdatePerson,
        }}
      />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Root;
