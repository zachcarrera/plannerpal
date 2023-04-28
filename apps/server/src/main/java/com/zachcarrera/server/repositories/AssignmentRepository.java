package com.zachcarrera.server.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.zachcarrera.server.models.Assignment;

@Repository
public interface AssignmentRepository extends CrudRepository<Assignment, Long> {

    List<Assignment> findAll();

    Optional<Assignment> findByName(String name);
}
