package com.fairfellas.data.hibernate;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fairfellas.beans.User;
import com.fairfellas.data.UserDAO;
import com.fairfellas.utils.HibernateUtil;

@Component
public class UserHibernate implements UserDAO {	
	@Autowired
	private HibernateUtil hu = HibernateUtil.getInstance();

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

	@Override
	public List<User> getAttendants() {
		Session s = hu.getSession();
		String query = "from userinfo u where u.usertypeid=3";
		Query<User> q = s.createQuery(query, User.class);
		List<User> attendants = q.getResultList();
		System.out.println(attendants);
		return attendants;
	}

}
