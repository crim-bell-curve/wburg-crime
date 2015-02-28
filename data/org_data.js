var fs = require('fs');
var split = require('split');
var out = []
fs.createReadStream('all_crime.csv', {flags: 'r',encoding:'utf8'}).pipe(split()).on('data', function(line) {
	var entry = line.split(',')
	entry[5] = entry[5] ? Number(entry[5]) : ''
	out.push(entry)
}).on('close', function(){console.log(JSON.stringify(out))})
