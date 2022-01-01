package com.practiseproject.ppmtool.services;

import com.practiseproject.ppmtool.domain.User;
import com.practiseproject.ppmtool.exceptions.UsernameAlreadyExistsException;
import com.practiseproject.ppmtool.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User saveUser(User user) {
        try {
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            user.setConfirmPassword("");
//            user.setUsername(user.getUsername());
            return userRepo.save(user);
        } catch (Exception e) {
            throw new UsernameAlreadyExistsException("Username '" + user.getUsername() + "' already exists");
        }

    }
}
