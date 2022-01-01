package com.practiseproject.ppmtool.repositories;

import com.practiseproject.ppmtool.domain.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepo extends JpaRepository<Project, Long> {

    Project findByProjectIdentifier(String projectId);

    List<Project> findByProjectLeader(String username);

}
