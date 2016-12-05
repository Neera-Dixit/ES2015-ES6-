import {API} from './API.js';

var User={
	findRecent(){

		return API.fetch("users");
	}
};

export {User};