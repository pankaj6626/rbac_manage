Role-Based Access Control (RBAC) Project

Overview
This is a web application implementing Role-Based Access Control (RBAC) with three distinct roles: Admin, Manager, and User. The application allows users to log in, view role-specific content, and manage access permissions based on their roles. It includes features like registration, login, and protected routes that can only be accessed by users with specific roles.

overall file structure of the project 


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



 Features
Role-Based Access:

Admin: Has access to all resources (Admin, Manager, and User).
Manager: Has access to Manager and User resources.
User: Has access to only User-specific resources.
User Registration: Users can register with a specified role.

Login: Users log in to access the dashboard and protected resources.

Dashboard: Displays role-specific content based on the authenticated user's role.

Protected Routes: Users can only access certain resources based on their assigned role.

Tech Stack
Backend: Node.js with Express
JWT (JSON Web Tokens) for authentication
Role-based access control logic

for frontend i tried implementing it ,made the web page
but was getting some error in role based access after login 
will correct it soon and upload the frontend part also 

i tried testing api's on postman ,it is working correctly
