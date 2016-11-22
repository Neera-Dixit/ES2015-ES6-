import {Reminder} from './Remind';

$(document).ready(function(){

let remindInputText,
 	rem,
 	remindtext,
 	date,
 	storedData=new Set();

 $("#remindbtn").on('click',()=>{
 	remindInputText=$("#remindText").val();
 	rem=new Reminder(remindInputText,date);
 	remindtext=`<div>"${rem.msg}" ,create on ${rem.time}</div>`;
 	date=new Date($.now());
 	storedData.add(remindtext);

 	if(remindText!==""){
 		$("#reminderSec").append(remindtext);
 	}
 	else{
 		console.log("No reminder");
 	}
 	
 });


$("#displayrems").on('click',()=>{

	for(let msg of storedData){
		console.log(msg);
	}
});


});