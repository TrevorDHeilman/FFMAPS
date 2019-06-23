package com.fairfellas.data.hibernate;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.ParameterExpression;
import javax.persistence.criteria.Root;

import org.apache.log4j.Logger;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.hibernate.query.Query;
import org.springframework.stereotype.Component;

import com.fairfellas.beans.Receipt;
import com.fairfellas.data.ReceiptDAO;
import com.fairfellas.utils.HibernateUtil;

@Component
public class ReceiptHibernate implements ReceiptDAO {
	private HibernateUtil hibernateUtil = HibernateUtil.getInstance();
	private Logger log;

	@Override
	public List<Receipt> getReceipt(String email) {
		log = Logger.getLogger(this.getClass());
		log.trace(email);

		Session session = hibernateUtil.getSession();

		Query query = session.createQuery("FROM Receipt r WHERE r.email IN (:email)");

		List<String> emails = new ArrayList<String>();
		emails.add(email);

		query.setParameterList("email", emails);

		List<Receipt> receipts = (List<Receipt>) query.getResultList();

		if (null != receipts && receipts.isEmpty() == false) {
			log.trace(receipts);
			Receipt r = (Receipt) receipts.get(0);

			return receipts;
		}
		return null;
	}

	@Override
	public List<Receipt> getReceipts() {
		log = Logger.getLogger(this.getClass());

		Session session = hibernateUtil.getSession();
		
		Query query = session.createQuery("SELECT locationId, count(locationId) FROM Receipt r GROUP BY locationId");
//		Query query = session.createQuery("FROM Receipt r");
		
		List receipts = new ArrayList();// = query.getResultList();
		
//		if (null != receipts && receipts.isEmpty() == false) {
		for (Iterator it = query.iterate(); it.hasNext();) {
				Object[] row = (Object[]) it.next();
				Receipt receipt = new Receipt();
				receipt.setLocationId(Integer.valueOf(row[0].toString()));
				receipt.setNumberOfTickets(Integer.valueOf(row[1].toString()));

				receipts.add(receipt);
					 
//					 System.out.println("Invested Amount: " + row[0]);
//					 System.out.println("Insurance Name: " + row[1]);
					  }
//			log.trace(receipts.get(0).toString());

			return receipts;
//		}
//		return null;
	}
}
