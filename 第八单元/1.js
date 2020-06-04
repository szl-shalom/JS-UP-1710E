//1、引入外部JS文件（8分）
// 2、规范化的JS语法结构（4分）
//3、合理的注释，中间的测试过程（8分）














//4、进入页面弹出alert对话框（8分）
var num = prompt("请输入1-5之间的数字")

//5、选择相应数字进入相应程序（8分）
switch(num){
    case "1":
		//6、选择1后可以显示对应选项 选择对应选项则显示对应颜色（8分）
		num = prompt("请选择：A 红色 B 绿色 C 黑色 D 粉色")
		switch(num){
			case "A":
				alert("红色");
				break
			case "B":
				alert("绿色");
				break
			case "C":
				alert("黑色");
				break
			case "D":
				alert("粉色");
				break
	
		}
		break
	case "2":
		//7、选择2后可以输入两次数字（8分）
		var num1 =prompt("请输入第一个数字")
		var num2 =prompt("请输入第二个数字")
		//8、计算选择数字的差值（8分）
		alert(num1-num2)
		break
	case "3":
	     //9、选择3后可以显示对应弹出框（8分）
		//10、可以输入3次汉字（8分）
		//11、记录所输入的汉字（8分）
		var w1 = prompt("请输入第一个汉字")
		var w2 = prompt("请输入第二个汉字")
		var w3 = prompt("请输入第三个汉字")
		//12、打乱输入汉字的顺序（8分）
		alert(`打乱后汉字顺序${w2} ${w3} ${w1} `)
		break
	case "4":
			alert("four")
		break
	case "5":
			alert("five")
		break
	default:
		//13、如果不在范围内则提示选项无效（8分）
		alert("选项无效")
		break

}