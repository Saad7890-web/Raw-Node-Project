const http = require('http');
const {handleReqRes} = require('./helper/handleReqRes');

const app = {};

app.config = {
    port: 3000,
};

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Server is listening on port ${app.config.port}`);
    })
};



app.createServer();