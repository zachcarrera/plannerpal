package com.zachcarrera.server.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zachcarrera.server.models.Course;
import com.zachcarrera.server.repositories.CourseRepository;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

    // ----- FIND ALL -----
    public List<Course> allCourses() {
        return courseRepository.findAll();
    }

    // ----- FIND ONE -----
    public Course findCourse(Long id) {
        Optional<Course> optionalCourse = courseRepository.findById(id);
        if (optionalCourse.isPresent()) {
            return optionalCourse.get();
        }
        return null;
    }

    // ----- CREATE -----
    public Course createCourse(Course newCourse) {
        return courseRepository.save(newCourse);
    }

    // ----- UPDATE -----
    public Course updateCourse(Course oneCourse) {
        return courseRepository.save(oneCourse);
    }

    // ----- DELETE -----
    public void removeCourse(Long id) {
        courseRepository.deleteById(id);
    }
}
