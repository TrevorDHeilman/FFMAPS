package com.fairfellas.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.fairfellas.beans.Receipt;
import com.fairfellas.data.ReceiptDAO;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@CrossOrigin
@RequestMapping(value = "/receipt")
public class ReceiptController {
	
	@Autowired
	private ReceiptDAO receiptDAO;
	private Logger log;
	
//	@GetMapping("{email}")
//	@RequestMapping(method = RequestMethod.GET)
	@PostMapping
	public Receipt getReceipt(@RequestBody Receipt receipt, HttpSession session) {
		log = Logger.getLogger(this.getClass());
		log.trace(receipt);
		receipt = receiptDAO.getReceipt(receipt.email);
		log.trace(receipt);
		return receipt;
	}
	
}
