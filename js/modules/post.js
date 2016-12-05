import {API} from './API.js';
var Post={
	findAll(){

        return API.fetch("posts");

    }
}

export {Post};