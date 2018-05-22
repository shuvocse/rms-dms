package com.csinfotechbd.document;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class FileSaver {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Value("${image.location}")
	private String IMAGE_DIRECTORY;

	public void saveImageToFolder(MultipartFile file, String generatedName, String ext) {

		String folder = IMAGE_DIRECTORY + File.separator;
		try {
			Path path = Paths.get(folder + generatedName + "." + ext);
			Files.write(path, file.getBytes(), StandardOpenOption.CREATE_NEW);
		} catch (IOException ioex) {
			ioex.printStackTrace();
		}

	}

}
