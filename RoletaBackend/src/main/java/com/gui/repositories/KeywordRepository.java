package com.gui.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.gui.models.Keyword;


public interface KeywordRepository extends JpaRepository<Keyword, Long > {
	Optional<Keyword> findByAnswer(String answer);
	
	@Query(value = "SELECT id,answer,hint FROM keyword ORDER BY RAND() LIMIT 1", 
			  nativeQuery = true)
	Keyword getRandomKeyword();
}
