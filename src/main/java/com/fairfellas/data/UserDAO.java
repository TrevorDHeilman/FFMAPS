package com.fairfellas.data;

import com.fairfellas.beans.User;

public interface UserDAO {
	public User getUser(String username, String password);
}
