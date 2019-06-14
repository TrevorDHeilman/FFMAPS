package com.fairfellas.data.hibernate;

import org.hibernate.Transaction;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fairfellas.beans.Purchase;
import com.fairfellas.data.PurchaseDAO;
import com.fairfellas.utils.HibernateUtil;

@Component
public class PurchaseHibernate implements PurchaseDAO {
	@Autowired
	private HibernateUtil hibernateUtil = HibernateUtil.getInstance();
	
	@Override
	public int addPurchase(Purchase purchase) {
		Session session = hibernateUtil.getSession();
		Transaction transaction = null;
		
		try {
			transaction = session.beginTransaction();
			session.save(purchase);
			transaction.commit();
		} catch(Exception e) {
			if (null != transaction) {
				transaction.rollback();
			}
		} finally {
			session.close();
		}
		
		return 1;
	}
}
