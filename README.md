# Angular 19 web application with Marvel api's

![Angular](https://img.shields.io/badge/Angular-v19.1.4-red)
![Node](https://img.shields.io/badge/Node-v23.6.0-green)
![NPM](https://img.shields.io/badge/NPM-v10.9.2-blue)

This project explores the new features introduced in Angular v19. By utilizing the Marvel API, the application demonstrates a CRUD (Create, Read, Update, Delete) functionality, providing practical insights into the following Angular v19 features:

- **@if/@else Syntax**: Demonstrates conditional rendering within templates.
- **Standalone Components**: Showcases the use of components that do not require NgModules.
- **Signals Input and Output**: Illustrates the new reactive programming model for handling component inputs and outputs.
- **Dependency Injection**: Examines the improvements and changes in Angular's dependency injection system.
- **Enhanced Template Syntax**: Utilizes the new template syntax improvements for better readability and maintainability.
- **Typed Forms**: Demonstrates the use of strongly typed forms for improved type safety and developer experience.
- **Router Enhancements**: Explores the new features and improvements in Angular's router module.
- **Improved Performance**: Highlights the performance optimizations introduced in Angular v19.
- **Error Handling**: Showcases the new error handling mechanisms and best practices.
- **State Management**: Integrates state management solutions like NgRx or Akita to manage application state effectively.

These features are integrated into the application to provide practical examples and facilitate a comprehensive learning experience.

## Testing with Jest

This project uses Jest for testing. Jest offers fast test execution, easy mocking, and a rich set of matchers to ensure the application works as expected.

To run the tests, use the following command:

## Tests coverage

<img src="./public/test.png" />

## Integrating with Marvel API

To integrate the Marvel API into your Angular application, follow these steps:

### 1. Obtain API Key

First, you need to obtain an API key from the [Marvel Developer Portal](https://developer.marvel.com/).

### 2. Set Up Environment Variables

Create a file named `environment.ts` in your `src/environments` directory and add your API key:

```typescript
export const environment = {
  MARVEL_PUBLIC_API: "YOUR_MARVEL_PUBLIC_API_KEY",
  MARVEL_PRIVATE_API: "YOUR_MARVEL_PRIVATE_API_KEY",
};
```

## Running the Application

Follow these steps to install dependencies and start the application:

### 1. Install Dependencies

Navigate to the project directory and run the following command to install the required dependencies:

```bash
npm install
```

### 2. Start the Development Server

After the dependencies are installed, start the development server with the following command:

```bash
npm start
```

The application will be available at `http://localhost:4200/`.

### 3. Build the Application

To build the application for production, use the following command:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### 4. Running Tests

To run the tests, use the following command:

```bash
npm test
```

This will execute the unit tests using Jest and display the results in the terminal.
