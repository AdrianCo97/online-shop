package com.example.onlineshopAPI.service;
import com.example.onlineshopAPI.model.User;
import org.springframework.http.ResponseEntity;

public interface UserServiceInterface {

    ResponseEntity<String> createUser(User user);

    ResponseEntity<String> deleteUser(Long id);

    User getUser(Long Id);

    Iterable<User> getUsers();

    ResponseEntity<User> changeUser(Long id, User user);

}
