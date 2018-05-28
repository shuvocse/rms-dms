package com.csinfotechbd.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UserPermissionController {
	@Autowired
	private UserService userService;
	
	@GetMapping("/user/permission/{id}")
	public String getUserPermission(Model model,@PathVariable String id){
		User user =userService.findById(Integer.parseInt(id));
		model.addAttribute("user", user);
		UserPermission userPermission= userService.getUserPermissionByUserId(Integer.parseInt(id));
		model.addAttribute("userPermission", userPermission);
		return "user/user-permission";
	}
	
	@PostMapping("/save/user/permission")
	public String savePermission(UserPermission userPermission){
		userService.updateUserPermission(userPermission);
		return "redirect:/user/list";
	}
	
	@GetMapping("/user/list")
	public String getUserList(Model model){
		model.addAttribute("userList", userService.findAllUser());
		return "user/user-list";
		
	}

}
