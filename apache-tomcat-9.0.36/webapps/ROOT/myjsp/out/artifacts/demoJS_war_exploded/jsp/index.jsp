<%
	request.setCharacterEncoding("utf-8");
	String title = request.getParameter("title");
	String username = request.getParameter("username");
	String content = request.getParameter("content");
	response.setHeader("Content-Type", "application/json;charset=UTF-8");//注意加上这一句

	String result = "{\"title\":\""+title+"\",\"username\":\""+username+"\",\"content\":\""+content+"\"}";
	response.getWriter().print(result);
%>