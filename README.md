# MERN Authentication and Authorization

## Overview

This project implements a secure authentication and authorization system using the MERN stack (MongoDB, Express, React, Node.js). It incorporates various libraries such as Zod for password validation, bcrypt for secure password hashing, and JWT for token-based authentication.

## Features

- **User Registration:** Utilizes Zod to ensure password strength and securely stores hashed passwords using bcrypt with a salt factor of 10.

- **User Login:** Validates user credentials, generates JWT tokens for authenticated sessions, and securely compares hashed passwords.

- **Frontend (React):**
  - Utilizes `useState` for managing component state.
  - Passes data between components using props.
  - Implements separate pages for login, registration, and a secure homepage.

## Deployment

This project is ready for deployment. Follow the steps below to deploy it on GitHub:

1. **Clone Repository:**
   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
