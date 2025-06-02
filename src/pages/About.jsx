import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* HR About Content */}
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold text-left my-10 text-[#412ad5] gap-3">
            <span className="decoration-4">About Us</span>
          </h1>
          <p className="mb-4">
            Our HR App is a user-friendly employee management platform designed
            to streamline essential HR tasks through a clean, responsive
            interface. The project focuses on delivering a modern experience
            with thoughtful features and intuitive interaction.
          </p>
          <p className="mb-4">
            Built using <span className="font-semibold">React</span>,{" "}
            <span className="font-semibold">React Router</span>, and{" "}
            <span className="font-semibold">Axios</span> for seamless front-end
            development and API handling, the app uses{" "}
            <span className="font-semibold">JSON Server</span> as a lightweight
            backend. Styling is done entirely with{" "}
            <span className="font-semibold">Tailwind CSS</span> and enhanced
            through <span className="font-semibold">DaisyUI</span> components
            for a polished, modern look.
          </p>
          <h1 className="text-3xl font-extrabold text-left my-10 text-[#412ad5] gap-3">
            <span className="decoration-4">Key Features</span>
          </h1>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-medium">Add Employee:</span> Easily input
              new employee details with a structured form.
            </li>
            <li>
              <span className="font-medium">Employee Profiles:</span> View and
              manage individual profiles, including skills, salary, contact
              details, and more.
            </li>
            <li>
              <span className="font-medium">Dynamic Emojis:</span> Fun and
              personalized emojis based on each employee’s favorite animal.
            </li>
            <li>
              <span className="font-medium">Smart Reminders:</span>{" "}
              Automatically displays custom messages for probation reviews and
              work anniversaries.
            </li>
            <li>
              <span className="font-medium">Employee Listing:</span> A
              responsive table that displays all employees with real-time
              updates.
            </li>
          </ul>
        </div>

        {/* HR Image */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1585599122425-251a97e9ecf4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="HR team collaboration"
            className="rounded-2xl shadow-lg w-full object-cover h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
