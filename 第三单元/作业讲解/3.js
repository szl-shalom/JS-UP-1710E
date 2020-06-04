// （1）定义一个input标签，使用js获取节点
var a = document.querySelector("input")
// （2）设置input背景色为”#cccccc”边框为red
a.style.background = "#ccc"
a.style.border = "1px solid red"
		// （3）设置input的value为 “网站工程学院”
		a.value = "网站工程学院"
		// （4）文字颜色为白色 (#ffffff) 大小为24px
		a.style.color = "#fff"
		a.style.fontSize = "24px;"
		// （5）设置宽度300px,高度90px
		a.style.height = "90px"
		a.style.width = "300px"
// 功能2：  
// （1）定义一个div标签，使用js获取节点
var b = document.querySelector("div")
// （2）div中添加h2节点内容为“网站学院周考一”
b.innerHTML  = `<h2>网站学院周考一</h2>`
// （3）设置h2文本居中字号36px
var h2 = document.querySelector("h2")
h2.style.fontSize = "36px"
h2.style.textAlign = "center"
// （4）div中添加p节点内容为“好好学习，天天向上”，字号24px，字体加粗
	b.innerHTML +=`<p>好好学习，天天向上</p>`
	var p = b.querySelector("p")
	p.style.fontSize ="24px"
	p.style.fontWeight = "bold"
// （5）div中添加span节点内容为“快乐js，学习很快乐”，字号12px，字体斜体
	b.innerHTML +=`<span>快乐js，学习很快乐</span>`
	var span = b.querySelector("span")
	span.style.fontSize ="12px"
	span.style.fontStyle = "italic"
// （6）span标签添加边框，蓝色，1px
	span.style.border = "1px solid blue"








