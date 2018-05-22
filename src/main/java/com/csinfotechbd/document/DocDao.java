package com.csinfotechbd.document;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.hibernate.sql.JoinType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.csinfotechbd.users.User;

@Repository
@Transactional
public class DocDao {

	@Autowired
	private SessionFactory _sessionFactory;

	private Session getSession() {
		return _sessionFactory.getCurrentSession();
	}

	public void saveToDb(Document document) {
		getSession().save(document);
	}

	public Document getDocsById(int id) {
		Document d = (Document) getSession().createCriteria(Document.class).add(Restrictions.eq("docId", id)).uniqueResult();
		return d;
	}

	public Document findDocumentWithUser(int id) {
		Document d = (Document) getSession().createCriteria(Document.class).add(Restrictions.eq("docId", id)).uniqueResult();
		d.setUsers(new ArrayList<User>(d.getUsers()));
		return d;
	}

	@SuppressWarnings("unchecked")
	public List<Document> getAllDocument() {
		Criteria criteria = getSession().createCriteria(Document.class);
		List<Document> docs = criteria.list();
		return docs;
	}

	public List<Document> getAllDocumentByUser(int userId) {
		Criteria criteria = getSession().createCriteria(Document.class, "d");
		criteria.createAlias("d.users", "u", JoinType.INNER_JOIN);
		criteria.add(Restrictions.eq("u.userId", userId));
		List<Document> docs = criteria.list();
		return docs;
	}

	public void updateDoc(Document docs) {
		getSession().update(docs);
	}

}
