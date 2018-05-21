package com.csinfotechbd.document;

import java.io.File;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

import org.apache.commons.io.FilenameUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class DocServiceImpl implements DocService{
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Value("${image.location}")
	private String IMAGE_DIRECTORY;

	
	@Autowired
	private AsyncFileService asyncService;
	
	@Autowired
	private DocDao docDao;

	@Override
	public <T> List<T> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <T> T getUniqueResult(T id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <T> boolean save(T object) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public <T> boolean update(T object) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public <T> boolean delete(T id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public String saveFile(DocBearer bearer) {
		MultipartFile file = bearer.getFile();
		String message = null;
		String generatedName = Generator.generateRandomIdWithSalt();
		String fileExt = FilenameUtils.getExtension(file.getOriginalFilename());
		// save image information only to database
		CompletableFuture<String> imageDb = asyncService.saveImageInfoToDb(bearer.getName(), generatedName, fileExt,
				file.getSize());
		@SuppressWarnings("unused")
		// save image file to system storage
		CompletableFuture<Void> imageStorage = asyncService.saveImageFileToStorage(file, generatedName, fileExt);
		try {
			// return in 2 second if the task fails in time
			return imageDb.get(2000, TimeUnit.MILLISECONDS);
		} catch (InterruptedException ie) {
			ie.printStackTrace();
		} catch (ExecutionException ee) {
			ee.printStackTrace();
		} catch (TimeoutException te) {
			te.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return message;
	}

	public Document getDocsById(int id) {
		return docDao.getDocsById(id);
	}


	public Document getDocumentWithUser(int id) {
		return docDao.findDocumentWithUser(id);
	}
	
	public List<Document> getAllDocument(){
		return docDao.getAllDocument();
	}
	@Override
	public void getFile(long fileId) {
		try{
			Document doc = docDao.findFileByFileId(fileId);
			String filePath = IMAGE_DIRECTORY+File.separator+doc.getUrl();
			//asyncService.getFileFromStorage("");
			System.out.println(filePath);
		}catch (Exception ex) {
			
		}
		
	}


}
