# Role-Based Access Control (RBAC) Project

## Folder Structure

The project folder structure is as follows:


### Folder Explanation:
- **node_modules/**: Contains all the project dependencies installed via npm.
- **src/**: The main source code for the backend application.
  - **config/**: Configuration files (e.g., for database connections).
  - **controllers/**: Contains files that handle the business logic for different routes.
  - **middlewares/**: Custom middleware for authorization and role checking.
  - **models/**: Mongoose or database models that interact with the database.
  - **routes/**: API endpoints that connect the backend logic to the frontend.
- **.gitignore**: Specifies which files/folders should be ignored by Git (e.g., node_modules).
- **index.js**: The main entry point for the server.
- **package.json**: Contains project metadata, scripts, and dependencies.
- **package-lock.json**: Ensures reproducible builds by locking dependency versions.


## Overview
This is a web application implementing **Role-Based Access Control (RBAC)** with three distinct roles: **Admin**, **Manager**, and **User**. The application allows users to register, log in, and view role-specific content based on their assigned roles. Access to certain resources is restricted depending on the user's role. This project includes features like registration, login, and protected routes that can only be accessed by users with specific roles.

## Features
- **Role-Based Access**:
  - **Admin**: Has access to all resources (Admin, Manager, and User).
  - **Manager**: Has access to Manager and User resources.
  - **User**: Has access to only User-specific resources.

- **User Registration**: Users can register with a specified role (Admin, Manager, or User).
- **Login**: Users log in to access the dashboard and protected resources.
- **Dashboard**: Displays role-specific content based on the authenticated user's role.
- **Protected Routes**: Only users with the appropriate roles can access certain resources.

## Tech Stack

### Backend:
- **Node.js** with **Express** for the server.
- **JWT (JSON Web Tokens)** for authentication.
- **MongoDB** for database storage (with Mongoose for model management).
- Role-based access control logic is implemented through middleware.

### Frontend (Planned):
- A frontend will be added soon to interface with the backend.
- The role-based access logic is being implemented to ensure users are directed to the appropriate content based on their roles.
  
### Testing:
- API endpoints are tested and working correctly through **Postman**.
- for frontend i tried implementing it ,made the web page
but was getting some error in role based access after login,
i will correct it soon and upload the frontend part also 


