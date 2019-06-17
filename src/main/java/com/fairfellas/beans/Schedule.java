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
//	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
//	@JoinColumn(name="eventid")
//	private Event event;
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="userid")
	private User user;
	private String scheduleDate;
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="placeableid")
	private Placeable placeable;

}
