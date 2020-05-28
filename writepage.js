const fs = require('fs');
const Yid = '1JLwBW2f9Ow';
const Page = require('./lib/writehtml.js')(Yid);
const FilePath = '/home/raylex/raylexlee.github.io/classicwow/naked60mage1pull11zg.html';
fs.writeFileSync(FilePath, Page);