package com.fairfellas.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fairfellas.beans.User;
import com.fairfellas.data.UserDAO;


@Controller
@RequestMapping(value="/login")
public class LoginController {
	@Autowired
	private UserDAO ud;
	
	@RequestMapping(method=RequestMethod.GET)
	public String goLogin(HttpSession session) {
		if(session.getAttribute("user")!=null) {
			return "redirect:home";
		}
		return "static/login.html";
	}
	@PostMapping
	public String login(String username, String password, HttpSession session) {
		User u = ud.getUser(username, password);
		if(u!=null) {
			session.setAttribute("user", u);
			System.out.println(u);
			return "redirect:home";
		}
		return "redirect:login";
	}
}
