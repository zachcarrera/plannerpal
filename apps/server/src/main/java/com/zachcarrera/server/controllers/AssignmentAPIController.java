package com.zachcarrera.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.zachcarrera.server.dto.NewAssignment;
import com.zachcarrera.server.models.Assignment;
import com.zachcarrera.server.models.Course;
import com.zachcarrera.server.models.User;
import com.zachcarrera.server.services.AssignmentService;
import com.zachcarrera.server.services.CourseService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/assignments")
public class AssignmentAPIController {

    @Autowired
    private AssignmentService assignmentService;

    @Autowired
    private CourseService courseService;

    // ----- ALL ASSIGNMENTS -----
    @GetMapping("")
    public ResponseEntity<List<Assignment>> allAssignments(
            @RequestParam(required = false, name = "sort_by") String sortBy) {

        User loggedInUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        System.out.println(loggedInUser.getFirstName());

        if (sortBy != null) {
            return ResponseEntity.ok().body((assignmentService.allAssignmentsForUser(loggedInUser)));
            // return ResponseEntity.ok().body((assignmentService.findNewestAssignments()));

        }
        return ResponseEntity.ok().body(assignmentService.allAssignmentsForUser(loggedInUser));
        // return ResponseEntity.ok().body(assignmentService.allAssignments());
    }

    // ----- ONE ASSIGNMENT -----
    @GetMapping("/{id}")
    public ResponseEntity<Assignment> oneAssignment(@PathVariable("id") Long id) {
        return ResponseEntity.ok().body(assignmentService.findAssignment(id));
    }

    // ----- NEW ASSIGNMENT -----
    @PostMapping("")
    public ResponseEntity<Object> createAssignment(@Valid @RequestBody NewAssignment newAssignment,
            BindingResult result) {
        if (result.hasErrors()) {
            // return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new
            // ApiError(result, HttpStatus.BAD_REQUEST));
            return ResponseEntity.status(400).body(result.getAllErrors());
        }

        User loggedInUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Course course = courseService.findCourse(newAssignment.getCourseId());

        Assignment savedAssignment = assignmentService
                .createAssignment(new Assignment(newAssignment.getName(), newAssignment.getDueDate(),
                        newAssignment.getPriority(), course, loggedInUser));
        // assignment.setUser(loggedInUser);

        // Assignment savedAssignment = assignmentService.reateAssignment(assignment);
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
    public ResponseEntity<Object> updateAssignment(@PathVariable("id") Long id,
            @Valid @RequestBody Assignment assignment, BindingResult result) {
        if (result.hasErrors()) {
            return ResponseEntity.status(400).body(result.getAllErrors());
        }
        assignment.setId(id);
        Assignment updatedAssignment = assignmentService.updateAssignment(assignment);
        return ResponseEntity.ok().body(updatedAssignment);
    }

}
