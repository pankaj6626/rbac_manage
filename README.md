Role-Based Access Control (RBAC) Project
Overview
This is a web application implementing Role-Based Access Control (RBAC) with three distinct roles: Admin, Manager, and User. The application allows users to log in, view role-specific content, and manage access permissions based on their roles. It includes features like registration, login, and protected routes that can only be accessed by users with specific roles.

overall file structure of the project 

rbac/
 |
 |______node_modules
 |______src/
 |        |
 |        |________config/
 |        |            |______dbConnect.js
 |        |           
 |        |________controllers
 |        |            |______authController.js
 |        |
 |        |_________middlewares
 |        |            |______authMiddleware.js
 |        |            |______roleMiddleware.js
 |        |
 |        |_________models
 |        |            |______userModel.js
 |        |
 |        |_________routes
 |                     |______authRoutes.js
 |                     |______userRoutes.js
 |
 |______.gitignore
 | 
 |______index.js
 |
 |______package-lock.json
 |
 |______package.json

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
