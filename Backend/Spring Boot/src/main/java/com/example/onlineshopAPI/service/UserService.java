package com.example.onlineshopAPI.service;
import com.example.onlineshopAPI.doa.UserRepository;
import com.example.onlineshopAPI.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class UserService implements UserServiceInterface{

    private UserRepository userRepository;


    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public ResponseEntity<String> createUser(User user) {
        if(user == null){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User can't be null");
        }
        else{
            user.setPassword(user.getPassword());
            userRepository.save(user);
            return new ResponseEntity<>("Account created", HttpStatus.OK);
        }
    }

    @Override
    public ResponseEntity<String> deleteUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "This user does not exist."));
        userRepository.delete(user);
        return new ResponseEntity<>("User deleted", HttpStatus.OK);
    }

    @Override
    public User getUser(Long id) {
        User user = userRepository.findById(id).
                orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
        return user;
    }

    public Iterable<User> getUsers(){
        if(((List<User>)userRepository.findAll()).size() == 0){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "This database contains no users");
        }
        else{
            return userRepository.findAll();
        }
    }

    @Override
    public ResponseEntity<User> changeUser(Long id, User user) {
        User userToChange = userRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "This user does not exist"));
        userToChange.setFirstname(user.getFirstname());
        userToChange.setLastname(user.getLastname());
        userToChange.setEmail(user.getEmail());
        userToChange.setPassword(user.getPassword());
        return ResponseEntity.ok(userToChange);
    }
}
