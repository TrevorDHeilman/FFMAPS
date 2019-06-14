package com.fairfellas.data.hibernate;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
	public Set<Stock> getStock() {
		Session s = hu.getSession();
		String query = "FROM Stock";
		Query<Stock> q = s.createQuery(query, Stock.class);
		List<Stock> stockList = q.getResultList();
		Set<Stock> stockSet = new HashSet<Stock>();
		stockSet.addAll(stockList);
		System.out.println(stockSet);
		return stockSet;
	}

}
