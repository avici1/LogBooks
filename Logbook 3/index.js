function calculate(method) {
	const num = document.getElementById('number');
	let result = document.getElementById('result');
	switch (method) {
		case 0:
			const converted = (parseFloat(num.value)/8) * 5;
			result.innerText = `${num.value} KPH  is ${converted} MPH`;
		    break;
		case 1:
		   const converted1 = (parseFloat(num.value)/5) * 8;
		   result.innerText = `${num.value} MPH  is ${converted1} KPH`;
		   break;
		default:
		    result.innerText = `Operation not supported ${method}`;
	}
}