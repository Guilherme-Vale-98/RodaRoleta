package com.gui.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gui.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
	 Optional<User> findByUsername(String username);

	  Boolean existsByUsername(String username);

	  Boolean existsByEmail(String email);
	
}
