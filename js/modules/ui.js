import xss from 'xss-filters';

var ui={

	renderPosts(posts){

		let postData=posts.map((post)=>{
			let {title,lastReply}=post;
			return commentTemplate(title,lastReply);
		});

		let postSelec=document.querySelector("#posts");
		postSelec.innerHTML=postData.join("");

	},

	renderUsers(users){

		let userData=users.map((user)=>{
			let {name,avatar}=user;
			return userTemplate(name,avatar);
		});

		let userSelec=document.querySelector("#users");
		userSelec.innerHTML=userData.join("");
	}
};

function commentTemplate(title,time){
	let safeTitle=xss.inHTMLData(title);
	let safeTime=xss.inHTMLData(time);
		   return  `<div>
					<div>Post : ${safeTitle}</div>
					<div>${safeTime}</div>
					</div><br/>`;
}

function userTemplate(user,image){
	let safeUser=xss.inHTMLData(user);
	let safeImg=xss.inHTMLData(image);
		   return  `<div>
					<div>${safeUser}</div>
					</div><br/>`;
}

export {ui};