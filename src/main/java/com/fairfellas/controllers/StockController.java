package com.fairfellas.controllers;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
	public Set<Stock> getStock() {
		return sd.getStock();
	}
	
	@PostMapping
	public void addStock(Stock s) {
		sd.addStock(s);
	}
}
