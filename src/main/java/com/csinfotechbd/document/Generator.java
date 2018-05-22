package com.csinfotechbd.document;

import java.util.Random;
import java.util.UUID;

public class Generator {

	private static final char[] alphabet = { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
			'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' };

	public static String generateRandomIdWithSalt() {
		Random rand = new Random();
		StringBuilder builder = new StringBuilder(UUID.randomUUID().toString());
		for (int i = 0, j = 8; i < 4; i++) {
			builder.setCharAt(j, alphabet[rand.nextInt(26)]);
			j += 5;
		}
		return builder.toString();
	}
}
