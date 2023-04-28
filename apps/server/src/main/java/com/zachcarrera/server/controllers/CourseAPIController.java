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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zachcarrera.server.models.Course;
import com.zachcarrera.server.services.CourseService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/courses")
public class CourseAPIController {
    @Autowired
    private CourseService courseService;

    // ----- ALL COURSES -----
    @GetMapping("")
    public ResponseEntity<List<Course>> allCourses() {
        return ResponseEntity.ok().body(courseService.allCourses());
    }


    // ----- ONE COURSE -----
    @GetMapping("/{id}")
    public ResponseEntity<Course> oneCourse(@PathVariable("id") Long id) {
        return ResponseEntity.ok().body(courseService.findCourse(id));
    }

    // ----- NEW COURSE -----
    @PostMapping("")
    public ResponseEntity<Object> createCourse(@Valid @RequestBody Course course, BindingResult result) {
        if (result.hasErrors()) {
            return ResponseEntity.status(400).body(result.getAllErrors());
        }

        Course savedCourse = courseService.createCourse(course);
        return ResponseEntity.ok().body(savedCourse);
        
    }

    // ----- DELETE COURSE -----
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteCourse(@PathVariable("id") Long id) {
        courseService.removeCourse(id);
        return ResponseEntity.ok().build();
    }

    // ----- UPDATE COURSE -----
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateCourse(@PathVariable("id") Long id, @Valid @RequestBody Course course, BindingResult result) {
        if (result.hasErrors()) {
            return ResponseEntity.status(400).body(result.getAllErrors());
        }
        course.setId(id);
        Course updatedCourse = courseService.updateCourse(course);
        return ResponseEntity.ok().body(updatedCourse);
    }

}
