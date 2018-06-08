summerready = function() {

}
function getMaData() {
	alert("开始调用ma");
	summer.writeConfig({
		"host" : "172.25.208.1", //MA主机地址
		"port" : "8080"//MA主机端口
	});
	summer.callAction({
		"appid" : "demoSummer", //应用ID
		"viewid" : "com.yonyou.demosummer.TestController", //后台带包名的Controller名
		"action" : "getData", //方法名
		"params" : {
			"username" : "张三"
		}, //自定义参数
		"callback" : function(args) {
			//请求回来后执行的js方法
			alert(JSON.stringify(args));
		},
		"error" : function(args) {
			//失败后执行的js方法
			alert("fail");
			alert(JSON.stringify(args));
		}
	});
}