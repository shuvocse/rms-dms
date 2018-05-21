package com.csinfotechbd.users;

import java.util.List;

import com.csinfotechbd.base.BaseService;

public interface UserService extends BaseService{
	public List<User> findAllUser();
	public User findById(int id);

}
