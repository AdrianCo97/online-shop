package com.example.onlineshopAPI.service;

import com.example.onlineshopAPI.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

public interface UserServiceInterface {

    ResponseEntity<String> createUser(User user);

    ResponseEntity<String> deleteUser(Long id);

    User getUser(Long Id);

    Iterable<User> getUsers();

    ResponseEntity<User> changeUser(Long id, User user);

}
