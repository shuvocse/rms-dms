package com.csinfotechbd.users;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.csinfotechbd.base.BaseProperty;

import lombok.Getter;
import lombok.Setter;
@Entity
@Table(name = "dms_tb_m_user_permission")
public class UserPermission extends BaseProperty{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Setter
	@Getter
	private int activityId;
	@Setter
	@Getter
	private boolean docView;
	@Setter
	@Getter
	private boolean docEdit;
	@Setter
	@Getter
	private boolean docDelete;
	@Setter
	@Getter
	private boolean docPrint;
	@Setter
	@Getter
	private boolean docCreate;
	@Setter
	@Getter
	private boolean docDownload;
	
	
	@OneToOne(optional = false)
	@JoinColumn(name = "userId")
	@Setter
	@Getter
	private User user;

}
