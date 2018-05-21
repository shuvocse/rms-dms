package com.csinfotechbd.rms.home;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/rms")
public class RmsHomeController {

	@GetMapping(value = "/home")
	public String index(){
		return "rms/home/index";
	}
	
	@GetMapping(value = "/denied")
	public String denied(){
		return "home/denied";
	}
}
