# Billing Platform

## Description
A simple billing platform application that allows users to log in with Google, view their usage details and billing information, and generate invoices. The application consists of a frontend built with React and a backend built with Node.js, Express, and MongoDB.

## Prerequisites
- Node.js and npm installed on your machine
- MongoDB server running (locally or on the cloud, e.g., MongoDB Atlas)
- Google Developer account to obtain OAuth 2.0 Client ID and Client Secret

## Setup

### Backend

1. **Navigate to the `backend` directory:**
    ```bash
    cd backend
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    ```

3. **Create a `.env` file in the `backend` directory with the following content:**
    ```env
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    SESSION_SECRET_KEY=736669a411d03919584a40e8b037b1098a3
    MONGO_URI=your-mongodb-uri
    ```

4. **Ensure MongoDB is running:**
   - If using MongoDB locally, make sure your MongoDB server is running.
   - If using MongoDB Atlas, ensure your cluster is up and running and replace `your-mongodb-uri` with your actual connection string.

5. **Start the backend server:**
    ```bash
    npm start
    ```

### Frontend

1. **Navigate to the `frontend` directory:**
    ```bash
    cd frontend
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    ```

3. **Start the frontend server:**
    ```bash
    npm start
    ```

## Project Structure

### Backend
- `server.js`: Main entry point for the backend server.
- `config/passportConfig.js`: Configuration file for Passport.js with Google OAuth.
- `models/User.js`: Mongoose model for User.
- `routes/usage.js`: Route handler for fetching usage details.
- `routes/billing.js`: Route handler for fetching billing information and generating invoices.

### Frontend
- `src/components/Login.js`: Component for Google login.
- `src/components/UsageDetails.js`: Component to display usage details.
- `src/components/BillingInformation.js`: Component to display billing information.
- `src/components/GenerateInvoice.js`: Component to generate invoice.
- `src/App.js`: Main component that brings all other components together.

## Usage

### Google Login
- Click on the "Sign in with Google" button.
- Authenticate using your Google account.

### Fetching Data
- Once logged in, the application will automatically fetch and display usage details and billing information.

### Generating Invoice
- Click on the "Generate Invoice" button to generate an invoice based on the billing information.

## Troubleshooting

### Common Issues

- **Dependencies not installed:**
  Ensure you run `npm install` in both the `backend` and `frontend` directories.

- **Environment variables not set:**
  Ensure the `.env` file in the `backend` directory contains the correct values for `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `SESSION_SECRET_KEY`, and `MONGO_URI`.

- **MongoDB connection issues:**
  Ensure your MongoDB server is running and the URI is correct.

- **OAuth2 errors:**
  Ensure your Google OAuth credentials are correct and properly set in the `.env` file.

### Logs
- Backend logs will appear in the terminal where you run `npm start`.
- Frontend logs and errors will appear in the browser console.


Feel free to fork this project and contribute by submitting a pull request. For major changes, please open an issue first to discuss what you would like to change.

