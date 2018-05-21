package com.csinfotechbd.roles;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.csinfotechbd.document.Document;
import com.csinfotechbd.users.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "dms_tb_s_role")
public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Setter
	@Getter
	private Integer roleId;
	@Setter
	@Getter
	private String role;
	@Setter
	@Getter
	private String description;
	@Setter
	@Getter
	@ManyToMany(mappedBy = "roles")
	private List<User> users = new ArrayList<>();

	@Setter
	@Getter
	@ManyToMany(mappedBy = "roles", cascade = CascadeType.DETACH)
	private List<Document> docs = new ArrayList<>();

}
