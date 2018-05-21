package com.csinfotechbd.document;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.UUID;
import java.util.concurrent.CompletableFuture;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.csinfotechbd.document.category.DocCategory;

@Component
public class AsyncFileService {

	@Value("${image.location}")
	private String IMAGE_DIRECTORY;

	@Autowired
	private DocDao docRepository;

	@Autowired
	private FileSaver imageSaver;

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Async
	public CompletableFuture<byte[]> pullImageFromSystemFolder(String filePath) {
		return CompletableFuture.completedFuture(getFileFromStorage(filePath));
	}

	public byte[] getFileFromStorage(String filePath) {
		logger.debug("Thread of Image service is called with file path : " + filePath);
		File file;
		FileInputStream fileInputStream;
		byte[] b = null;
		try {
			file = new File(filePath);
			if (file.exists()) {
				logger.debug("File name : " + file.getName());
				b = new byte[(int) file.length()];
				fileInputStream = new FileInputStream(file);
				fileInputStream.read(b);
				fileInputStream.close();
				logger.debug("Input stream is close");
			} else
				throw new FileNotFoundException("File not found");

		} catch (FileNotFoundException fe) {
			fe.printStackTrace();
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return b;
	}

	@Async
	public CompletableFuture<String> saveImageInfoToDb(String imageName, String generatedName, String ext,long size) {
		Document doc = new Document(null, imageName, ext, size,UUID.randomUUID().toString(), IMAGE_DIRECTORY+File.separator, new DocCategory(1));
		doc.setCreatedBy("Emon");
		docRepository.saveToDb(new Document(null, imageName, ext, size,UUID.randomUUID().toString(), IMAGE_DIRECTORY+File.separator, new DocCategory(1)));
		return CompletableFuture.completedFuture("images" + File.separator + generatedName);
	}

	@Async
	public CompletableFuture<Void> saveImageFileToStorage(MultipartFile file, String generatedName, String ext) {
		imageSaver.saveImageToFolder(file, generatedName, ext);
		return null;
	}
}
