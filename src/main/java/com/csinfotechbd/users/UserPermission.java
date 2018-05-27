package com.csinfotechbd.users;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.Setter;

public class UserPermission {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Setter
	@Getter
	private int activityId;
	@Setter
	@Getter
	private boolean view;
	@Setter
	@Getter
	private boolean edit;
	@Setter
	@Getter
	private boolean delete;
	@Setter
	@Getter
	private boolean print;
	@Setter
	@Getter
	private boolean create;
	@OneToOne(optional = false)
	@JoinColumn(name = "userId")
	@Setter
	@Getter
	private User user;

}
