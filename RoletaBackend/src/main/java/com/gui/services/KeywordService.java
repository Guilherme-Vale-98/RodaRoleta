package com.gui.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gui.models.Keyword;
import com.gui.repositories.KeywordRepository;

@Service
public class KeywordService {
	@Autowired
	KeywordRepository keywordRepository;
	
	public Keyword getRandomKeyword() {
		return keywordRepository.findById(getRandomLong()).orElseThrow();
	}
	private long getRandomLong() {
		int min = 1;
		int max = 4;
		long randomLong = (long)(Math.random() * (max - min + 1)) + min;		
		return randomLong;
	}
	
}
