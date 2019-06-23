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
@Table(name="Maps")
public class Map {
	@Id
	@Column(name="MapEntryId")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="Map")
	@SequenceGenerator(name="Map", sequenceName="map_seq ", allocationSize=1)
	private int id;
	
	@Column(name="MapId")
	private int mapId;
	
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="PlaceableId")
	private Placeable placeable;
	
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="EventId")
	private Event event;
	
	@Column(name="Transform")
	private String transform;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getMapId() {
		return mapId;
	}

	public void setMapId(int mapId) {
		this.mapId = mapId;
	}

	public Placeable getPlaceable() {
		return placeable;
	}

	public void setPlaceable(Placeable placeable) {
		this.placeable = placeable;
	}

	public Event getEvent() {
		return event;
	}

	public void setEvent(Event event) {
		this.event = event;
	}

	public String getTransform() {
		return transform;
	}

	public void setTransform(String transform) {
		this.transform = transform;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((event == null) ? 0 : event.hashCode());
		result = prime * result + id;
		result = prime * result + mapId;
		result = prime * result + ((placeable == null) ? 0 : placeable.hashCode());
		result = prime * result + ((transform == null) ? 0 : transform.hashCode());
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
		Map other = (Map) obj;
		if (event == null) {
			if (other.event != null)
				return false;
		} else if (!event.equals(other.event))
			return false;
		if (id != other.id)
			return false;
		if (mapId != other.mapId)
			return false;
		if (placeable == null) {
			if (other.placeable != null)
				return false;
		} else if (!placeable.equals(other.placeable))
			return false;
		if (transform == null) {
			if (other.transform != null)
				return false;
		} else if (!transform.equals(other.transform))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Map [id=" + id + ", mapId=" + mapId + ", placeable=" + placeable + ", event=" + event + ", transform="
				+ transform + "]";
	}
}