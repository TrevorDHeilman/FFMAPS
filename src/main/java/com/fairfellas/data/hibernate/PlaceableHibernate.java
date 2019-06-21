package com.fairfellas.data.hibernate;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fairfellas.beans.Placeable;
import com.fairfellas.data.PlaceableDAO;
import com.fairfellas.utils.HibernateUtil;
import com.fairfellas.utils.LogUtil;

@Component
public class PlaceableHibernate implements PlaceableDAO{
	@Autowired
	private HibernateUtil hu;
	
	@Override
	public int addPlaceable(Placeable newPlaceable) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.save(newPlaceable);
			tx.commit();
		} catch(Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, PlaceableHibernate.class);
		} finally {
			s.close();
		}
		return newPlaceable.getId();
	}

	@Override
	public Placeable getPlaceableById(int id) {
		Placeable placeable;
		Session s = hu.getSession();
		placeable = s.get(Placeable.class, id);
		s.close();
		return placeable;
	}

	//FIX LATER
	@Override
	public List<Placeable> getPlaceableByType(String type) {
		Session s = hu.getSession();
		String query = "FROM Placeable";
		Query<Placeable> q = s.createQuery(query, Placeable.class);
		List<Placeable> placeableList = q.getResultList();
		List<Placeable> placeableAList = new ArrayList<Placeable>();
		placeableAList.addAll(placeableList);
		return placeableAList;
	}

	@Override
	public List<Placeable> getPlaceables() {
		Session s = hu.getSession();
		String query = "FROM Placeable";
		Query<Placeable> q = s.createQuery(query, Placeable.class);
		List<Placeable> placeableList = q.getResultList();
		List<Placeable> placeableAList = new ArrayList<Placeable>();
		placeableAList.addAll(placeableList);
		return placeableAList;
	}
	
	@Override
	public void removePlaceable(Placeable placeable) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.delete(placeable);
			tx.commit();
		} catch(Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, PlaceableHibernate.class);
		} finally {
			s.close();	
		}
	}	
}
