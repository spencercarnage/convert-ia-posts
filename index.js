#! /usr/bin/env node
/*jshint asi:true, laxcomma:true*/

var fs = require('fs')
  , path = require('path')
  , program = require('commander')
  , YAML = require('yamljs')

program
  .version('0.0.0')
  .option('-s, --source [source]', 'specify directory to convert')
  .option('-o, --output [output]', 'specify directory to output converted contents to')
  .parse(process.argv)

if (!program.source || !program.output) {
  process.exit(0)
}

function getExtension(filename) {
  var ext = path.extname(filename||'').split('.');

  return ext[ext.length - 1];
}

if (!fs.existsSync(program.output)) {
  console.log('creating ' + program.output + ' directory')

  fs.mkdir(program.output, function (err) {
    convertFiles(program.source)
  })
} else {
  convertFiles(program.source)
}

function convertFiles(sourceDir) {
  fs.readdir(program.source, function (err, files) {
    if (err) throw err

    files.forEach(function (file, i) {
      fs.readFile(program.source + '/' + file, function (err, data) {
        if (err) throw err

        var fileString = new Buffer(data).toString()
          , closingYamlSearch = fileString.search(/\n= yaml =/)
          , htmlString
          , yamlObj
        
        // We'll use 100 as a good buffer of characters just in case there is
        // any strings before the opening yaml tags.
        if (closingYamlSearch > 100) {
          yamlObj = fileString.substr(0, closingYamlSearch).replace(/= yaml =/, '')//.replace(/\n/gm, '')
          htmlString = fileString.substr(closingYamlSearch + 10, fileString.length)

          fs.writeFile(program.output + '/' + file.replace('.md', '.json'), JSON.stringify({"yaml": YAML.parse(yamlObj), html: htmlString}), function (err) {
            if (err)  throw err;
          })
        }
      })
    })
  })
}
