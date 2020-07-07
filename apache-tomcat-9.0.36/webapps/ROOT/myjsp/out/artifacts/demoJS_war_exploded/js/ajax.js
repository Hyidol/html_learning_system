$(function(){
	$("#button").click(function(){
		$.ajax({
			tpye:"post",
			url:"jsp/index.jsp",
			data:$("#form1").serialize(),
			dataType:"json",
			success : function(data,textStatus) {
				var $div_1 = $("<div class='dcon'></div>");
				$div_1.append("标题："+data.title+"<br />用户名："+data.username+"<br/>留言内容："+data.content);
				$("#ddiv").prepend($div_1);
			},
			error : function(data,textStatus){
				console.log("error");
			}
		});
		$("#ajaxpage #username").val("");
		$("#ajaxpage #ajaxtitle").val("");
		$("#ajaxpage #content").val("");
	});
});