package com.csinfotechbd.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.session.HttpSessionEventPublisher;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private CustomAccessDeniedHandler customAccessDeniedHandler;
	@Autowired
	private CustomAuthenticationProvider customAuthenticationProvider;

	@Autowired
	private CustomLoginSuccessHandler customLoginSuccessHandler;
	
	@Autowired
	private CustomLogouthandler customLogouthandler;
	
/*	@Autowired
	private CustomWebAuthenticationDetailsSource authenticationDetailsSource;*/

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(customAuthenticationProvider);
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.formLogin().failureUrl("/?error").successHandler(customLoginSuccessHandler).loginPage("/").permitAll()
				.and().logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
				.logoutSuccessHandler(customLogouthandler).permitAll();

		http.authorizeRequests().antMatchers("/**")
				.hasAnyAuthority("ROLE_ADMIN")
				// .antMatchers("/manageEmployee/createUser").hasAnyAuthority(Role.ROLE_ADMIN.name(),Role.ROLE_USER.name())
				.anyRequest().authenticated().and().exceptionHandling().accessDeniedHandler(customAccessDeniedHandler);
		http.headers().frameOptions().sameOrigin();
	}

	
	
	
	/*@Bean
	public UsernamePasswordAuthenticationFilter authenticationFilter() {
	    CustomUsernamePasswordAuthenticationFilter authFilter = new CustomUsernamePasswordAuthenticationFilter();
	    List<AuthenticationProvider> authenticationProviderList = new ArrayList<AuthenticationProvider>();
	    authenticationProviderList.add(customAuthenticationProvider);
	    AuthenticationManager authenticationManager = new ProviderManager(authenticationProviderList);
	    authFilter.setAuthenticationManager(authenticationManager);
	    authFilter.setUsernameParameter("username");
	    authFilter.setPasswordParameter("password");
	    return authFilter;
	}*/
	
	@Bean
	public HttpSessionEventPublisher httpSessionEventPublisher(){
		return new HttpSessionEventPublisher();
	}
	
}
