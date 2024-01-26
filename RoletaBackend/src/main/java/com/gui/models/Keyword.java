package com.gui.models;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "keyword", uniqueConstraints = 
{ @UniqueConstraint(columnNames = "answer")})
public class Keyword {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@Size(max = 20)
	private String answer;
	
	@NotBlank
	@Size(max = 100)
	private String hint;
	
	@ManyToMany(mappedBy = "keywords")
	@JsonIgnore
	private Set<Match> match;

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public String getHint() {
		return hint;
	}

	public void setHint(String hint) {
		this.hint = hint;
	}

	public Set<Match> getMatch() {
		return match;
	}

	public void setMatch(Set<Match> match) {
		this.match = match;
	}
	
	
	
}
