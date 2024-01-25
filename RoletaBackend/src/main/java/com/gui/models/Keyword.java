package com.gui.models;

import java.util.HashSet;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "keyword", uniqueConstraints = 
{ @UniqueConstraint(columnNames = "word"), @UniqueConstraint(columnNames = "user")})
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
	
	@ManyToMany
	@JoinTable(
	  name = "match_keyword", 
	  joinColumns = @JoinColumn(name = "keyword_id"), 
	  inverseJoinColumns = @JoinColumn(name = "match_id"))
	private HashSet<Match> match;
	
}
