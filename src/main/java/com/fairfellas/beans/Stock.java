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
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getPlaceableId() {
		return placeableId;
	}
	public void setPlaceableId(Integer placeableId) {
		this.placeableId = placeableId;
	}
	public Integer getStockAvailable() {
		return stockAvailable;
	}
	public void setStockAvailable(Integer stockAvailable) {
		this.stockAvailable = stockAvailable;
	}
	public Item getItem() {
		return item;
	}
	public void setItem(Item item) {
		this.item = item;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((item == null) ? 0 : item.hashCode());
		result = prime * result + ((placeableId == null) ? 0 : placeableId.hashCode());
		result = prime * result + ((stockAvailable == null) ? 0 : stockAvailable.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Stock other = (Stock) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (item == null) {
			if (other.item != null)
				return false;
		} else if (!item.equals(other.item))
			return false;
		if (placeableId == null) {
			if (other.placeableId != null)
				return false;
		} else if (!placeableId.equals(other.placeableId))
			return false;
		if (stockAvailable == null) {
			if (other.stockAvailable != null)
				return false;
		} else if (!stockAvailable.equals(other.stockAvailable))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Stock [id=" + id + ", placeableId=" + placeableId + ", stockAvailable=" + stockAvailable + ", item="
				+ item + "]";
	}
	
}
