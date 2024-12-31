# Online Learning Platform API

An API for managing an online learning platform, built with **NestJS** and **MongoDB**. It supports user authentication, role-based authorization, and flexible course and enrollment management.

## Features
1. **Authentication & Authorization**
   - JWT-based login system.
   - Role-based access control for students, instructors, and admins.

2. **Course Management**
   - Instructors can create, update, and delete courses.
   - Students can view available courses.

3. **Enrollment System**
   - Students can enroll in courses.
   - Tracks enrollments using a dedicated collection for future scalability.

4. **Data Validation**
   - Validates input data using DTOs and `class-validator`.

5. **Swagger API Documentation**
   - Interactive API documentation for testing endpoints.

## Tech Stack
- **NestJS**: Backend framework.
- **MongoDB**: Database for flexible, NoSQL storage.
- **Swagger**: API documentation.
- **JWT**: Token-based authentication.

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/online-learning-platform-api.git
   cd online-learning-platform-api
   
2. Install dependencies:
  
  ```bash
  npm install
  
3. 
