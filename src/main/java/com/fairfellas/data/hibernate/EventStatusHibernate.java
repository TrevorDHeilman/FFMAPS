package com.fairfellas.data.hibernate;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fairfellas.beans.EventStatus;
import com.fairfellas.data.EventStatusDAO;
import com.fairfellas.utils.HibernateUtil;
import com.fairfellas.utils.LogUtil;

@Component
public class EventStatusHibernate implements EventStatusDAO{
	@Autowired
	private HibernateUtil hu;
	
	@Override
	public int addEventStatus(EventStatus newEventStatus) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.save(newEventStatus);
			tx.commit();
		} catch(Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, EventStatusHibernate.class);
		} finally {
			s.close();
		}
		return newEventStatus.getId();
	}

	@Override
	public EventStatus getEventStatusById(int id) {
		EventStatus eventStatus;
		Session s = hu.getSession();
		eventStatus = s.get(EventStatus.class, id);
		s.close();
		return eventStatus;
	}

	@Override
	public List<EventStatus> getEventStatuses() {
		Session s = hu.getSession();
		String query = "FROM EventStatusInfo es ORDER BY es.id ASC";
		Query<EventStatus> q = s.createQuery(query, EventStatus.class);
		List<EventStatus> eventStatusList = q.getResultList();
		List<EventStatus> eventStatusAList = new ArrayList<EventStatus>();
		eventStatusAList.addAll(eventStatusList);
		System.out.println(eventStatusAList);
		return eventStatusAList;
	}

	@Override
	public void removeEventStatus(int id) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			EventStatus eventStatus = s.get(EventStatus.class, id);
			s.delete(eventStatus);
			tx.commit();
		} catch(Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, EventStatusHibernate.class);
		} finally {
			s.close();	
		}
	}
}
