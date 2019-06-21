package com.fairfellas.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fairfellas.beans.Placeable;
import com.fairfellas.beans.PlaceableType;
import com.fairfellas.data.hibernate.PlaceableHibernate;

@RestController
@CrossOrigin
@RequestMapping(value="/layout")
public class PlaceableTypeController {

	@Autowired
	private PlaceableTypeHibernate pth;
	private Logger log;
	
	@GetMapping
	public List<PlaceableType> getLayout(HttpSession session) {
		
		log = Logger.getLogger(PlaceableController.class);
		log.trace("Inside Getter for Placeable Types");
		if(session.getAttribute("user")!=null) {
			List<PlaceableType> placeableTypeSet = pth.getPlaceableTypes();
			log.trace(placeableTypeSet);
			return placeableTypeSet;
		}
		return null;
	}
}
