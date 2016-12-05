import {Post} from './modules/post.js';
import {ui} from './modules/ui.js';
import {User} from './modules/user.js';
Post.findAll()
	.then(ui.renderPosts)
	.catch((error)=>console.log(error));

User.findRecent()
	.then(ui.renderUsers)
	.catch((error)=>console.log(error));