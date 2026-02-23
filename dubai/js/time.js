function showTime() { 
	var currentDate = new Date(); 
	var startDate = new Date(2018, 10, 04);
	var date3 = currentDate-startDate;
	var days=Math.floor(date3/(24*3600*1000));
	var leave1=date3%(24*3600*1000);     //计算天数后剩余的毫秒数
	var hours=Math.floor(leave1/(3600*1000));
	var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
	var minutes=Math.floor(leave2/(60*1000));
	var leave3=leave2%(60*1000);          //计算分钟数后剩余的毫秒数
	var seconds=Math.round(leave3/1000);
	if (minutes < 10) 
	minutes = "0" + minutes; 
	if (seconds < 10) 
	seconds = "0" + seconds; 



	   var date = new Date() //获取当前系统日期
            var y = date.getFullYear() //获取年
            var m = date.getMonth() + 1 //获取月
            var d = date.getDate() //获取日
            var h = date.getHours() //获取时
            var min = date.getMinutes() //获取分
            var s = date.getSeconds() //获取秒
           let str = `${y}-${m}-${d} ${h<10 ? '0'+h : h}:${min<10 ? '0'+min : min}:${s<10 ? '0'+s : s}`


	var currentTimeString = 
		//"元慧同学:<br>"
		//+ "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp生日快乐。<br> "
		//+ "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp天天开心。<br> "
		//+ "&nbsp&nbsp&nbsp&nbsp&nbsp"
		//+ "<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:35px\" >" + days +" </c>day " 
		//+ "<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:35px\" >" + hours+" </c>hour "
		//+"<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:35px\" >" + minutes+" </c>min "
		//+"<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:35px\" >" +seconds+" </c>sec<br>"
		//+ "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp只愿执子之手,与子偕老.<br>"
		//+ "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"
			"<c style=\" font-size:70px\" >"+str+"</c>"; 
	document.getElementById("show").innerHTML=currentTimeString;  //改这地方
	window.setTimeout("showTime()", 1000); 
} 
