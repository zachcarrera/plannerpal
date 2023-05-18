package com.zachcarrera.server.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.zachcarrera.server.models.Assignment;
import com.zachcarrera.server.models.User;

@Repository
public interface AssignmentRepository extends CrudRepository<Assignment, Long> {

    List<Assignment> findAll();

    List<Assignment> findByUser(User user);

    List<Assignment> findTop3ByOrderByCreatedAtDesc();

    Optional<Assignment> findByName(String name);
}
