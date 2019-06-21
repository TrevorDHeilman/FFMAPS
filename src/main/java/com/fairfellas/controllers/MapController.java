package com.fairfellas.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fairfellas.beans.Map;
import com.fairfellas.data.hibernate.MapHibernate;

@RestController
@CrossOrigin
//@RequestMapping(value="/map")
public class MapController {
	@Autowired
	private MapHibernate mh;
	private Logger log;
	
//	
//	@RequestMapping(value="/method7/{id}")
//	@ResponseBody
//	public String method7(@PathVariable("id") int id){
//		return "method7 with id="+id;
//	}
	@RequestMapping(value="/map/{id}", method=RequestMethod.GET)
	public List<Map> getLayout(@PathVariable int id, HttpSession session) {
		
		log = Logger.getLogger(MapController.class);
		log.trace("Inside Getter for Maps with path variable: " + id);
//		if(session.getAttribute("user")!=null) {
			List<Map> mapList = mh.getMapsByMapId(id);
			log.trace(mapList);
			return mapList;
//		}
//		return null;
	}
	
	@RequestMapping(value="/map", method=RequestMethod.POST)
	public void addMap(@RequestBody Map map, HttpSession session) {
		
		log = Logger.getLogger(PlaceableController.class);
		if(session.getAttribute("user")!=null) {
			mh.addMap(map);
		}
	}
}
