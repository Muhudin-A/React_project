# React Form Application

This project is a simple React application that demonstrates the use of form handling and state management in React. The form collects basic personal information and allows users to submit the data. The collected data includes the user's name, email, contact number, gender, subjects, resume upload, and other preferences.

## Features
- User input fields for first name, last name, email, and contact.
- Radio buttons for selecting gender.
- Checkbox inputs for selecting preferred subjects.
- File upload input for uploading a resume.
- URL input field.
- Dropdown (select) input to choose a programming language.
- Text area for adding additional information ("About" section).
- Form submission and reset functionality.

## Project Setup

### 1. Install Dependencies

To run this project, make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Then, install the necessary dependencies by running:

```bash
npm install
```

### 2. Run the Project

After installing the dependencies, start the project with the following command:

```bash
npm start
```

The application will start running on `http://localhost:3000`.

## File Structure

- `src/App.js`: The main component where the form logic is handled.
- `src/App.css`: Contains styling for the form.
- `src/logo.svg`: Default logo provided by Create React App.

## How It Works

### State Management
The form uses React's `useState()` hooks to manage the state of different form fields, including:
- First name and last name.
- Email and contact number.
- Gender selection.
- Preferred subjects.
- Resume file upload.
- URL input.
- Dropdown selection.
- "About" text area input.

### Form Submission
When the form is submitted:
- The `handleSubmit` function is triggered, preventing the default form submission behavior.
- The user's data is shown in an alert box for demonstration purposes.

### Form Reset
When the reset button is clicked, the form is cleared, and all states are reset to their initial values using the `handleReset` function.

## Form Components and Inputs

- **Text Inputs**: First name, last name, email, and contact fields.
- **Radio Buttons**: Gender selection (male, female, other).
- **Checkboxes**: Subjects (English, Math, Physics).
- **File Upload**: For uploading a resume.
- **URL Input**: For entering a personal URL.
- **Dropdown**: For selecting a programming language.
- **Text Area**: "About yourself" section.

## Usage

### Submit the Form
1. Fill in the required fields marked with `*`.
2. Choose additional options such as gender, subjects, and languages.
3. Upload a resume and provide a URL.
4. Write a brief description about yourself.
5. Click the "Submit" button to submit the form and view the results in an alert box.

### Reset the Form
Click the "Reset" button to clear all fields and reset the form to its initial state.

---

Feel free to adjust this `README.md` based on any further customizations or updates you make to the app.