import {schema} from 'normalizr';

const citySchema = new schema.Entity('city');
const teamSchema = new schema.Entity('team');
const stadiumSchema = new schema.Entity('stadium');
const groupSchema = new schema.Entity('group');

const eventSchema = new schema.Entity('event', {
    city: citySchema,
    team0: teamSchema,
    team1: teamSchema,
    stadium: stadiumSchema,
    group: groupSchema,
});

export const eventsSchema = [eventSchema];
