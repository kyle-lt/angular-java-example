package com.bbtutorials.users.links;

import org.springframework.stereotype.Component;

@Component
public class UserLinks {
	
	public static final String LIST_USERS = "/users";
    public static final String ADD_USER = "/user";
    public static final String GET_USER = "/users/{id}";
    public static final String DELETE_USER = "/users/{id}";

}
