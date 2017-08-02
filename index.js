import express from 'express';
import normalizeEvents from './app/show';

const app = express();

app.use(express.static('app'));

app.listen(3000, function () {
    normalizeEvents();
    console.log('Example app listening on port 3000!');
});
