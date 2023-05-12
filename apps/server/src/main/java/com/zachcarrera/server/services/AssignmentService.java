package com.zachcarrera.server.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    // ----- FIND ONE -----
    public Assignment findAssignment(Long id) {
        Optional<Assignment> optionalAssignment = assignmentRepository.findById(id);
        if (optionalAssignment.isPresent()) {
            return optionalAssignment.get();
        }
        return null;
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
