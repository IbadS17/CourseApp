package com.course.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.course.entities.CourseInstanceEntity;

public interface CourseInstancesRepo extends JpaRepository<CourseInstanceEntity, Long> {
    List<CourseInstanceEntity> findByYearAndSemester(int year, int semester);

    Optional<CourseInstanceEntity> findByYearAndSemesterAndCourseId(int year, int semester, Long courseId);
}
