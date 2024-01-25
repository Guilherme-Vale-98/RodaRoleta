package com.gui.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gui.models.ERole;
import com.gui.models.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
