package com.fairfellas.beans;

import javax.persistence.CascadeType;
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
	
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="PlaceableTypeId")
	private PlaceableType placeableType;

	public int getPlaceableId() {
		return placeableId;
	}

	public void setPlaceableId(int placeableId) {
		this.placeableId = placeableId;
	}

	public PlaceableType getPlaceableType() {
		return placeableType;
	}

	public void setPlaceableType(PlaceableType placeableType) {
		this.placeableType = placeableType;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + placeableId;
		result = prime * result + ((placeableType == null) ? 0 : placeableType.hashCode());
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
		if (placeableType == null) {
			if (other.placeableType != null)
				return false;
		} else if (!placeableType.equals(other.placeableType))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Placeable [placeableId=" + placeableId + ", placeableType=" + placeableType + "]";
	}
}
