package com.fairfellas.controllers;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fairfellas.beans.Purchase;
import com.fairfellas.data.PurchaseDAO;

@RestController
@CrossOrigin
@RequestMapping(value = "/purchase")
public class PurchaseController {

	@Autowired
	private PurchaseDAO purchaseDAO;
	private Logger log;

	@PostMapping
	public int makePurchase(@RequestBody Purchase purchase, HttpSession session) {
		purchaseDAO.addPurchase(purchase);
		log = Logger.getLogger(this.getClass());
		log.trace(purchase);
		log.trace("We made it");

		return 1;

	}

	@RequestMapping(method = RequestMethod.GET)
	public String goPurchase(HttpSession session) {
		return "static/purchase.html";
	}
}
