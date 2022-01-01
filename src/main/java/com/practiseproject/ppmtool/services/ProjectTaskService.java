package com.practiseproject.ppmtool.services;

import com.practiseproject.ppmtool.domain.Backlog;
import com.practiseproject.ppmtool.domain.ProjectTask;
import com.practiseproject.ppmtool.exceptions.ProjectNotFoundException;
import com.practiseproject.ppmtool.repositories.BacklogRepo;
import com.practiseproject.ppmtool.repositories.ProjectRepo;
import com.practiseproject.ppmtool.repositories.ProjectTaskRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskService {

    @Autowired
    private BacklogRepo backlogRepo;

    @Autowired
    private ProjectTaskRepo projectTaskRepo;

    @Autowired
    private ProjectRepo projectRepo;

    @Autowired
    private ProjectService projectService;

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask, String username) {

        Backlog backlog = projectService.findProjectByIdentifier(projectIdentifier.toUpperCase(), username).getBacklog();
        projectTask.setBacklog(backlog);

        Integer backLogSequence = backlog.getPTSequence();
        backLogSequence++;
        backlog.setPTSequence(backLogSequence);

//        Add sequence to project task
        projectTask.setProjectSequence(backlog.getProjectIdentifier() + "-" + backLogSequence);
        projectTask.setProjectIdentifier(projectIdentifier);

//        Initial priority when priority null
        if (projectTask.getPriority() == null || projectTask.getPriority() == 0) {
            projectTask.setPriority(3);
        }
//        Initial status when status null
        if (projectTask.getStatus() == null || projectTask.getStatus().isEmpty()) {
            projectTask.setStatus("TO DO");
        }

        return projectTaskRepo.save(projectTask);

    }

    public Iterable<ProjectTask> findBackLogById(String backlog_id, String username) {
        projectService.findProjectByIdentifier(backlog_id, username);

        return projectTaskRepo.findByProjectIdentifierOrderByPriority(backlog_id);
    }

    public ProjectTask findByProjectSequence(String backlog_id, String pt_id, String username) {
        projectService.findProjectByIdentifier(backlog_id, username);

        ProjectTask projectTask = projectTaskRepo.findByProjectSequence(pt_id);

        if (projectTask == null) {
            throw new ProjectNotFoundException("Project Task with ID: '" + pt_id + "' is not found");
        }

        if (!projectTask.getProjectIdentifier().equals(backlog_id)) {
            throw new ProjectNotFoundException("Project Task with ID: '" + pt_id + "' does not exist in project with ID: '" + backlog_id);
        }

        return projectTask;
    }

    public ProjectTask updateProjectSequence(ProjectTask updatedTask, String backlog_id,String username) {
        String pt_id = updatedTask.getProjectSequence();
        ProjectTask projectTask = findByProjectSequence(backlog_id, pt_id, username);

        projectTask = updatedTask;
        return projectTaskRepo.save(projectTask);
    }

    public void deletePTByProjectSequence(String backlog_id, String pt_id, String username) {
        ProjectTask projectTask = findByProjectSequence(backlog_id, pt_id,username);
        projectTaskRepo.delete(projectTask);
    }
}
