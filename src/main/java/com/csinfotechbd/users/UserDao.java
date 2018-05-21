package com.csinfotechbd.users;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.hibernate.sql.JoinType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * Created by Emon Hossain on 8/24/2017.
 */
@Repository
public class UserDao {

	@Autowired
	private SessionFactory _sessionFactory;

	private Session getSession() {
		return _sessionFactory.getCurrentSession();
	}

	@SuppressWarnings("unchecked")
	public List<User> findAllUser() {
		Criteria criteria = getSession().createCriteria(User.class, "u");
		List<User> users = criteria.list();
		return users;
	}

	public User findById(long id) {
		Criteria criteria = getSession().createCriteria(User.class, "u");
		criteria.add(Restrictions.eq("u.userId", id));
		User u = (User) criteria.uniqueResult();
		return u;
	}

	public User findUserAndRolesByUsername(String username) {
		Criteria criteria = getSession().createCriteria(User.class, "u");
		criteria.createAlias("u.roles", "r", JoinType.INNER_JOIN);
		criteria.add(Restrictions.eq("u.username", username));
		User u = (User) criteria.uniqueResult();
		return u;
	}

}
