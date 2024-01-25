package com.gui.models;

import java.util.HashSet;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;

import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "matches")
public class Match {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToMany(mappedBy = "match")
	private HashSet<Keyword> keywords ;
	
	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
	private User user;
	
	@NotBlank
	private Integer score;

	public HashSet<Keyword> getKeywords() {
		return keywords;
	}

	public void setKeywords(HashSet<Keyword> keywords) {
		this.keywords = keywords;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Integer getScore() {
		return score;
	}

	public void setScore(Integer score) {
		this.score = score;
	}
	
	public Match() {
		
	}

	public Match(HashSet<Keyword> keywords, User user, @NotBlank Integer score) {
		super();
		this.keywords = keywords;
		this.user = user;
		this.score = score;
	}
	
	
	
}
