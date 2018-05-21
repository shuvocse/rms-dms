package com.csinfotechbd.document;

import java.util.HashMap;

import lombok.Getter;
import lombok.Setter;

public class DocUserDto {
	@Getter
	@Setter
	private Integer docId;
	@Getter
	@Setter
	private String name;
	@Getter
	@Setter
	private HashMap<Integer, String> userId;
	@Override
	public String toString() {
		return "DocUserDto [docId=" + docId + ", name=" + name + ", userId=" + userId + "]";
	}
	
	

}
