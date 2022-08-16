package com.example.onlineshopAPI.service;
import com.example.onlineshopAPI.doa.UserRepository;
import com.example.onlineshopAPI.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserServiceInterface{

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User user) {
        return null;
    }

    @Override
    public void deleteUser(User user) {

    }

    @Override
    public User getUserById(Long Id) {
        return null;
    }

    @Override
    public void changeUser(User user) {

    }
}
