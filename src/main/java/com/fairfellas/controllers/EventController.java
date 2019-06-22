package com.fairfellas.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fairfellas.beans.Contact;
import com.fairfellas.beans.Event;
import com.fairfellas.beans.Location;
import com.fairfellas.data.ContactDAO;
import com.fairfellas.data.LocationDAO;
import com.fairfellas.data.hibernate.EventHibernate;

@RestController
@CrossOrigin
@RequestMapping(value="/event")
public class EventController {
	@Autowired
	private EventHibernate eh;
	private ContactDAO cd;
	private LocationDAO ld;
	private Logger log;
	
//	@RequestParam(defaultValue = "test") String id
	@GetMapping
	public List<Event> getEvents(HttpSession session , @RequestParam(defaultValue = "0") String status) {
		
		log = Logger.getLogger(EventController.class);
		log.trace("Inside Getter for Event");
		List<Event> eventListFilter = null;
		List<Event> eventList = eh.getEvents();
		if(!status.equals("0")) {
			log.trace("Searching by Event Status: " +status);
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
	
	@PostMapping
	public void addEvent(@RequestBody Event e) {
		System.out.println(e);
		System.out.println(e.getContact());
		int contactId = cd.addContact(e.getContact());
		Contact c = cd.getContactById(contactId);
		e.setContact(c);
		int locationId = ld.addLocation(e.getLocation());
		Location l = ld.getLocationById(locationId);
		e.setLocation(l);
		eh.addEvent(e);
	}
}