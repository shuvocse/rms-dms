package com.csinfotechbd.login;

import java.security.Principal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {
	
	@GetMapping("/")
	public String getSignInPage(Principal principal){
		System.out.println("LOGIN PAGE GOT HIT");
		if(principal!=null)
			return "home/home-page";
		return "login-form";
	}
	
	@GetMapping("/error")
	public String geterrorPage(){
		
		return "error";
	}
}
