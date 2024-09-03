package com.course.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.course.entities.CourseInstanceEntity;
import com.course.repo.CourseInstancesRepo;

@Service
public class CourseInstanceService {
    @Autowired
    private CourseInstancesRepo courseInstanceRepository;

    public CourseInstanceEntity createCourseInstance(CourseInstanceEntity courseInstance) {
        return courseInstanceRepository.save(courseInstance);
    }

    public List<CourseInstanceEntity> getCourseInstances(int year, int semester) {
        return courseInstanceRepository.findByYearAndSemester(year, semester);
    }

    public Optional<CourseInstanceEntity> getCourseInstance(int year, int semester, Long courseId) {
        return courseInstanceRepository.findByYearAndSemesterAndCourseId(year, semester, courseId);
    }

    public void deleteCourseInstance(int year, int semester, Long courseId) {
        Optional<CourseInstanceEntity> courseInstance = courseInstanceRepository.findByYearAndSemesterAndCourseId(year,
                semester, courseId);
        courseInstance.ifPresent(courseInstanceRepository::delete);
    }

    public List<CourseInstanceEntity> getAllInstances() {
        return courseInstanceRepository.findAll();
    }
}