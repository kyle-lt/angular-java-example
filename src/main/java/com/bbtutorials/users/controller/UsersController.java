package com.bbtutorials.users.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.json.*;

import com.bbtutorials.users.entity.Users;
import com.bbtutorials.users.links.UserLinks;
import com.bbtutorials.users.service.UsersService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/")
public class UsersController {

	@Autowired
	UsersService usersService;

	@GetMapping(path = UserLinks.LIST_USERS)
	public ResponseEntity<?> listUsers() {
		log.info("UsersController:  list users");
		List<Users> resource = usersService.getUsers();
		return ResponseEntity.ok(resource);
	}

	@GetMapping(path = UserLinks.GET_USER)
	public ResponseEntity<?> getUser(@PathVariable("id") String id) {
		log.info("UsersController:  get user " + id);
		Optional<Users> resource = usersService.findUser(Long.parseLong(id));
		return ResponseEntity.ok(resource);
	}

	@PostMapping(path = UserLinks.ADD_USER)
	public ResponseEntity<?> saveUser(@RequestBody Users user) {
		log.info("UsersController:  list users");
		Users resource = usersService.saveUser(user);
		return ResponseEntity.ok(resource);
	}

	@DeleteMapping(path = UserLinks.DELETE_USER)
	public String deleteUser(@PathVariable("id") String id) {
		log.info("UsersController:  delete user " + id);
		usersService.deleteUser(Long.parseLong(id));
		String jsonString = new JSONObject()
                .put("message", "User Id " + id + " successfully deleted!").toString();
		return jsonString;
	}
}
