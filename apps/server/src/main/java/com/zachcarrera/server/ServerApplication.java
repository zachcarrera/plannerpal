package com.zachcarrera.server;

import java.util.List;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.zachcarrera.server.models.Assignment;
import com.zachcarrera.server.models.Role;
import com.zachcarrera.server.repositories.AssignmentRepository;
import com.zachcarrera.server.repositories.RoleRepository;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@Bean
	public ApplicationRunner applicationRunner (AssignmentRepository assignmentRepository, RoleRepository roleRepository) {
		return args -> {
			assignmentRepository.save(new Assignment("math"));
			assignmentRepository.saveAll(List.of(new Assignment("gym"), new Assignment("science")));
			roleRepository.saveAll(List.of(new Role("ROLE_STUDENT"), new Role("ROLE_INSTRUCTOR")));
		};
	}

}
