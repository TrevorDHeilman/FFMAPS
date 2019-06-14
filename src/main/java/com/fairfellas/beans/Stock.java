package com.fairfellas.beans;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table
public class Stock {
	@Id
	@Column(name = "vendorstockid")
	private Integer id;
	private Integer placeableId;
	private Integer stockAvailable;
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name = "itemid")
	private Item item;
	public Stock() {
		super();
	}
}
