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
   git clone https://github.com/M-N-Hossain/online-learning-platform
   cd online-learning-platform
   
2. Install dependencies:
   ```bash
   npm install

3. Configure environment variables: Create a .env file with:
   ```bash
   MONGO_URI=mongodb://localhost:27017/online-learning
JWT_SECRET=your_jwt_secret

4. Run the application:
   ```bash
   npm run start

5. Access Swagger documentation:

   - Visit: http://localhost:3000/api-docs

## Future Enhancements

- Add course progress tracking.
- Integrate payment systems for course subscriptions.
- Implement notifications for enrollment updates.

# Thank you for reaching out to this point. Take Love
