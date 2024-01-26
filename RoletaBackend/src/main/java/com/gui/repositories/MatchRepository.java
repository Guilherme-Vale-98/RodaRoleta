package com.gui.repositories;


import org.springframework.data.jpa.repository.JpaRepository;


import com.gui.models.Match;

public interface MatchRepository extends JpaRepository<Match, Long> {
}
