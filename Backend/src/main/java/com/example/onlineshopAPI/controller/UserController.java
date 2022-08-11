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

import java.util.List;

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

    @GetMapping("/users")
    public Iterable<User> getUsers(){
        if(((List<User>)userRepository.findAll()).size() == 0){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "This database contains no users");
        }
        else{
            return userRepository.findAll();
        }
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "This user does not exist."));
        userRepository.delete(user);
        return new ResponseEntity<>("User deleted", HttpStatus.OK);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> changeUser(@PathVariable Long id, @RequestBody User user){
        User userToChange = userRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "This user does not exist"));
        userToChange.setFirstname(user.getFirstname());
        userToChange.setLastname(user.getLastname());
        userToChange.setEmail(user.getEmail());
        userToChange.setPassword(user.getPassword());
        return ResponseEntity.ok(userToChange);
    }


}
