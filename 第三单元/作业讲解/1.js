//      （1）定义一个p标签，使用js设置class，然后设置宽100px高100px，
		var p = document.querySelector("p")  //获取p标签
		p.className = "class"  //设置类名
		p.style.height = "100px" // 设置行内样式 高度
		p.style.width = "100px" // 设置行内样式 宽度
		// （2）设置p背景色为”#222222” 
		p.style.backgroundColor = "#222222"
		// （3）设置p内部节点为 “老子js天下无敌”（此节点需要用b标签包裹）
		p.innerHTML = "<b>老子js天下无敌</b>"
		// （4）文字颜色为白色 (#ffffff) 大小为24px 且居中 
		p.style.color = "#ffffff"
		p.style.fontSize = "24px"
		p.style.textAlign = "center"