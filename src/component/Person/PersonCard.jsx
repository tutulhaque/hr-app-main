import React from "react";

const PersonCard = ({ person }) => {
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
    <div className="card w-96 bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Id: {person.id}</h2>
        <h2 className="card-title">Name: {person.name}</h2>
        <h2 className="card-title">
          Experience: {years} Years {months > 0 && `${months} Months`}
        </h2>
        <h2 className="card-title">Favorite Animal: {person.animal}</h2>

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
      </div>
    </div>
  );
};

export default PersonCard;
