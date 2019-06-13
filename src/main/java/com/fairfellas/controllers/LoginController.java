package com.fairfellas.controllers;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fairfellas.beans.User;
import com.fairfellas.data.UserDAO;


@RestController
@CrossOrigin
@RequestMapping(value="/login")
public class LoginController {
	@Autowired
	private UserDAO ud;
	private Logger log;
	
	
	@RequestMapping(method=RequestMethod.GET)
	public String goLogin(HttpSession session) {
		if(session.getAttribute("user")!=null) {
			return "redirect:home";
		}
		return "static/login.html";
	}
	
	@PostMapping
	public User login(@RequestBody User user, HttpSession session) {
		User u = ud.getUser(user.getUsername(), user.getPassword());
		log = Logger.getLogger(LoginController.class);
		log.trace(user);
		if(u!=null) {
			session.setAttribute("user", u);
			log.trace(u);
			return u;
		}
		
		return null;
	}
	
	@DeleteMapping
	public void logout(HttpSession session) {
		log = Logger.getLogger(LoginController.class);
		log.trace("Invalidating Session");
		session.invalidate();
	}
}
