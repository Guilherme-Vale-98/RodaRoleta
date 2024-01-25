package com.gui.services;

import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.gui.models.Keyword;
import com.gui.models.Match;
import com.gui.models.User;
import com.gui.repositories.MatchRepository;

@Service
public class MatchService {
	@Autowired
	MatchRepository matchRepository;
	
	@Autowired
	KeywordService keywordService;
	
	public Match generateMatch(User user) {
		Keyword keyword = keywordService.getRandomKeyword();
		HashSet<Keyword> keywords = new HashSet<>();
		keywords.add(keyword);
		Match match = new Match(keywords, user);
		matchRepository.saveAndFlush(match);
		return match;
	}	
}
