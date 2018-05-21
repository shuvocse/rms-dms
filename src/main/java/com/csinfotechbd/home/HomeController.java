package com.csinfotechbd.home;

import org.springframework.stereotype.Controller;

@Controller
public class HomeController {
	
	public String getHomePage(){
		return "home/home-page";
	}
}
