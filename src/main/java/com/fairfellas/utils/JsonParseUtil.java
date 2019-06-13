package com.fairfellas.utils;

import java.io.IOException;
import java.io.InputStream;

import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonParseUtil {
	private static ObjectMapper om = new ObjectMapper();
	
	public static <T> T parseJsonInput(InputStream stream, Class<T> type, HttpServletResponse resp)
			throws IOException{
		T t = null;
		try {
			t = om.readValue(stream, type);
		} catch(JsonProcessingException e) {
			resp.sendError(HttpServletResponse.SC_BAD_REQUEST);
		}
		return t;
	}
}
