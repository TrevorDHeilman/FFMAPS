package com.fairfellas.data;

import java.util.List;

import com.fairfellas.beans.Event;

public interface EventDAO {
	public int addEvent(Event newLocation);
	public Event getEventById(int id);
	public List<Event> getEvents();
	public void removeEvent(int id);
}
