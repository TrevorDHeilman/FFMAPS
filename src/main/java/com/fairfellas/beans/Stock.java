package com.fairfellas.beans;

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
	private Integer itemId;
	private Integer placeableId;
	private Integer stockAvailable;
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name = "itemName")
	private String itemName;
	public Stock() {
		super();
	}
	public Stock(Integer id, Integer itemId, Integer placeableId, Integer stockAvailable, String itemName) {
		super();
		this.id = id;
		this.itemId = itemId;
		this.placeableId = placeableId;
		this.stockAvailable = stockAvailable;
		this.itemName = itemName;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getItemId() {
		return itemId;
	}
	public void setItemId(Integer itemId) {
		this.itemId = itemId;
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
	public String getItemName() {
		return itemName;
	}
	public void setItemName(String itemName) {
		this.itemName = itemName;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((itemId == null) ? 0 : itemId.hashCode());
		result = prime * result + ((itemName == null) ? 0 : itemName.hashCode());
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
		if (itemId == null) {
			if (other.itemId != null)
				return false;
		} else if (!itemId.equals(other.itemId))
			return false;
		if (itemName == null) {
			if (other.itemName != null)
				return false;
		} else if (!itemName.equals(other.itemName))
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
		return "Stock [id=" + id + ", itemId=" + itemId + ", placeableId=" + placeableId + ", stockAvailable="
				+ stockAvailable + ", itemName=" + itemName + "]";
	}
	
}
