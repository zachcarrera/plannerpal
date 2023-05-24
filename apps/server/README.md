# Spring Boot Backend

The backend to this project is written in java using the Spring Boot framework

## Instructions to run a development evnironment

Open this project in an IDE and run it as a maven spring boot project. Alternatively open a terminal and navigate to the server directory and run `mvn spring-boot:run`

### Notes

This project's backend can be run independently from the frontend and can be accessed with API platforms such as Postman. The only public routes are prefixed by `/api/auth/` and all other routes must include a valid JSON Web Token in the request's Authorization header.
