import { SERVER } from './constants.js';

export function isNullOrEmpty(value){
    if(value){
        return value.trim() == '';
    } else {
        return true;
    }
}

export function apiPostCall(options){
    var formData = new FormData();
    for(var param of options.params){
        formData.append(param.key, param.value);
    }
    var url = SERVER + options.url;
    fetch(url, {
        method: 'POST',
        body: formData
    }).then(function(response) {
         return response.json();
    }).then(function(responseJSON) {
        options.success(responseJSON);
    }).catch(function(exception){
        options.failure(exception);
    });
}