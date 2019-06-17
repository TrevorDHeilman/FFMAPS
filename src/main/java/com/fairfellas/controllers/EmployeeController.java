package com.fairfellas.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fairfellas.beans.User;
import com.fairfellas.data.UserDAO;

@RestController
@CrossOrigin
@RequestMapping(value="/employee")
public class EmployeeController {
	@Autowired
	private UserDAO ud;
	
	@GetMapping
	public List<User> getAttendants(HttpSession session) {
		if(session.getAttribute("user")!=null) {
			return ud.getAttendants();
		}
		return null;
	}
}
