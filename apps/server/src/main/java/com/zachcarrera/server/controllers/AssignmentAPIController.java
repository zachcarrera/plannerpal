package com.zachcarrera.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zachcarrera.server.models.Assignment;
import com.zachcarrera.server.services.AssignmentService;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/assignments")
public class AssignmentAPIController {

    @Autowired
    private AssignmentService assignmentService;

    // ----- ALL ASSIGNMENTS -----
    @GetMapping("")
    public ResponseEntity<List<Assignment>> allAssignments() {
        return ResponseEntity.ok().body(assignmentService.allAssignments());
    }


    // ----- ONE ASSIGNMENT -----
    @GetMapping("/{id}")
    public ResponseEntity<Assignment> oneAssignment(@PathVariable("id") Long id) {
        return ResponseEntity.ok().body(assignmentService.findAssignment(id));
    }

    // ----- NEW ASSIGNMENT -----
    @PostMapping("")
    public ResponseEntity<Object> createAssignment(@Valid @RequestBody Assignment assignment, BindingResult result) {
        if (result.hasErrors()) {
            return ResponseEntity.status(400).body(result.getAllErrors());
        }

        Assignment savedAssignment = assignmentService.createAssignment(assignment);
        return ResponseEntity.ok().body(savedAssignment);
        
    }

    // ----- DELETE ASSIGNMENT -----
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteAssignment(@PathVariable("id") Long id) {
        assignmentService.removeAssignment(id);
        return ResponseEntity.ok().build();
    }

    // ----- UPDATE ASSIGNMENT -----
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateAssignment(@PathVariable("id") Long id, @Valid @RequestBody Assignment assignment, BindingResult result) {
        if (result.hasErrors()) {
            return ResponseEntity.status(400).body(result.getAllErrors());
        }
        assignment.setId(id);
        Assignment updatedAssignment = assignmentService.updateAssignment(assignment);
        return ResponseEntity.ok().body(updatedAssignment);
    }


    
}
