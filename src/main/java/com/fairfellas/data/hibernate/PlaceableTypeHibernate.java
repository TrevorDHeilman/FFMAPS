package com.fairfellas.data.hibernate;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fairfellas.beans.Placeable;
import com.fairfellas.beans.PlaceableType;
import com.fairfellas.data.PlaceableTypeDAO;
import com.fairfellas.utils.HibernateUtil;
import com.fairfellas.utils.LogUtil;

@Component
public class PlaceableTypeHibernate implements PlaceableTypeDAO{
	@Autowired
	private HibernateUtil hu;
	
	@Override
	public int addPlaceableType(PlaceableType newPlaceableType) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.save(newPlaceableType);
			tx.commit();
		} catch(Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, PlaceableTypeHibernate.class);
		} finally {
			s.close();
		}
		return newPlaceableType.getTypeId();
	}

	@Override
	public PlaceableType getPlaceableTypeById(int id) {
		PlaceableType placeableType;
		Session s = hu.getSession();
		placeableType = s.get(PlaceableType.class, id);
		s.close();
		return placeableType;
	}

	@Override
	public List<PlaceableType> getPlaceableTypes() {
		Session s = hu.getSession();
		String query = "FROM PlaceableType";
		Query<PlaceableType> q = s.createQuery(query, PlaceableType.class);
		List<PlaceableType> placeableTypeList = q.getResultList();
		List<PlaceableType> placeableTypeAList = new ArrayList<PlaceableType>();
		placeableTypeAList.addAll(placeableTypeList);
		return placeableTypeAList;
	}

	@Override
	public void removePlaceableType(PlaceableType placeableType) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.delete(placeableType);
			tx.commit();
		} catch(Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, PlaceableTypeHibernate.class);
		} finally {
			s.close();	
		}
	}
	
}
