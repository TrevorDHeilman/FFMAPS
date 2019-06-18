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
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="Event")
public class Event {
	@Id
	@Column(name="EventId")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="Event")
	@SequenceGenerator(name="Event", sequenceName="event_seq", allocationSize=1)
	private int id;
	
	@Column(name="StartDate")
	private String startDate;
	
	@Column(name="EndDate")
	private String endDate;
	
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="LocationId")
	private Location location;
	
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="ContactId")
	private Contact contact;
	
	@OneToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="StatusId")
	private EventStatus eventStatus;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	public Contact getContact() {
		return contact;
	}

	public void setContact(Contact contact) {
		this.contact = contact;
	}

	public EventStatus getEventStatus() {
		return eventStatus;
	}

	public void setEventStatus(EventStatus eventStatus) {
		this.eventStatus = eventStatus;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((contact == null) ? 0 : contact.hashCode());
		result = prime * result + ((endDate == null) ? 0 : endDate.hashCode());
		result = prime * result + ((eventStatus == null) ? 0 : eventStatus.hashCode());
		result = prime * result + id;
		result = prime * result + ((location == null) ? 0 : location.hashCode());
		result = prime * result + ((startDate == null) ? 0 : startDate.hashCode());
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
		Event other = (Event) obj;
		if (contact == null) {
			if (other.contact != null)
				return false;
		} else if (!contact.equals(other.contact))
			return false;
		if (endDate == null) {
			if (other.endDate != null)
				return false;
		} else if (!endDate.equals(other.endDate))
			return false;
		if (eventStatus == null) {
			if (other.eventStatus != null)
				return false;
		} else if (!eventStatus.equals(other.eventStatus))
			return false;
		if (id != other.id)
			return false;
		if (location == null) {
			if (other.location != null)
				return false;
		} else if (!location.equals(other.location))
			return false;
		if (startDate == null) {
			if (other.startDate != null)
				return false;
		} else if (!startDate.equals(other.startDate))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Event [id=" + id + ", startDate=" + startDate + ", endDate=" + endDate + ", location=" + location
				+ ", contact=" + contact + ", eventStatus=" + eventStatus + "]";
	}
}