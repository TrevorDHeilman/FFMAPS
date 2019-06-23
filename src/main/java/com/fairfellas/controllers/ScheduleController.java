package com.fairfellas.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fairfellas.beans.Schedule;
import com.fairfellas.data.ScheduleDAO;

@RestController
@CrossOrigin
@RequestMapping(value="/schedule")
public class ScheduleController {
	@Autowired
	private ScheduleDAO sd;
	
	@GetMapping
	public List<Schedule> getSchedule(HttpSession session) {
		if(session.getAttribute("user")!=null) {
			return sd.getSchedule();
		}
		return null;
	}
	
	@PostMapping
	public Schedule addSchedule(@RequestBody Schedule s, HttpSession session) {
		System.out.println("addSchedule Controller");
		System.out.println(s);
		if(session.getAttribute("user")!=null) {	
			int id = sd.addSchedule(s);
			return sd.getScheduleById(id);
		}
		return null;
	}
	
	@PutMapping
	public void updateSchedule(@RequestBody Schedule s, HttpSession session) {
		if(session.getAttribute("user")!=null) {
			sd.updateSchedule(s);
		}
	}
}
