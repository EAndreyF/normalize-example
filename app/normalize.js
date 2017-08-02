export const normalize = events => {
    const result = {
        eventsOrder: [],
        collections: {
            events: {}
        }
    };

    events.forEach(event => {
        const id = event.id;
        result.collections.events[id] = event;
        result.eventsOrder.push(id);
    });

    return result;
};
