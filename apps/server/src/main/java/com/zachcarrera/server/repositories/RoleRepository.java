package com.zachcarrera.server.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.zachcarrera.server.models.Role;

@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {

    List<Role> findAll();

}
