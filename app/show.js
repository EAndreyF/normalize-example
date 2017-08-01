import {events} from './events';
import {normalize} from './normalize';

export default () => {
    const result = JSON.stringify(normalize(events), null, 4);

    fs.writeFile('output.json', result);
}
