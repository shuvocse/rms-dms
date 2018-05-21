package com.csinfotechbd.users;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * Created by Emon Hossain on 8/24/2017.
 */
@Repository
public class UserDao {
	
	@Autowired
	private EntityManager entityManager;

	public List<User> findAllUser() {
		CriteriaBuilder builder = entityManager.getCriteriaBuilder();
		CriteriaQuery<User> query = builder.createQuery(User.class);
		Root<User> root = query.from(User.class);
		query.select(root);
		List<User> users = entityManager.createQuery(query).getResultList();
		return users;
	}

	public User findById(long id) {
		CriteriaBuilder builder = entityManager.getCriteriaBuilder();
		CriteriaQuery<User> query = builder.createQuery(User.class);
		
		Root<User> root = query.from(User.class);
		query.select(root);
		query.where(builder.equal(root.get(User_.userId), id));
		User user = entityManager.createQuery(query).getSingleResult();
		return user;
	}

	public void saveUser(User user) {
		entityManager.persist(user);
	}

	public void updateUser(User user) {
		User u = entityManager.find(User.class, user.getUserId());
		u.setFirstName("ABC");
		entityManager.flush();
	}

	public void deleteUser(User user) {
		entityManager.remove(user);
	}
	
	public User findUserAndRolesByUsername(String username) {
		CriteriaBuilder builder = entityManager.getCriteriaBuilder();
		CriteriaQuery<User> query = builder.createQuery(User.class);
		Root<User> root = query.from(User.class);
		//ListJoin<User, Role> join = root.join(User_.roles);
		query.where(builder.equal(root.get(User_.username), username));
		User user = entityManager.createQuery(query).getSingleResult();
		return user;
	}

}
