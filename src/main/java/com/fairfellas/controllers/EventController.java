package com.fairfellas.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fairfellas.beans.Event;
import com.fairfellas.data.hibernate.EventHibernate;

@RestController
@CrossOrigin
//@RequestMapping(value="/event")
public class EventController {
	@Autowired
	private EventHibernate eh;
	private Logger log;
	
	
	@GetMapping("/event/{id}")
	public List<Event> getEventsByStatus(@PathVariable String status) {
		log = Logger.getLogger(EventController.class);
		log.trace("Inside Getter for Event By Status");
		List<Event> eventListFilter = null;
		List<Event> eventList = null;
		if(status != null) {
			eventList = eh.getEvents();
			log.trace(status);
			log.trace(status);
			eventListFilter = new ArrayList<Event>();
			for(Event e : eventList) {
				if(e.getEventStatus()!= null && status.equals(e.getEventStatus().getStatus())) {
					eventListFilter.add(e);
				}
			}
			log.trace(eventListFilter);
			return eventListFilter;
		}
		return eventListFilter;
	}
	
//	@RequestParam(defaultValue = "test") String id
	@GetMapping("/event")
	public List<Event> getEvents(HttpSession session , @RequestParam(defaultValue = "0") String status) {
		
		log = Logger.getLogger(EventController.class);
		log.trace("Inside Getter for Event");
		List<Event> eventListFilter = null;
		List<Event> eventList = eh.getEvents();
		if(!status.equals("0")) {
			log.trace(status);
			eventListFilter = new ArrayList<Event>();
			for(Event e : eventList) {
				if(e.getEventStatus()!= null && status.equals(e.getEventStatus().getStatus())) {
					eventListFilter.add(e);
				}
			}
			log.trace(eventListFilter);
			return eventListFilter;
		}
		log.trace(eventList);
		return eventList;
	}
}


	
	
	
