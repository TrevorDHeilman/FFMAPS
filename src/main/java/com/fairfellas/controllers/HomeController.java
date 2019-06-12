package com.fairfellas.controllers;

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
}
