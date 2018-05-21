package com.csinfotechbd.users;

import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

import com.csinfotechbd.roles.Role;

@StaticMetamodel(User.class)
public class User_ {
	public static volatile SingularAttribute<User, Long> userId;
	public static volatile SingularAttribute<User, String> username;
	public static volatile ListAttribute<User, Role> roles;
	
}
