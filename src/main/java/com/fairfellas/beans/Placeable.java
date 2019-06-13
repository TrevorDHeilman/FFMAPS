package com.fairfellas.beans;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


@Entity
@Table(name="Placeable")
public class Placeable {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="Placeable")
	@SequenceGenerator(name="Placeable", sequenceName="placeable_seq", allocationSize=1)
	private int placeableId;
	private int placeableTypeId;
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="placeabletype")
	private int placeableType;
	
	public int getPlaceableId() {
		return placeableId;
	}
	public void setPlaceableId(int placeableId) {
		this.placeableId = placeableId;
	}
	public int getPlaceableTypeId() {
		return placeableTypeId;
	}
	public void setPlaceableTypeId(int placeableTypeId) {
		this.placeableTypeId = placeableTypeId;
	}
	public int getPlaceableType() {
		return placeableType;
	}
	public void setPlaceableType(int placeableType) {
		this.placeableType = placeableType;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + placeableId;
		result = prime * result + placeableType;
		result = prime * result + placeableTypeId;
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
		Placeable other = (Placeable) obj;
		if (placeableId != other.placeableId)
			return false;
		if (placeableType != other.placeableType)
			return false;
		if (placeableTypeId != other.placeableTypeId)
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Placeable [placeableId=" + placeableId + ", placeableTypeId=" + placeableTypeId + ", placeableType="
				+ placeableType + "]";
	}
}
