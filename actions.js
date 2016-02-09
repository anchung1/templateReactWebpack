/*
 * action types
 */
export const ADD_FILTER1 = 'ADD_FILTER1';
export const ADD_FILTER2 = 'ADD_FILTER2';


/*
 * other constants
 */
export const EntryType = {
    WINNING_ENTRY: 'WINNING_ENTRY',
    ROW_ENTRY: 'ROW_ENTRY'
};


/*
 * action creators
 */


export function addFilter1(text) {
    return {
        type: ADD_FILTER1,
        data: text
    };
}

export function addFilter2(text) {
    return {
        type: ADD_FILTER2,
        data: text
    }
}


//AJAX calls
class restAPI {
    constructor(url) {
        this._url = url;
    }

    getGreet() {
        var url = this._url + 'api/greet';
        $.get(url).then(
            function(data) {
                console.log(data);
            }
        )
    }

    getCookieID() {
        var baseUrl = this._url;
        var url = this._url + 'api/setCookie';
        $.get(url).then(
            function(data) {
                console.log(data);

            }
        ).always( () => {
            var url = this._url + 'api/getCookie';
            $.get(url).then(
                function(data) {
                    console.log(data);
                }
            );
        });

    }
}

let restUrl = 'https://localhost:3001/';
let restObj = new restAPI(restUrl);
export function ajax() {
    return restObj;
}


