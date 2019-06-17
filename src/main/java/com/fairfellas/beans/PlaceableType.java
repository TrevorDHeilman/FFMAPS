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
	@SequenceGenerator(name="PlaceableType", sequenceName="placeabletype_seq", allocationSize=1)
	private int typeId;
	@Column(name="PlaceableType")
	private String typeName;
	
	public int getTypeId() {
		return typeId;
	}

	public void setTypeId(int typeId) {
		this.typeId = typeId;
	}

	public String getTypeName() {
		return typeName;
	}

	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + typeId;
		result = prime * result + ((typeName == null) ? 0 : typeName.hashCode());
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
		if (typeId != other.typeId)
			return false;
		if (typeName == null) {
			if (other.typeName != null)
				return false;
		} else if (!typeName.equals(other.typeName))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "PlaceableType [typeId=" + typeId + ", typeName=" + typeName + "]";
	}

}
