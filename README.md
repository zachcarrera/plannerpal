# PlannerPal

A web app to track progress with assignments across multiple classes or courses. Register as a student and login to access all functionality.

## How to run Locally

node.js, java, maven, and MySql are all required to run a devolopment enviroment

1. Create a MySql schema named `planner_pal` and update the connection credentials in the `application.properties` file
2. Navigate into the client directory and run `npm install` and once all the dependencies have been installed run `npm run start`
3. Open the server directory as a maven project in your IDE of choice and run the project as a Spring Boot app or run `mvn spring-boot:run` while inside the server directory
