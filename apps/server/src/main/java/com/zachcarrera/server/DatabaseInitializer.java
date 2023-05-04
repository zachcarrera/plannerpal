package com.zachcarrera.server;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.zachcarrera.server.models.Role;
import com.zachcarrera.server.models.User;
import com.zachcarrera.server.repositories.AssignmentRepository;
import com.zachcarrera.server.repositories.CourseRepository;
import com.zachcarrera.server.repositories.RoleRepository;
import com.zachcarrera.server.repositories.UserRepository;

@Component
public class DatabaseInitializer implements ApplicationListener<ApplicationReadyEvent>{

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private AssignmentRepository assignmentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Override
    public void onApplicationEvent(ApplicationReadyEvent event) {

        
        System.out.println("first print");
        // Course course1 = courseRepository.save(new Course("Physics"));
        // Course course2 = courseRepository.save(new Course("Math"));
        // assignmentRepository.save(new Assignment("Project Manager", new Date(1688972400000L), 3, course1));
        // assignmentRepository.saveAll(List.of(new Assignment("CareSoft", new Date(1688972400000L), 4, course2), new Assignment("Book Club", new Date(1688972400000L), 2, course1)));
        // assignmentRepository.save(new Assignment("Project Manager", new Date(1688972400000L), 3));
        // assignmentRepository.saveAll(List.of(new Assignment("CareSoft", new Date(1688972400000L), 4), new Assignment("Book Club", new Date(1688972400000L), 2)));
        roleRepository.saveAll(List.of(new Role("ROLE_STUDENT"), new Role("ROLE_INSTRUCTOR")));


        userRepository.save(new User("Zach", "Carrera", "zach@mail.com", passwordEncoder.encode("password")));

        System.out.println("app started");
        
    }
    

}
