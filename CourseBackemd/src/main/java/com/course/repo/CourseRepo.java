package com.course.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.course.entities.CourseEntity;

public interface CourseRepo extends JpaRepository<CourseEntity, Long> {

}
