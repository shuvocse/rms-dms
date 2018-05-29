package com.csinfotechbd.document;

import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.csinfotechbd.users.User;
import com.csinfotechbd.users.UserService;

@Controller
@RequestMapping("/doc")
public class DocController {
	@Autowired
	private DocService docService;
	@Autowired
	private UserService userService;

	@GetMapping("/form")
	public String getDocUploadForm() {
		return "doc/upload-form";
	}

	@PostMapping("/upload")
	public String getUploadedDoc(DocBearer bearer) {
		if (bearer != null) {
			docService.saveFile(bearer);
		}
		return "/doc/upload-form";
	}
	
	@GetMapping("/addRolePer/{id}")
	public String addRolePermission(@PathVariable String id){
		return "/doc/add-role-perm";
	}

	@GetMapping("/addUserPer/{id}")
	public String addUserPermission(Model model, @PathVariable String id, HttpSession session, Principal principal) {
		Document doc = docService.getDocumentWithUser(Integer.parseInt(id));
		System.err.println(doc.getUsers().size());
		HashMap<Integer, String> u = new HashMap<>();
		for (User user : doc.getUsers()) {
			u.put(user.getUserId(), user.getUserId().toString());
		}

		DocUserDto docUserDto = new DocUserDto();
		Document docs = docService.getDocsById(Integer.parseInt(id));
		docUserDto.setDocId(docs.getDocId());
		docUserDto.setName(docs.getName());
		docUserDto.setUserId(u);

		HashMap<Integer, String> userDoc = new HashMap<>();
		for (User user : doc.getUsers()) {
			userDoc.put(user.getUserId(), user.getUserId().toString());
		}
		System.err.println(docUserDto.toString());
		model.addAttribute("userDoc", userDoc);
		model.addAttribute("docUserDto", docUserDto);
		model.addAttribute("user", userService.findAllUser());

		return "/doc/add-user-perm";
	}

	@PostMapping("/addUserPer")
	public String savePermission(DocUserDto docUserDto, Principal principal) {
		List<User> user = new ArrayList<>();
		Iterator iterator = docUserDto.getUserId().entrySet().iterator();
		while (iterator.hasNext()) {
			Map.Entry entry = (Map.Entry) iterator.next();
			if (entry.getValue() != null) {
				user.add(userService.findById(Integer.parseInt((String) entry.getValue())));

			}
			iterator.remove();
		}

		System.err.println(docUserDto.getUserId());
		Document docs = docService.getDocsById(docUserDto.getDocId());
		docs.setUsers(user);
		docService.updateDoc(docs);
		return "redirect:/doc/list";
	}

	@GetMapping("/list")
	public String getAllDocument(Model model) {
		model.addAttribute("docList", docService.getAllDocument());
		model.addAttribute("permission", userService.getPermissions());
		return "/doc/doc-list";
	}

    @GetMapping("/view/{fileId}")
	public String view(Model model, @PathVariable(name = "fileId") int fileId, Principal principal) {
		Document doc = docService.getDocsById(fileId);
		model.addAttribute("doc", doc);
		return "/doc/doc-view";
	}


	@GetMapping("/download/{fileId}")
	@ResponseBody
	public ResponseEntity<byte[]> download(@PathVariable(name = "fileId") int fileId, Principal principal) {
		byte[] file = docService.getFile(fileId);
		Document doc = docService.getDocsById(fileId);
		HttpHeaders headers = new HttpHeaders();
	    headers.setContentType(MediaType.parseMediaType("application/pdf"));
	    String filename = doc.getName()+"."+doc.getType();
	    headers.setContentDispositionFormData(filename, filename);
	    headers.setCacheControl("must-revalidate, post-check=0, pre-check=0");
		return new ResponseEntity<byte[]>(file, headers, HttpStatus.OK);
	}

	@GetMapping("/print/{fileId}")
	@ResponseBody
	public ResponseEntity<byte[]> print(@PathVariable(name = "fileId") int fileId, Principal principal) {
		byte[] file = docService.getFile(fileId);
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.parseMediaType("application/pdf"));
		String filename = "output.pdf";
		headers.setContentDispositionFormData(filename, filename);
		headers.setCacheControl("must-revalidate, post-check=0, pre-check=0");
		return new ResponseEntity<byte[]>(file, headers, HttpStatus.OK);
	}

}
