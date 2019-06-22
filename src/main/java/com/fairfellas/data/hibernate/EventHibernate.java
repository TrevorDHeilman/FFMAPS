package com.fairfellas.data.hibernate;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fairfellas.beans.Event;
import com.fairfellas.data.EventDAO;
import com.fairfellas.utils.HibernateUtil;
import com.fairfellas.utils.LogUtil;

@Component
public class EventHibernate implements EventDAO{
	@Autowired
	private HibernateUtil hu;
	
	@Override
	public int addEvent(Event newEvent) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			System.out.println("newEvent");
			System.out.println(newEvent);
//			s.save(newEvent);
			tx.commit();
		} catch(Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, EventHibernate.class);
		} finally {
			s.close();
		}
		return newEvent.getId();
	}
	
	@Override
	public Event getEventById(int id) {
		Event event;
		Session s = hu.getSession();
		event = s.get(Event.class, id);
		s.close();
		return event;
	}
	
	@Override
	public List<Event> getEvents() {
		Session s = hu.getSession();
		String query = "FROM Event e ORDER BY e.id ASC";
		Query<Event> q = s.createQuery(query, Event.class);
		List<Event> eventList = q.getResultList();
		List<Event> eventAList = new ArrayList<Event>();
		eventAList.addAll(eventList);
		System.out.println(eventAList);
		return eventAList;
	}
	
	public void updateEvent(Event event) {
		System.out.println(event);
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.update(event);
			tx.commit();
		} catch(Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, EventHibernate.class);
		} finally {
			s.close();
		}
	}
	
	@Override
	public void removeEvent(int id) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			Event event = s.get(Event.class, id);
			s.delete(event);
			tx.commit();
		} catch(Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, EventHibernate.class);
		} finally {
			s.close();	
		}
	}
}
