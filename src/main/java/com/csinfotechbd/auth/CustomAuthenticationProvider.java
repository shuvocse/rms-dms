package com.csinfotechbd.auth;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import com.csinfotechbd.roles.Role;
import com.csinfotechbd.users.User;
import com.csinfotechbd.users.UserDao;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private UserDao userDao;

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {

		User user = null;
		
		String username = authentication.getName();
		String password = authentication.getCredentials().toString();
		
		try{
			user = userDao.findUserAndRolesByUsername(username);
		}catch (Exception ex) {
			ex.printStackTrace();
		}

		if (user == null)
			return null;
		else if (new BCryptPasswordEncoder().matches(password, user.getPassword()) && user.isActive() == true) {

			//List<Role> roles = user.getRoles();
			List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();

			//for (Role role : roles) {
				authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
			//}

			return new UsernamePasswordAuthenticationToken(user, null, authorities);
		}
		return null;
	}

	@Override
	public boolean supports(Class<?> authentication) {
		return authentication.equals(UsernamePasswordAuthenticationToken.class);
	}

}
