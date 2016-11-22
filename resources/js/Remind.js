class Reminder{

	constructor(msg,time){
		this.msg=msg;
		this.time=time;
	}

	saveReminder(){

	}

	displayReminder(){
		console.log(this.time+" : "+this.msg);
	}
}

export {Reminder}