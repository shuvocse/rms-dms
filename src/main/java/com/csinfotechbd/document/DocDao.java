package com.csinfotechbd.document;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.csinfotechbd.users.User;

@Repository
@Transactional
public class DocDao {

	@Autowired
	private EntityManager entityManager;
	
	public void saveToDb(Document document) {
		entityManager.persist(document);
	}


	public Document getDocsById(int id) {
		CriteriaBuilder builder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Document> query = builder.createQuery(Document.class);
		Root<Document> root = query.from(Document.class);
		query.select(root);
		query.where(builder.equal(root.get("docId"), id));
		Document d = entityManager.createQuery(query).getSingleResult();
		return d;
	}

	public Document findDocumentWithUser(int id) {
		CriteriaBuilder builder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Document> query = builder.createQuery(Document.class);
		Root<Document> root = query.from(Document.class);
		query.select(root);
		//Join<Document, User> join = root.join("users", JoinType.INNER);
		query.where(builder.equal(root.get("docId"), id));
		Document d = entityManager.createQuery(query).getSingleResult();
		d.setUsers(new ArrayList<User>(d.getUsers()));
		return d;
	}

	public List<Document> getAllDocument() {
		CriteriaBuilder builder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Document> query = builder.createQuery(Document.class);
		Root<Document> root = query.from(Document.class);
		query.select(root);
		List<Document> doc = entityManager.createQuery(query).getResultList();
		return doc;
	}
	public Document findFileByFileId(long fileId) {
		
		CriteriaBuilder builder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Document> query = builder.createQuery(Document.class);
		Root<Document> root = query.from(Document.class);
		query.where(builder.equal(root.get("docId"), fileId));		
		Document doc = entityManager.createQuery(query).getSingleResult();

		return doc;
	}

}
