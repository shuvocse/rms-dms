package com.csinfotechbd.users;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.csinfotechbd.document.Document;
import com.csinfotechbd.roles.Role;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

/**
 * 
 * @author Emon Hossain Software Engineer, Computer Source Infotech, May 15,
 *         2018 -- 12:55:02 PM,
 */
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "dms_tb_s_users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)

	private Integer userId;
	@Column(length = 50, nullable = false, unique = true)

	private String username;
	@Column(length = 25, nullable = false)

	private String firstName;
	@Column(length = 25, nullable = false)

	private String lastName;

	private String password;

	private boolean active;
	@ManyToMany(cascade = CascadeType.DETACH)
	@JoinTable(name = "dms_tb_j_users_roles", joinColumns = { @JoinColumn(name = "userId") }, inverseJoinColumns = {
			@JoinColumn(name = "roleId") })

	private List<Role> roles = new ArrayList<>();

	@ManyToMany(mappedBy = "users", cascade = CascadeType.DETACH)
	private List<Document> documents = new ArrayList<>();

	
	public User(int userId) {
		this.userId = userId;
	}

	public User(String username, String firstName, String lastName, String password) {
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}

	public List<Document> getDocuments() {
		return documents;
	}

	public void setDocuments(List<Document> documents) {
		this.documents = documents;
	}

}
