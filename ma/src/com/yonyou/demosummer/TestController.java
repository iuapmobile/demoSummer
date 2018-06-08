package com.yonyou.demosummer;

import org.json.JSONObject;

public class TestController {
	public String getData(String args) throws Exception {
		JSONObject json = new JSONObject(args);
		JSONObject jsonResult = new JSONObject();
		jsonResult.put("status", 1);
		jsonResult.put("msg", "hello，" + json.optString("username"));

		return jsonResult.toString();

	}

}