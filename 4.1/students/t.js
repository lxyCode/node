var b = 1
function outer(){
	var b = 2
	function inner(){
		var d = b++
		var b =3;
		console.log(b)
	}

	inner()
}

outer()