package com.fairfellas.aspects;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fairfellas.data.hibernate.HibernateSession;
import com.fairfellas.utils.HibernateUtil;

@Component
@Aspect
public class HibernateAspect {
	
	@Autowired
	private HibernateUtil hu;
	
	@Around("allDataObjects()")
	public Object manageSession(ProceedingJoinPoint pjp) throws Throwable {
		Object obj = null;
		Session session = hu.getSession();
		Transaction tx = session.beginTransaction();
		HibernateSession hs = (HibernateSession) pjp.getThis();
		hs.setSession(session);
		try {
			obj = pjp.proceed();
			tx.commit();
		} catch(Throwable t) {
			tx.rollback();
			hs.setSession(null);
			throw t;
		}
		session.close();
		hs.setSession(null);
		return obj;
	}
	
	
	@Pointcut("execution( * com.revature.data.hibernate..*(..)) && "
			+ "!execution( * com.revature.data.hibernate..setSession(..))")
	public void allDataObjects() {/* Hook */}
}

