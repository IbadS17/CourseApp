package com.course.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.course.entities.CourseEntity;
import com.course.repo.CourseRepo;

@Service
public class CourseService {
    @Autowired
    private CourseRepo courseRepository;

    public CourseEntity createCourse(CourseEntity course) {
        return courseRepository.save(course);
    }

    public List<CourseEntity> getAllCourses() {
        return courseRepository.findAll();
    }

    public Optional<CourseEntity> getCourseById(Long id) {
        return courseRepository.findById(id);
    }

    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }
}