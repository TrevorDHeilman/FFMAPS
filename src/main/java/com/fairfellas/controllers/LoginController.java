package com.fairfellas.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fairfellas.beans.User;
import com.fairfellas.data.hibernate.UserHibernate;


@Controller
@RequestMapping(value="/login")
public class LoginController {
	@Autowired
	private UserHibernate uh;
	
	@RequestMapping(method=RequestMethod.GET)
	public String goLogin(HttpSession session) {
		if(session.getAttribute("username")!=null) {
			return "redirect:home";
		}
		return "static/login.html";
	}
	
//	@PostMapping
//	public String login(String username, String password, HttpSession session) {
//		User u = uh.getUser(username, password);
//		if(u!=null) {
//			session.setAttribute("user", u);
//			return "redirect:home";
//		}
//		return "redirect:home";
//	}

}
