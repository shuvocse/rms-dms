package com.csinfotechbd.auth;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.session.SessionDestroyedEvent;
import org.springframework.stereotype.Component;

@Component
public class SessionEndListener implements ApplicationListener<SessionDestroyedEvent>{

	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Override
	public void onApplicationEvent(SessionDestroyedEvent event) {
		event.getSecurityContexts().parallelStream().forEach(sec->{
			Authentication auth = sec.getAuthentication();
			logger.debug(auth.getName());
		});
	}

}
