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
@Table(name="schedule")
public class Schedule {
	@Id
	@Column(name="scheduleitemid")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="schedule")
	@SequenceGenerator(name="schedule", sequenceName="schedule_seq", allocationSize=1)
	private Integer id;
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="eventid")
	private Event event;
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="userid")
	private User user;
	private String scheduleDay;
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="placeableid")
	private Placeable placeable;
	public Schedule() {
		super();
	}
	public Schedule(Integer id, Event event, User user, String scheduleDay, Placeable placeable) {
		super();
		this.id = id;
		this.event = event;
		this.user = user;
		this.scheduleDay = scheduleDay;
		this.placeable = placeable;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Event getEvent() {
		return event;
	}
	public void setEvent(Event event) {
		this.event = event;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getScheduleDay() {
		return scheduleDay;
	}
	public void setScheduleDay(String scheduleDay) {
		this.scheduleDay = scheduleDay;
	}
	public Placeable getPlaceable() {
		return placeable;
	}
	public void setPlaceable(Placeable placeable) {
		this.placeable = placeable;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((event == null) ? 0 : event.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((placeable == null) ? 0 : placeable.hashCode());
		result = prime * result + ((scheduleDay == null) ? 0 : scheduleDay.hashCode());
		result = prime * result + ((user == null) ? 0 : user.hashCode());
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
		Schedule other = (Schedule) obj;
		if (event == null) {
			if (other.event != null)
				return false;
		} else if (!event.equals(other.event))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (placeable == null) {
			if (other.placeable != null)
				return false;
		} else if (!placeable.equals(other.placeable))
			return false;
		if (scheduleDay == null) {
			if (other.scheduleDay != null)
				return false;
		} else if (!scheduleDay.equals(other.scheduleDay))
			return false;
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Schedule [id=" + id + ", event=" + event + ", user=" + user + ", scheduleDay=" + scheduleDay
				+ ", placeable=" + placeable + "]";
	}
}
