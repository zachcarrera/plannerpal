package com.zachcarrera.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zachcarrera.server.exception.AssignmentNotFoundException;
import com.zachcarrera.server.models.Assignment;
import com.zachcarrera.server.repositories.AssignmentRepository;

@Service
public class AssignmentService {
    @Autowired
    private AssignmentRepository assignmentRepository;

    // ----- FIND ALL -----
    public List<Assignment> allAssignments() {
        return assignmentRepository.findAll();
    }

    public List<Assignment> findNewestAssignments() {
        return assignmentRepository.findTop3ByOrderByCreatedAtDesc();
    }

    // ----- FIND ONE -----
    public Assignment findAssignment(Long id) {
        return assignmentRepository.findById(id)
                .orElseThrow(() -> new AssignmentNotFoundException("Assignment not found with id: " + id));
    }

    // ----- CREATE -----
    public Assignment createAssignment(Assignment newAssignment) {
        return assignmentRepository.save(newAssignment);
    }

    // ----- UPDATE -----
    public Assignment updateAssignment(Assignment oneAssignment) {
        return assignmentRepository.save(oneAssignment);
    }

    // ----- DELETE -----
    public void removeAssignment(Long id) {
        assignmentRepository.deleteById(id);
    }

}
