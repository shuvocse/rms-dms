package com.csinfotechbd.document;

import java.util.List;

import com.csinfotechbd.base.BaseService;

public interface DocService extends BaseService{
	
	public String saveFile(DocBearer bearer);

	public void getFile(long fileId);

	public Document getDocsById(int id);
	public Document getDocumentWithUser(int id);
	public List<Document> getAllDocument();

}
