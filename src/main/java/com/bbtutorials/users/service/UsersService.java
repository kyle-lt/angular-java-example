package com.bbtutorials.users.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Component;

import com.bbtutorials.users.entity.Users;
import com.bbtutorials.users.repository.UsersRepository;

@Component
public class UsersService {
	
	private UsersRepository usersRepository;

    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public List<Users> getUsers() {
        return usersRepository.findAll();
    }
    
    public Users saveUser(Users users) {
    	return usersRepository.save(users);
    }
    
    public Optional <Users> findUser(Long id) {
    	return usersRepository.findById(id);
    }
    
    public void deleteUser(long id) {
    	usersRepository.deleteById(id);
    }

}
