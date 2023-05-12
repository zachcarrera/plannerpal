package com.zachcarrera.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.zachcarrera.server.dto.RegisterRequest;
import com.zachcarrera.server.models.User;
import com.zachcarrera.server.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User registerUser(RegisterRequest request) {

        User registeredUser = new User(request.getFirstName(), request.getLastName(), request.getEmail(),
                passwordEncoder.encode(request.getPassword()));

        return userRepository.save(registeredUser);
    }

}
