	//��1������һ��div��ǩ��ʹ��js���û�ȡclass��Ȼ�����ÿ�100px��500px��
		var div = document.querySelector("div")  //��ȡDIVԪ��
		div.className = "class"
		var className = div.className 
		div.style.height = "500px"
		div.style.width = "100px"
		//��2������div����ɫΪ��#efefef��
		div.style.backgroundColor = "#efefef"
		//��3������div�ڲ�p�ڵ�Ϊ ���Ϸ��ô������bug�����˽ڵ���Ҫ��b��ǩ������
		div.innerHTML = "<p> <b> �Ϸ��ô������bug </b> </p>"
		//��4��������ɫΪ��ɫ (#ffffff) ��СΪ24px �Ҿ��� 
		div.style.color = "#fff"
		div.style.fontSize = "24px"
		div.style.textAlign = "center"