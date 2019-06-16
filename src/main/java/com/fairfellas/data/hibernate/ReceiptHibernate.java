package com.fairfellas.data.hibernate;

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
	public Receipt getReceipt(String email) {
		log = Logger.getLogger(this.getClass());
		log.trace(email);
		/**
		 * Using a criteria builder to get Receipt based on email
		 */
		Session session = hibernateUtil.getSession();

//		Criteria criteria = createEntityCriteria();
//		criteria.add(Restrictions.eq("email", email));
//		return (Receipt) criteria.uniqueResult();

//		String query = "FROM Receipt";
//		Query<Receipt> q = session.createQuery(query, Receipt.class);
//		
//		Receipt r = (Receipt) session.load(Receipt.class, )
//		return q.getResultList().get(0);
		
		Criteria criteria = session.createCriteria(Receipt.class).add(Restrictions.eq("email", email));
		
		Object result = criteria.uniqueResult();
		if (null != result) {
			Receipt r = (Receipt) result;
			return r;
		}
		return null;
	}

//	protected Criteria createEntityCriteria() {
//		return session.createCriteria(persistentClass);
//	}
}
