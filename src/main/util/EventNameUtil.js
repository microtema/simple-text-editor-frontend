class EventNameUtil {

    constructor(componentName) {

        this.compomentName = componentName;

        this.events = {
            QUERY: this.event('QUERY'),
            STORE: this.event('STORE'),
            ADD: this.event('ADD'),
            REMOVE: this.event('REMOVE'),
            UPDATE: this.event('UPDATE'),
            READ: this.event('READ'),
            SELECT: this.event('SELECT')
        };
    }

    query() {

        return this.events.QUERY;
    }

    store() {

        return this.events.STORE;
    }

    add() {

        return this.events.ADD;
    }

    remove() {

        return this.events.REMOVE;
    }

    update() {

        return this.events.UPDATE;
    }

    read() {

        return this.events.READ;
    }

    select() {

        return this.events.SELECT;
    }

    event(event) {

        return this.compomentName + '.' + event;
    }
}

export default EventNameUtil;