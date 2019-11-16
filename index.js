const server = require('./api/server.js');

const port = process.env.PORT || 5001;
server.listen(port, () => console.log(`Running on Port ${port}`));
