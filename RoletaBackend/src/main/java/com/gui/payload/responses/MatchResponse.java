package com.gui.payload.responses;

import java.util.Set;

import com.gui.models.Keyword;

public class MatchResponse {
	private Long id;
	private Set<Keyword> keywords ;
	private String username;
	private Integer score;

	
	public Long getId() {
		return id;
	}




	public Set<Keyword> getKeywords() {
		return keywords;
	}




	public String getUsername() {
		return username;
	}




	public Integer getScore() {
		return score;
	}




	public MatchResponse(Long id, Set<Keyword> keywords, String username, Integer score) {
		super();
		this.id = id;
		this.keywords = keywords;
		this.username = username;
		this.score = score;
	}



	public MatchResponse() {
		
	}
	
}
