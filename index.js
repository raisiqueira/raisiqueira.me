// imports
const { createServer } = require('http');
const next = require('next');

// verify the node enviroment
const dev = (process.env.NODE_ENV || '').startsWith('dev');
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(handle).listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
