# HR-APP 👨‍💼👩‍💼

**HR-APP** is a simple and clean Human Resource web application built with React. It helps you view, add, and manage employee information easily. The goal of this app is to provide a smooth and responsive user experience using modern frontend tools.

---

## ✨ Features

### 🏠 Home Page

- Displays a list of all employees.
- Each employee card includes a button to view more details.
- Details open in a **modal popup** for a better user experience.

### ℹ️ About Page

- Gives an overview of the app.
- Includes general information about what the app does and the tools used.

### ➕ Add Employee Page

- A form to add new employees.
- Includes **form validation** to make sure inputs are not empty or invalid.
- Newly added employees are shown on the Home page after submission.

---

## 🛠️ Technologies Used

- **React** – JavaScript library for building the user interface.
- **Tailwind CSS** – For quick, clean, and responsive UI styling.
- **DaisyUI** – Tailwind-based UI components for a beautiful design.
- **Axios** – For API requests. We used a **custom Axios hook** to handle data fetching in a reusable way.
- **React Router DOM** – For routing between pages.
- **useOutletContext()** – To lift and share state between components.

---

## 📱 Mobile-Friendly Design

- Fully **responsive layout** that works on desktop, tablet, and mobile.
- Includes a **responsive menu** for easier navigation on smaller screens.

---

## 🧩 Extra Details

- **Modal for Employee Info**: Clicking on an employee opens a modal with more details.
- **Form Validation**: The Add Employee form checks if fields are filled before submitting.
- **Custom Axios Hook**: Reusable code for all API requests (fetching/posting data).
- **State Sharing with `useOutletContext()`**: Cleaner way to pass data between components without prop drilling.

---

## 🚀 Getting Started

Follow these steps to run the project locally:

```bash
# Clone the project
git clone https://github.com/your-username/hr-app.git
cd hr-app

# Install dependencies
npm install

# Start the development server
npm start
```
