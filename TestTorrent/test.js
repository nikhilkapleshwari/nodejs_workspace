const { search, checkIsUp, proxies } = require('piratebay-search')
 
search('nikki benz', {
  baseURL: 'https://thehiddenbay.com', // default https://thepiratebay.org
  page: 0, // default 0
  ordering: 'uploaded' // default 'seeders'. Options are 'default', 'uploaded', 'size', 'uploadedBy', 'seeders' and 'leechers'
}).then(console.log).catch(console.error);