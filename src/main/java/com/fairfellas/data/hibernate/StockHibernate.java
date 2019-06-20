package com.fairfellas.data.hibernate;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
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
	public List<Stock> getStock() {
		Session s = hu.getSession();
		String query = "FROM Stock s ORDER BY s.id ASC";
		Query<Stock> q = s.createQuery(query, Stock.class);
		List<Stock> stockList = q.getResultList();
		List<Stock> stockSet = new ArrayList<Stock>();
		stockSet.addAll(stockList);
		System.out.println(stockSet);
		return stockSet;
	}

	@Override
	public void updateStock(Stock stock) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.update(stock);
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
	
}
