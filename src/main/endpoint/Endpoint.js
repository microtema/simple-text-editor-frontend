import _ from 'lodash';

class RestEndpoint {

    /**
     * Game REST API
     */
    createGame(id) {

        return fetch('/game/' + id, this.createRequestParameters()).then(response => {
            return response.json();
        });
    }


    /**
     * Game REST API
     */
    solveGame(id) {

        return fetch('/game/' + id + '/solve', this.createRequestParameters()).then(response => {
            return response.json();
        });
    }

    /**
     *
     * @param id may not be null
     * @param cell may not be null
     * @returns {Promise<Response | never>}
     */
    applyValue(id, cell) {

        return fetch('/game/' + id, this.createRequestParameters({
            body: JSON.stringify(cell),
            method: 'POST'
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