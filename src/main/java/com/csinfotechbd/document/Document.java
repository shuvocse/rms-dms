package com.csinfotechbd.document;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.csinfotechbd.base.BaseProperty;
import com.csinfotechbd.document.category.DocCategory;
import com.csinfotechbd.roles.Role;
import com.csinfotechbd.users.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "dms_tb_m_docs")
@NoArgsConstructor
@AllArgsConstructor
public class Document extends BaseProperty {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Setter
	@Getter
	private Integer docId;
	@Setter
	@Getter
	private String name;
	@Setter
	@Getter
	private String type;
	@Setter
	@Getter
	private long size;
	@Setter
	@Getter
	private String trackNo;
	@Setter
	@Getter
	private String url;
	@ManyToOne(optional = true)
	@JoinColumn(name = "ctg")
	private DocCategory docCategory;

	@Getter
	@Setter
	@ManyToMany(cascade = CascadeType.DETACH, fetch = FetchType.LAZY)
	@JoinTable(name = "dms_tb_j_doc_roles", joinColumns = { @JoinColumn(name = "docId") }, inverseJoinColumns = {
			@JoinColumn(name = "roleId") })
	private List<Role> roles = new ArrayList<>();

	@Getter
	@Setter
	@ManyToMany(cascade = CascadeType.DETACH, fetch = FetchType.LAZY)
	@JoinTable(name = "dms_tb_j_doc_users", joinColumns = { @JoinColumn(name = "docId") }, inverseJoinColumns = {
			@JoinColumn(name = "userId") })
	private List<User> users = new ArrayList<>();

	public Document(Integer docId, String name, String type, long size, String trackNo, String url,
			DocCategory docCategory) {
		this.docId = docId;
		this.name = name;
		this.type = type;
		this.size = size;
		this.trackNo = trackNo;
		this.url = url;
		this.docCategory = docCategory;
	}
	
	
}
