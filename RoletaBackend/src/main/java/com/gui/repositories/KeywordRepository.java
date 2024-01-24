package com.gui.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


import com.gui.models.Keyword;


public interface KeywordRepository extends JpaRepository<Keyword, Long > {
	Optional<Keyword> findByAnswer(String answer);
}
