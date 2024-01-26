package com.gui.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gui.models.Match;
import com.gui.models.User;
import com.gui.payload.requests.LoginRequest;
import com.gui.payload.responses.MatchResponse;
import com.gui.repositories.MatchRepository;
import com.gui.repositories.UserRepository;
import com.gui.services.MatchService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/user")
public class UserController {
  
  @Autowired
  UserRepository userRepository;
	
  @Autowired
  MatchService matchService;
  
  @Autowired
  MatchRepository matchRepository;
	
  @GetMapping("/all")
  @PreAuthorize("hasRole('USER')")
  public String allAccess() {
    return "Public Content.";
  }
  
  @PostMapping("/match")
  @PreAuthorize("hasRole('USER')")
  public ResponseEntity<MatchResponse> startMatch(@Valid @RequestBody LoginRequest loginRequest) {
    User user = userRepository.findByUsername(loginRequest.getUsername()).orElseThrow();
    Match match = matchService.generateMatch(user);
    
    return ResponseEntity.ok(new MatchResponse(match.getId(),match.getKeywords(), match.getUser().getUsername(), match.getScore()));
  }
}