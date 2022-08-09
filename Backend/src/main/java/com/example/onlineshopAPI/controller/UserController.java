package com.example.onlineshopAPI.controller;

import com.example.onlineshopAPI.doa.UserRepository;
import com.example.onlineshopAPI.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class UserController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserController(UserRepository userRepository, PasswordEncoder passwordEncoder){
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/users")
    public ResponseEntity<String> createUser(@RequestBody User user){
        if(user == null){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User can't be null");
        }
        else{
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(user);
            return new ResponseEntity<>("Account created", HttpStatus.OK);
        }
    }

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        User user = userRepository.findById(id).
                orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
        return user;
    }

}
