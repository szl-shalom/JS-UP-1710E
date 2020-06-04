


// 数据类型类型转换

// 转数字
// Number : 是整数和浮点数
// 特殊的数字NaN (Not a Number): 表示想要得到一个数字的结果，但是结果不是数字 

	// console.log(NaN + 1) //NaN

	// console.log(NaN == NaN)  //false
	// console.log(NaN == undefined) //false
	// console.log(NaN == null) //false
	
	//针对NaN 六亲不认 怎么检测？
	//isNaN 会发生隐式类型转换
	var flag = isNaN(null)
	console.log(flag)  //false
	
	
	//Number转换规则 是数字转化成为数字 不是转化为NaN
	// console.log(Number("123a"))
	
	//特殊的转化
	// console.log(Number(true))  //1
	// console.log(Number(false)) //0
	// console.log(Number(undefined)) //NaN
	// console.log(Number(null)) //0
	// console.log(Number("")) //0
	
	

// 转布尔

// 转字符串

