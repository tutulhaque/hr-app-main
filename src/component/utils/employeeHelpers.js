// utils/employeeHelpers.js

export const getExperience = (startDateStr) => {
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

export const shouldShowSavedMessage = (setShowSavedMessage) => {
  const savedFlag = localStorage.getItem("showSavedMessage");
  if (savedFlag === "true") {
    setShowSavedMessage(true);
    localStorage.removeItem("showSavedMessage");
    setTimeout(() => setShowSavedMessage(false), 3000);
  }
};
