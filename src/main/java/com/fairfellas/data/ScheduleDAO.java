package com.fairfellas.data;

import java.util.List;

import com.fairfellas.beans.Schedule;

public interface ScheduleDAO {
	public List<Schedule> getSchedule();
	public void addSchedule(Schedule sch);
}
