package com.example.onlineshopAPI.doa;
import com.example.onlineshopAPI.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
