import fs from 'fs';
import {filters} from './filters';
import {normalizeFilters} from './normalizeFilters';

export const showFilters = () => {
    const result = JSON.stringify(normalizeFilters(filters), null, 4);

    fs.writeFileSync('./app/output-filters.json', result);
};
