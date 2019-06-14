package com.fairfellas.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fairfellas.beans.Stock;
import com.fairfellas.data.StockDAO;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/stock")
public class StockController {
	private StockDAO sd;
	
	@GetMapping
	public Stock getStock(@PathVariable Integer id) {
		return sd.getStock(id);
	}
	
	@PostMapping
	public void addStock(Stock s) {
		sd.addStock(s);
	}
}
