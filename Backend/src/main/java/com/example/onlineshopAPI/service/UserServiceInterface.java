package com.example.onlineshopAPI.service;

import com.example.onlineshopAPI.model.User;

public interface UserServiceInterface {

    User saveUser(User user);

    void deleteUser(User user);

    User getUserById(Long Id);

    void changeUser(User user);

}
