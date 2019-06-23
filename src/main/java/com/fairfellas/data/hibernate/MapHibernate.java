package com.fairfellas.data.hibernate;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fairfellas.beans.Map;
import com.fairfellas.data.MapDAO;
import com.fairfellas.utils.HibernateUtil;
import com.fairfellas.utils.LogUtil;

@Component
public class MapHibernate implements MapDAO{
	@Autowired
	private HibernateUtil hu;
	
	@Override
	public int addMap(Map newMap) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.save(newMap);
			tx.commit();
		} catch(Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, MapHibernate.class);
		} finally {
			s.close();
		}
		return newMap.getId();
	}

	@Override
	public List<Map> getMapsByMapId(int id) {
		Session s = hu.getSession();
		String query = "FROM Map m ORDER BY m.id ASC";
//		String query = "FROM Maps m ORDER BY m.MapEntryId ASC";
		Query<Map> q = s.createQuery(query, Map.class);
		List<Map> mapList = q.getResultList();
		List<Map> mapSet = new ArrayList<Map>();
//		mapSet.addAll(mapList);
		for(Map m : mapList) {
			if(m.getMapId()==id) {
				mapSet.add(m);
			}
		}
		System.out.println(mapSet);
		return mapSet;
	}

	@Override
	public List<Map> getMaps() {
		Session s = hu.getSession();
		String query = "FROM Map m ORDER BY m.id ASC";
		Query<Map> q = s.createQuery(query, Map.class);
		List<Map> mapList = q.getResultList();
		List<Map> mapSet = new ArrayList<Map>();
		mapSet.addAll(mapList);
		System.out.println(mapSet);
		return mapSet;
	}
	
	public void updateMap(Map map) {
		System.out.println(map);
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.update(map);
			tx.commit();
		} catch(Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, MapHibernate.class);
		} finally {
			s.close();
		}
	}

	@Override
	public void removeMap(int id) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			Map map = s.get(Map.class, id);
			s.delete(map);
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
