package com.fairfellas.data.hibernate;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fairfellas.beans.Location;
import com.fairfellas.data.LocationDAO;
import com.fairfellas.utils.HibernateUtil;
import com.fairfellas.utils.LogUtil;

@Component
public class LocationHibernate implements LocationDAO{
	@Autowired
	private HibernateUtil hu;

	@Override
	public int addLocation(Location newLocation) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.save(newLocation);
			tx.commit();
		} catch(Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, LocationHibernate.class);
		} finally {
			s.close();
		}
		return newLocation.getId();
	}
	
	@Override
	public Location getLocationById(int id){
		Location location;
		Session s = hu.getSession();
		location = s.get(Location.class, id);
		s.close();
		return location;
	}

	@Override
	public List<Location> getLocations() {
		Session s = hu.getSession();
		String query = "FROM LocationInfo l ORDER BY l.id ASC";
		Query<Location> q = s.createQuery(query, Location.class);
		List<Location> locationList = q.getResultList();
		List<Location> locationSet = new ArrayList<Location>();
		locationSet.addAll(locationList);
		System.out.println(locationSet);
		return locationSet;
	}


	public void updateLocation(Location location) {
		System.out.println(location);
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.update(location);
			tx.commit();
		} catch(Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, LocationHibernate.class);
		} finally {
			s.close();
		}
	}
	
	@Override
	public void removeLocation(int id) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			Location location = s.get(Location.class, id);
			s.delete(location);
			tx.commit();
		} catch(Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, LocationHibernate.class);
		} finally {
			s.close();	
		}
	}	
}
