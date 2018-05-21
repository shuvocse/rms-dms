package com.csinfotechbd.auth;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

/**
 * 
 * @author Emon Hossain Software Engineer, Computer Source Infotech, Jul 20,
 *         2017 -- 3:09:50 PM, Custom build access denied handler to logging the
 *         user and take action to prevent any consequences
 */
@Component
public class CustomAccessDeniedHandler implements AccessDeniedHandler {

	private final Logger log = LoggerFactory.getLogger(this.getClass());

	@Override
	public void handle(HttpServletRequest request, HttpServletResponse response,
			AccessDeniedException accessDeniedException) throws IOException, ServletException {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (auth != null) {
			log.warn("User : " + auth.getName() + " attempted to access the protected URL:" + request.getRequestURI());
		}
		response.sendRedirect(request.getContextPath() + "/denied");
	}

}
