import express from 'express';
import {showFilters} from './app/show';

const app = express();

app.use(express.static('app'));

app.listen(3000, function () {
    showFilters();
    console.log('Example app listening on port 3000!');
});
