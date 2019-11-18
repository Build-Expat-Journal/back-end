require('dotenv').config();
const server = require('./api/server.js');


const {PORT} = process.env || 5000;

server.listen(PORT, () => console.log(`Running on Port ${PORT}`));
// 'https://test-expat-db.herokuapp.com/'