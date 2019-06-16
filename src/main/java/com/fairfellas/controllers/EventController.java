package com.fairfellas.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fairfellas.beans.Event;
import com.fairfellas.data.hibernate.EventHibernate;

@RestController
@CrossOrigin
@RequestMapping(value="/event")
public class EventController {
	@Autowired
	private EventHibernate eh;
	private Logger log;
	
	@GetMapping
	public List<Event> getLayout(HttpSession session) {	
		log = Logger.getLogger(PlaceableController.class);
		log.trace("Inside Getter for Location");
		if(session.getAttribute("user")!=null) {
			List<Event> eventList = eh.getEvents();
			log.trace(eventList);
			return eventList;
		}
		return null;
	}
	
}


	
	
	
