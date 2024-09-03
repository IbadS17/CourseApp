package com.course.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.course.entities.CourseInstanceEntity;
import com.course.services.CourseInstanceService;

@RestController
@RequestMapping("/api/instances")
@CrossOrigin(origins = "http://localhost:5173")
public class CourseInstanceController {
    @Autowired
    private CourseInstanceService courseInstanceService;

    @PostMapping
    public CourseInstanceEntity createCourseInstance(@RequestBody CourseInstanceEntity courseInstance) {
        return courseInstanceService.createCourseInstance(courseInstance);
    }

    // Handles GET requests for all instances
    @GetMapping
    public List<CourseInstanceEntity> getAllInstances() {
        return courseInstanceService.getAllInstances();
    }

    @GetMapping("/{year}/{semester}")
    public List<CourseInstanceEntity> getCourseInstances(@PathVariable int year, @PathVariable int semester) {
        return courseInstanceService.getCourseInstances(year, semester);
    }

    @GetMapping("/{year}/{semester}/{courseId}")
    public ResponseEntity<CourseInstanceEntity> getCourseInstance(@PathVariable int year, @PathVariable int semester,
            @PathVariable Long courseId) {
        return courseInstanceService.getCourseInstance(year, semester, courseId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{year}/{semester}/{courseId}")
    public ResponseEntity<Void> deleteCourseInstance(@PathVariable int year, @PathVariable int semester,
            @PathVariable Long courseId) {
        courseInstanceService.deleteCourseInstance(year, semester, courseId);
        return ResponseEntity.noContent().build();
    }
}