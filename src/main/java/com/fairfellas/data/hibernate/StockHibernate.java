package com.fairfellas.data.hibernate;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fairfellas.beans.Stock;
import com.fairfellas.data.StockDAO;
import com.fairfellas.utils.HibernateUtil;
import com.fairfellas.utils.LogUtil;

@Component
public class StockHibernate implements StockDAO {
	@Autowired
	private HibernateUtil hu;

	@Override
	public void addStock(Stock stock) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.save(stock);
			tx.commit();
		} catch(Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, StockHibernate.class);
		} finally {
			s.close();
		}
	}

	@Override
	public Stock getStock(Integer id) {
		System.out.println(hu);
		Session s = hu.getSession();
		Stock stock = s.get(Stock.class, id);
		s.close();
		return stock;
	}

}
