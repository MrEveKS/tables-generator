import express from 'express';
import path from 'path';
import { Logger } from './logger.middliware';
import { RandomTableValueService } from './services/random-table-value.service';

const dirPath = path.join(__dirname, '../src');
const app = express();
const port = 3000;
const logger = new Logger();
const jsonParser = express.json();

const callback = (): void => {
    console.log(`server is listening on ${port}`);
};

app.use(logger.getLogger());

app.get('/', (request, response) => {
    response.sendFile(dirPath + "/tables.html");
});
app.post("/tables", jsonParser, (request, response) => {
    const tableData = new RandomTableValueService();
    response.json(tableData.getTables());
});

app.listen(port, callback);