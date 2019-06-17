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

import com.fairfellas.beans.Stock;
import com.fairfellas.data.StockDAO;

@RestController
@CrossOrigin
@RequestMapping(value="/stock")
public class StockController {
	@Autowired
	private StockDAO sd;
	
	@GetMapping
	public List<Stock> getStock(HttpSession session) {
		if(session.getAttribute("user")!=null) {
			return sd.getStock();
		}
		return null;
	}
	
	@PostMapping
	public void addStock(Stock s) {
		sd.addStock(s);
	}
	
	@PutMapping
	public void updateStock(@RequestBody Stock s, HttpSession session) {
		if(session.getAttribute("user")!=null) {
			sd.updateStock(s);
		}
		
	}
}
