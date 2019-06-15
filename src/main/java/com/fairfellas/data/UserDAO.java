package com.fairfellas.data;

import java.util.List;

import com.fairfellas.beans.User;

public interface UserDAO {
	public User getUser(String username, String password);
}
