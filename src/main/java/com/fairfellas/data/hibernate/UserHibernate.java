package com.fairfellas.data.hibernate;

import org.hibernate.Session;
import org.hibernate.query.Query;

import com.fairfellas.beans.User;
import com.fairfellas.data.UserDAO;
import com.fairfellas.utils.HibernateUtil;

public class UserHibernate implements UserDAO {	
	private HibernateUtil hu = HibernateUtil.getInstance();


	@Override
	public User getUser(String username, String password) {
		Session s = hu.getSession();
		String query = "from User u where u.username=:username and u.password=:password";
		Query<User> q = s.createQuery(query, User.class);
		q.setParameter("username", username);
		q.setParameter("password", password);
		User u = q.getSingleResult();
		s.close();
		return u;
	}

}
