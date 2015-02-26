var fs = require('fs');
var split = require('split');
var out = []
fs.createReadStream('all_crime.csv', {flags: 'r',encoding:'utf8'}).pipe(split()).on('data', function(line){
	out.push(line.split(','))
}).on('close', function(){console.log(JSON.stringify(out))})
