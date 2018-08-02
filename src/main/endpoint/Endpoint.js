import _ from 'lodash';

class RestEndpoint {

    /**
     * TextFile REST API
     */
    loadEntries() {

        return fetch('/texts/', this.createRequestParameters()).then(response => {
            return response.json();
        });
    }

    /**
     *
     * @param data may not be null
     * @returns {Promise<Response | never>}
     */
    saveChanges(data) {

        let method = data.id ? 'PUT' : 'POST';

        return fetch('/texts/', this.createRequestParameters({
            body: JSON.stringify(data),
            method: method
        })).then(response => {
            return response.json();
        });
    }

    createRequestParameters(params) {

        let options = {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            cache: 'no-cache'
        };

        _.merge(options, params || {});

        return options;
    }
}

export default new RestEndpoint();