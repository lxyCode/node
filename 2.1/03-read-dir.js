var fs = require('fs')

fs.readdir('./www',function(err,files){
	if(err){
		return res.end('error')
	}

	console.log(files)
})