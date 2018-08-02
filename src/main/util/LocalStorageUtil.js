import _ from 'lodash';

class LocalStorageUtil {

    constructor(componentName) {

        this.compomentName = componentName;
    }

    get(propertyName) {

        return this.getOrDefault(propertyName, null);
    }

    getOrDefault(propertyName, defaultValue) {

        const name = this.getPropertyName(propertyName);

        let item = localStorage.getItem(name);

        if (!item) {

            return defaultValue;
        }

        return JSON.parse(item);
    }

    getState(defaultState) {

        const name = this.getPropertyName('state');

        let item = localStorage.getItem(name);

        if (!item) {

            return defaultState;
        }

        return JSON.parse(item);
    }

    setState(state) {

        const name = this.getPropertyName('state');

        localStorage.setItem(name, JSON.stringify(state));
    }

    getIntOrDefault(propertyName, defaultValue) {

        const name = this.getPropertyName(propertyName);
        const value = localStorage.getItem(name) || defaultValue;

        return parseInt(value, 0);
    }

    put(map) {

        _.forEach(map, (value, key) => {

            const name = this.getPropertyName(key);

            localStorage.setItem(name, JSON.stringify(value));
        });
    }

    getPropertyName(name) {

        return this.compomentName + '.' + name;
    }
}

export default LocalStorageUtil;