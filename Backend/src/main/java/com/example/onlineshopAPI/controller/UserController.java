package com.example.onlineshopAPI.controller;

import com.example.onlineshopAPI.doa.UserRepository;
import com.example.onlineshopAPI.model.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class UserController {

    private final UserRepository userRepository;
    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @PostMapping("/users")
    public void createUser(@RequestBody User user){
        userRepository.save(user);
    }
    
}
