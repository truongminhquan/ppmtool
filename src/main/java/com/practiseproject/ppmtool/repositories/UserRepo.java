package com.practiseproject.ppmtool.repositories;

import com.practiseproject.ppmtool.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    User findByUsername(String username);

    User getById(Long id);

    Optional<User> findById(Long id);
}
