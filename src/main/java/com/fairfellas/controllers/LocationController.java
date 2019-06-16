package com.fairfellas.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fairfellas.beans.Location;
import com.fairfellas.data.hibernate.LocationHibernate;

@RestController
@CrossOrigin
@RequestMapping(value="/controller")
public class LocationController {
	
	@Autowired
	private LocationHibernate lh;
	private Logger log;
	
	@GetMapping
	public List<Location> getLayout(HttpSession session) {	
		log = Logger.getLogger(PlaceableController.class);
		log.trace("Inside Getter for Location");
		if(session.getAttribute("user")!=null) {
			List<Location> locationList = lh.getLocations();
			log.trace(locationList);
			return locationList;
		}
		return null;
	}
}
