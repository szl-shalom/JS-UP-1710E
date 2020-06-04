	//（1）定义一个div标签，使用js设置获取class，然后设置宽100px高500px，
		var div = document.querySelector("div")  //获取DIV元素
		div.className = "class"
		var className = div.className 
		div.style.height = "500px"
		div.style.width = "100px"
		//（2）设置div背景色为”#efefef”
		div.style.backgroundColor = "#efefef"
		//（3）设置div内部p节点为 “老夫敲代码绝无bug”（此节点需要用b标签包裹）
		div.innerHTML = "<p> <b> 老夫敲代码绝无bug </b> </p>"
		//（4）文字颜色为白色 (#ffffff) 大小为24px 且居中 
		div.style.color = "#fff"
		div.style.fontSize = "24px"
		div.style.textAlign = "center"