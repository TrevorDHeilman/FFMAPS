package com.fairfellas.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fairfellas.beans.Contact;
import com.fairfellas.data.hibernate.ContactHibernate;

@RestController
@CrossOrigin
@RequestMapping(value="/contact")
public class ContactController {
	@Autowired
	private ContactHibernate ch;
	private Logger log;
	
	@GetMapping
	public List<Contact> getLayout(HttpSession session) {	
		log = Logger.getLogger(PlaceableController.class);
		log.trace("Inside Getter for Location");
		if(session.getAttribute("user")!=null) {
			List<Contact> contactList = ch.getContacts();
			log.trace(contactList);
			return contactList;
		}
		return null;
	}
}
