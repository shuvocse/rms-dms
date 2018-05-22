package com.csinfotechbd.users;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * Created by Emon Hossain on 8/24/2017.
 */
@Repository
@Transactional
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

	public User findById(int id) {
		User u  = (User) getSession().createCriteria(User.class).add(Restrictions.eq("userId", id)).uniqueResult();
		return u;
	}

	public User findUserAndRolesByUsername(String username) {
		Criteria criteria = getSession().createCriteria(User.class, "u");
		/*criteria.createAlias("u.roles", "r", JoinType.INNER_JOIN);*/
		criteria.add(Restrictions.eq("u.username", username));
		User u = (User) criteria.uniqueResult();
		return u;
	}

}
