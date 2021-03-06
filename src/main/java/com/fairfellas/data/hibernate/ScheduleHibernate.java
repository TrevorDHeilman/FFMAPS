package com.fairfellas.data.hibernate;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fairfellas.beans.Schedule;
import com.fairfellas.data.ScheduleDAO;
import com.fairfellas.utils.HibernateUtil;
import com.fairfellas.utils.LogUtil;

@Component
public class ScheduleHibernate implements ScheduleDAO {
	@Autowired
	private HibernateUtil hu;
	
	@Override
	public List<Schedule> getSchedule() {
		System.out.println("scheudle hibernate!!!");
		Session s = hu.getSession();
		String query = "FROM Schedule s order by s.id asc";
		Query<Schedule> q = s.createQuery(query, Schedule.class);
		List<Schedule> schedule = q.getResultList();
		System.out.println(schedule);
		return schedule;
	}

	@Override
	public int addSchedule(Schedule sch) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.save(sch);
			tx.commit();
		} catch(Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, ScheduleHibernate.class);
		} finally {
			s.close();
		}
		return sch.getId();
	}

	@Override
	public void updateSchedule(Schedule sch) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.update(sch);
			tx.commit();
		} catch(Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, ScheduleHibernate.class);
		} finally {
			s.close();
		}
	}
	
	@Override
	public Schedule getScheduleById(int id) {
		Schedule sch;
		Session s = hu.getSession();
		sch = s.get(Schedule.class, id);
		s.close();
		return sch;
	}
}
