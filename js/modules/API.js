import {jsonServerURL} from './constants.js'

var API={
    fetch(param){

        return new Promise((resolve,reject)=>{

        $.ajax({
        url: jsonServerURL+param,
        type: 'GET',
        success: (res)=>{
            resolve(res)
        },
        error:(err)=>{
                reject(err);
        }

        });

      });
    }
};

export {API};