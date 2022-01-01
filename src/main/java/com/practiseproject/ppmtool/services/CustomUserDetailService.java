package com.practiseproject.ppmtool.services;

import com.practiseproject.ppmtool.domain.User;
import com.practiseproject.ppmtool.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class CustomUserDetailService implements UserDetailsService {
    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepo.findByUsername(username);

        if (user == null) new UsernameNotFoundException("User Not Found");
        return user;
    }

    public User loadUserById(Long id) {
        User user = userRepo.findById(id).get();
        if (user == null) new UsernameNotFoundException("User Not Found");
        return user;
    }
}
