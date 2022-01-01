package com.practiseproject.ppmtool.repositories;

import com.practiseproject.ppmtool.domain.Backlog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BacklogRepo extends JpaRepository<Backlog, Long> {
    Backlog findByProjectIdentifier(String Identifier);
}
