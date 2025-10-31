# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## JobCounter Component

This component demonstrates React's `useState` and event handling. Click the "Add Job" button to increment the job count.

Located in: `src/JobCounter.js`
## AdvancedJobCounter Component
The AdvancedJobCounter is an interactive React component designed to demonstrate key frontend concepts including state management, conditional rendering, and event handling.

🔧 Features:
Tracks the number of jobs using React’s useState

Prevents job count from dropping below zero

Displays dynamic messages based on job count thresholds

Allows toggling between Production and UAT environments

Includes buttons to add, remove, and reset job count

📍 Location:
src/AdvancedJobCounter.js

💡 Usage:
This component is ideal for practical exercises focused on:

Understanding stateful logic

Implementing conditional UI feedback

Practicing event-driven updates

Exploring environment toggling in React



🧾 DynamicForm Component
DynamicForm.js is a React component included in this repo that demonstrates interactive form handling with validation and dynamic rendering.

✨ Features
Live input tracking with character count

Minimum length validation (default: 3 characters)

Error message display for invalid input

Submit button adds valid input to a list

Reset button clears the input field

Remove button deletes the last submitted item

Dynamic list rendering of submitted items


📦 Usage
To use the component:

js
import DynamicForm from './DynamicForm';

function App() {
  return (
    <div>
      <DynamicForm />
    </div>
  );
}

🧠 Validation Logic
The form checks that the input has at least 3 non-whitespace characters. If invalid, it shows an error message and disables submission.

js
if (value.trim().length < MIN_LENGTH) {
  setError(`Input must be at least ${MIN_LENGTH} characters.`);
} else {
  setError('');
}


