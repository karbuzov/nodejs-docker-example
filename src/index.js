import "@babel/polyfill";
// import dotenv from 'dotenv';
import http from 'http';
import debug from 'debug';
import app from './app';

// dotenv.config();

const server = http.createServer(app);

app.listen(process.env.PORT);
app.on('error', onError);
app.on('listening', onListening);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('server-auth:server')('Listening on ' + bind);
  console.log(`App listening on port ${process.env.PORT}!`)
}