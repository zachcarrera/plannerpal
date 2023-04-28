package com.zachcarrera.server;

import java.util.Date;
import java.util.List;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.zachcarrera.server.models.Assignment;
import com.zachcarrera.server.models.Course;
import com.zachcarrera.server.models.Role;
import com.zachcarrera.server.repositories.AssignmentRepository;
import com.zachcarrera.server.repositories.CourseRepository;
import com.zachcarrera.server.repositories.RoleRepository;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@Bean
	public ApplicationRunner applicationRunner (AssignmentRepository assignmentRepository, RoleRepository roleRepository, CourseRepository courseRepository) {
		return args -> {
			// Course course1 = courseRepository.save(new Course("Physics"));
			// Course course2 = courseRepository.save(new Course("Math"));
			// assignmentRepository.save(new Assignment("Project Manager", new Date(1688972400000L), 3, course1));
			// assignmentRepository.saveAll(List.of(new Assignment("CareSoft", new Date(1688972400000L), 4, course2), new Assignment("Book Club", new Date(1688972400000L), 2, course1)));
			// assignmentRepository.save(new Assignment("Project Manager", new Date(1688972400000L), 3));
			// assignmentRepository.saveAll(List.of(new Assignment("CareSoft", new Date(1688972400000L), 4), new Assignment("Book Club", new Date(1688972400000L), 2)));
			roleRepository.saveAll(List.of(new Role("ROLE_STUDENT"), new Role("ROLE_INSTRUCTOR")));
		};
	}

}
