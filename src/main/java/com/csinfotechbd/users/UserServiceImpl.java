package com.csinfotechbd.users;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDao userDao;

	@Override
	public <T> List<T> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <T> T getUniqueResult(T id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <T> boolean save(T object) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public <T> boolean update(T object) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public <T> boolean delete(T id) {
		// TODO Auto-generated method stub
		return false;
	}

	public List<User> findAllUser() {
		return userDao.findAllUser();
	}
	public User findById(int id){
		return userDao.findById(id);
	}

	@Override
	public void saveUserPermisssion(UserPermission permission) {
		userDao.saveUserPermissions(permission);
	}

	@Override
	public void updateUserPermission(UserPermission permission) {
		userDao.updateUserPermissions(permission);
	}

	@Override
	public UserPermission getUserPermissionByUserId(int id) {
		return userDao.getUserPermissionByUserId(id);
	}

	@Override
	public UserPermission getPermissions() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User u = (User) auth.getPrincipal();

		UserPermission permission = userDao.getUserPermissionByUserId(u.getUserId());

		return permission;
	}

}
