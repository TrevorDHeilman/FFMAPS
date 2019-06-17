package com.fairfellas.data;

import java.util.List;

import com.fairfellas.beans.Event;
import com.fairfellas.beans.EventStatus;

public interface EventStatusDAO {
	public int addEventStatus(EventStatus newEventStatus);
	public EventStatus getEventStatusById(int id);
	public List<EventStatus> getEventStatuses();
	public void removeEventStatus(int id);
}
