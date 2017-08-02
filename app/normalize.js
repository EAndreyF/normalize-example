import {normalize as defaultNormalizr} from 'normalizr';
import {eventsSchema} from './eventsSchema';

export const normalize = events => {
    return defaultNormalizr(events, eventsSchema);
};
