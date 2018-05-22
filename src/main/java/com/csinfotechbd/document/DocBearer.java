package com.csinfotechbd.document;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class DocBearer {
	private String name;
	private String category;
	private MultipartFile file;
}
