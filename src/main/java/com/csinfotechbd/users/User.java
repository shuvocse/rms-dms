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
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

import com.csinfotechbd.document.Document;
import com.csinfotechbd.roles.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 
 * @author Emon Hossain Software Engineer, Computer Source Infotech, May 15,
 *         2018 -- 12:55:02 PM,
 */
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "dms_tb_s_users")
@DynamicUpdate
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Setter
	@Getter
	private Integer userId;
	@Column(length = 50, nullable = false, unique = true)
	@Setter
	@Getter
	private String username;
	@Column(length = 25, nullable = false)
	@Setter
	@Getter
	private String firstName;
	@Column(length = 25, nullable = false)
	@Setter
	@Getter
	private String lastName;
	@Setter
	@Getter
	private String password;
	@Setter
	@Getter
	private boolean active;
	@ManyToMany(cascade=CascadeType.DETACH)
	@JoinTable(name = "dms_tb_j_users_roles", joinColumns = { @JoinColumn(name = "userId") }, inverseJoinColumns = {
			@JoinColumn(name = "roleId") })
	@Setter
	@Getter
	private List<Role> roles = new ArrayList<>();
	@Setter
	@Getter
	@ManyToMany(mappedBy = "users", cascade = CascadeType.DETACH)
	private List<Document> docEntities = new ArrayList<>();

	public User(int userId) {
		this.userId = userId;
	}

	public User(String username, String firstName, String lastName, String password) {
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
	}

}
