package com.example.onlineshopAPI.controller;

import com.example.onlineshopAPI.doa.UserRepository;
import com.example.onlineshopAPI.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class UserController {

    private final UserRepository userRepository;
    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @PostMapping("/users")
    public ResponseEntity<String> createUser(@RequestBody User user){
        if(user == null){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User can't be null");
        }
        else{
            userRepository.save(user);
            return new ResponseEntity<>("Account created", HttpStatus.OK);
        }
    }

}
