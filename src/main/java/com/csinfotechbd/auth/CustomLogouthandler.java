package com.csinfotechbd.auth;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.security.web.authentication.logout.SimpleUrlLogoutSuccessHandler;
import org.springframework.stereotype.Component;

@Component
public class CustomLogouthandler extends SimpleUrlLogoutSuccessHandler implements LogoutSuccessHandler{


	@Override
	public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
			throws IOException, ServletException {
		Object[] cookies = request.getCookies();
		//String username = authentication.getName();
		request.getSession().invalidate();
		//userDao.removeLoginStatus(new SingleSignIn(username));
		for(Object obj : cookies){
			Cookie t = (Cookie)obj;
			//System.out.println(t.toString());
			//System.out.println("name :"+t.getName()+" exp :"+t.getMaxAge()+" val :"+t.getValue()+" dmn :"+t.getDomain()+" sec :"+t.getSecure());
			//System.out.println(((Cookie)obj).);
			Cookie c = new Cookie(((Cookie)obj).getName(), null);
			//System.out.println( "Cookie name : " +c.getName());
			c.setMaxAge(0);
			c.setPath("/");
			//c.setSecure(true);
			//c.setHttpOnly(true);
			response.addCookie(c);
			
		}
		//authentication.setAuthenticated(false);
		super.onLogoutSuccess(request, response, authentication);
	}

}
