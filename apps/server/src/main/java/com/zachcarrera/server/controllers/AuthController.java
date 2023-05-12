package com.zachcarrera.server.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zachcarrera.server.config.JwtUtils;
import com.zachcarrera.server.dto.AuthenticationRequest;
import com.zachcarrera.server.dto.AuthenticationResponse;
import com.zachcarrera.server.models.User;
import com.zachcarrera.server.repositories.UserRepository;
import com.zachcarrera.server.services.UserDetailsServiceImpl;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtils jwtUtils;

    @GetMapping("")
    public String test() {
        return "hello from api";
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthenticationRequest request, HttpServletResponse response) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        User user = (User) userDetailsService.loadUserByUsername(request.getEmail());

        if (user != null) {
            String jwt = jwtUtils.generateToken(user);
            List<String> roles = user.getAuthorities().stream()
                                    .map(item -> item.getAuthority())
                                    .collect(Collectors.toList());

            Cookie cookie = new Cookie("jwt", jwt);

            cookie.setHttpOnly(true);
            response.addCookie(cookie);
            return ResponseEntity.ok().body(new AuthenticationResponse(jwt, user.getId(), user.getFirstName(), user.getUsername(), roles));
        }

        return ResponseEntity.status(400).body("There was an error");
    }

    @PostMapping("/register")
    public ResponseEntity<?> register() {
        return null;
    }

    @GetMapping("/users")
    public List<User> users() {
        return userRepository.findAll();
    }
    
}
