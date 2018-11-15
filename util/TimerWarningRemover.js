import {YellowBox} from 'react-native';
import _ from 'lodash';

//TODO find a solution to this warning
export default () => {
    YellowBox.ignoreWarnings(['Setting a timer']);
    const _console = _.clone(console);

    // eslint-disable-next-line no-console
    console.warn = message => {
        if (message.indexOf('Setting a timer') <= -1) {
            _console.warn(message);
        }
    };
}
