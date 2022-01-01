package com.practiseproject.ppmtool.services;

import com.practiseproject.ppmtool.domain.Backlog;
import com.practiseproject.ppmtool.domain.Project;
import com.practiseproject.ppmtool.domain.User;
import com.practiseproject.ppmtool.exceptions.ProjectIdException;
import com.practiseproject.ppmtool.exceptions.ProjectNotFoundException;
import com.practiseproject.ppmtool.repositories.BacklogRepo;
import com.practiseproject.ppmtool.repositories.ProjectRepo;
import com.practiseproject.ppmtool.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepo projectRepo;

    @Autowired
    private BacklogRepo backlogRepo;

    @Autowired
    private UserRepo userRepo;

    public Project saveOrUpdateProject(Project project, String username) {
        if (project.getId() != null) {
            Project existingProject = projectRepo.findByProjectIdentifier(project.getProjectIdentifier());
            if (existingProject != null && (!existingProject.getProjectLeader().equals(username))) {
                throw new ProjectNotFoundException("Project not found in your account");
            } else if (existingProject == null) {
                throw new ProjectNotFoundException("Project with ID: '" + project.getProjectIdentifier() + "' cannot be updated because it does not exist");

            }
        }

        try {
            User user = userRepo.findByUsername(username);
            project.setProjectLeader(username);
            project.setUser(user);

            String projectIdentifier = project.getProjectIdentifier().toUpperCase();
            project.setProjectIdentifier(projectIdentifier);
            if (project.getId() == null) {
                Backlog backlog = new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjectIdentifier(projectIdentifier);
            } else {
                project.setBacklog(backlogRepo.findByProjectIdentifier(projectIdentifier));
            }
            return projectRepo.save(project);

        } catch (Exception ex) {
            throw new ProjectIdException("Project ID '" + project.getProjectIdentifier().toUpperCase() + "' already exists");
        }
    }

    public Project findProjectByIdentifier(String projectId, String username) {
        Project project = projectRepo.findByProjectIdentifier(projectId.toUpperCase());
        if (project == null) {
            throw new ProjectIdException("Project ID '" + projectId.toUpperCase() + "' does not exists");
        }

        if (!project.getProjectLeader().equals(username)) {
            throw new ProjectNotFoundException("Project not found in your account");
        }
        return project;
    }

    public List<Project> findAllProjects(String username) {
        return projectRepo.findByProjectLeader(username);
    }

    public void deleteProjectByIdentifier(String projectId, String username) {
        projectRepo.delete(findProjectByIdentifier(projectId, username));
    }

    public void updateProjectByIdentifier(Project project) {
        Project projectObj = projectRepo.findByProjectIdentifier(project.getProjectIdentifier());
        if (project == null) {
            throw new ProjectIdException("Project ID '" + project.getProjectIdentifier().toUpperCase() + "' does not exists");

        }
        projectObj.setProjectName(project.getProjectName());
        projectObj.setDescription(project.getDescription());
        projectRepo.save(projectObj);
    }

}
