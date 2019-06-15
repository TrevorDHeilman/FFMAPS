package com.fairfellas.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fairfellas.beans.Placeable;
import com.fairfellas.data.hibernate.PlaceableHibernate;

@RestController
@CrossOrigin
@RequestMapping(value="/layout")
public class PlaceableController {
	@Autowired
	private PlaceableHibernate ph;
	private Logger log;
	
	@GetMapping
	public List<Placeable> getLayout(HttpSession session) {
		
		log = Logger.getLogger(PlaceableController.class);
		log.trace("Inside Getter for Placeables");
		if(session.getAttribute("user")!=null) {
			List<Placeable> placeableSet = ph.getPlaceables();
			log.trace(placeableSet);
			return placeableSet;
		}
		return null;
	}
}
