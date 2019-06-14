package com.fairfellas.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="PlaceableType")
public class PlaceableType {
	@Id
	@Column(name="PlaceableTypeId")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="PlaceableType")
	@SequenceGenerator(name="PlaceableType", sequenceName="placeable_seq", allocationSize=1)
	private int placeableTypeId;
	@Column(name="PlaceableType")
	private String PlaceableType;
	
	public int getPlaceableTypeId() {
		return placeableTypeId;
	}

	public void setPlaceableTypeId(int placeableTypeId) {
		this.placeableTypeId = placeableTypeId;
	}

	public String getPlaceableType() {
		return PlaceableType;
	}

	public void setPlaceableType(String placeableType) {
		PlaceableType = placeableType;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((PlaceableType == null) ? 0 : PlaceableType.hashCode());
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
		PlaceableType other = (PlaceableType) obj;
		if (PlaceableType == null) {
			if (other.PlaceableType != null)
				return false;
		} else if (!PlaceableType.equals(other.PlaceableType))
			return false;
		if (placeableTypeId != other.placeableTypeId)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "PlaceableType [placeableTypeId=" + placeableTypeId + ", PlaceableType=" + PlaceableType + "]";
	}
}
