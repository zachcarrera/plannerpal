package com.zachcarrera.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zachcarrera.server.models.User;
import com.zachcarrera.server.repositories.UserRepository;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;
    

    @GetMapping("")
    public String test() {
        return "hello from api";
    }

    @GetMapping("/login")
    public String login() {
        return "this is the login route";
    }

    @GetMapping("/users")
    public List<User> users() {
        return userRepository.findAll();
    }
    
}
