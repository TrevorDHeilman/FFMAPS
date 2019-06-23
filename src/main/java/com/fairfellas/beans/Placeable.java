package com.fairfellas.beans;

import javax.persistence.CascadeType;
import javax.persistence.Column;
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
	@Column(name="placeableId")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="Placeable")
	@SequenceGenerator(name="Placeable", sequenceName="placeable_seq", allocationSize=1)
	private int id;
	
	@Column(name="EmployeeCapacity")
	private int employeeCapacity;
	
	@Column(name="PlaceableName")
	private String name;
	
	@Column(name="PlaceableSize")
	private int size;
	
	@Column(name="OwnerId")
	private int ownerId;
	
//	@Column(name="PlaceableTypeId")
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="PlaceableTypeId")
	private PlaceableType placeableType;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getEmployeeCapacity() {
		return employeeCapacity;
	}

	public void setEmployeeCapacity(int employeeCapacity) {
		this.employeeCapacity = employeeCapacity;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getSize() {
		return size;
	}

	public void setSize(int size) {
		this.size = size;
	}

	public int getOwnerId() {
		return ownerId;
	}

	public void setOwnerId(int ownerId) {
		this.ownerId = ownerId;
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
		result = prime * result + employeeCapacity;
		result = prime * result + id;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ownerId;
		result = prime * result + ((placeableType == null) ? 0 : placeableType.hashCode());
		result = prime * result + size;
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
		if (employeeCapacity != other.employeeCapacity)
			return false;
		if (id != other.id)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (ownerId != other.ownerId)
			return false;
		if (placeableType == null) {
			if (other.placeableType != null)
				return false;
		} else if (!placeableType.equals(other.placeableType))
			return false;
		if (size != other.size)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Placeable [id=" + id + ", employeeCapacity=" + employeeCapacity + ", name=" + name + ", size=" + size
				+ ", ownerId=" + ownerId + ", placeableType=" + placeableType + "]";
	}
}
