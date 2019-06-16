package com.fairfellas.data.hibernate;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fairfellas.beans.Contact;
import com.fairfellas.beans.Event;
import com.fairfellas.data.ContactDAO;
import com.fairfellas.utils.HibernateUtil;
import com.fairfellas.utils.LogUtil;

@Component
public class ContactHibernate implements ContactDAO{
	@Autowired
	private HibernateUtil hu;
	
	public int addContact(Contact newContact) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.save(newContact);
			tx.commit();
		} catch(Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, ContactHibernate.class);
		} finally {
			s.close();
		}
		return newContact.getId();
	}
	public Contact getContactById(int id) {
		Contact contact;
		Session s = hu.getSession();
		contact = s.get(Contact.class, id);
		s.close();
		return contact;
	}
	public List<Contact> getContacts(){
		Session s = hu.getSession();
		String query = "FROM Contact e ORDER BY e.id ASC";
		Query<Contact> q = s.createQuery(query, Contact.class);
		List<Contact> contactList = q.getResultList();
		List<Contact> contactAList = new ArrayList<Contact>();
		contactAList.addAll(contactList);
		System.out.println(contactAList);
		return contactAList;
	}
	public void updateContact(Contact contact) {
		System.out.println(contact);
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.update(contact);
			tx.commit();
		} catch(Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, ContactHibernate.class);
		} finally {
			s.close();
		}
	}
	public void removeContact(int id) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			Contact contact = s.get(Contact.class, id);
			s.delete(contact);
			tx.commit();
		} catch(Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			LogUtil.logException(e, ContactHibernate.class);
		} finally {
			s.close();	
		}
	}
}
