package com.fairfellas.data;

import java.util.List;

import com.fairfellas.beans.Contact;

public interface ContactDAO {
	public int addContact(Contact newContact);
	public Contact getContactById(int id);
	public List<Contact> getContacts();
	public void removeContact(int id);
}
