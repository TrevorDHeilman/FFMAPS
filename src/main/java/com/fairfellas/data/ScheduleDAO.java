package com.fairfellas.data;

import java.util.List;

import com.fairfellas.beans.Schedule;

public interface ScheduleDAO {
	public List<Schedule> getSchedule();
	public int addSchedule(Schedule sch);
	public void updateSchedule(Schedule sch);
	public Schedule getScheduleById(int id); 
}
