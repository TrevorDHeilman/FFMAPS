package com.fairfellas.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {
	@RequestMapping(value="/home", method=RequestMethod.GET)
	public String getHomePageGoodJobTrevor() {
		System.out.println("Hello");
		return "static/hello.html";
	}
	@RequestMapping(value="/logout", method=RequestMethod.POST)
	public String logout(HttpSession session) {
		session.invalidate();
		System.out.println("Logging out");
		return "redirect:login";
	}
}
