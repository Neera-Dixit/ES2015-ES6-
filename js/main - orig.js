import {Car} from './modules'

$(document).ready(function(){

	let carList=new Set();

	$("#cardata").on('click',()=>{
		let CarName=$("input[name='carname']").val();
		let carColor=$("input[name='carcolor']").val();
		let carPrice=$("input[name='carprice']").val();
		let car=new Car(CarName,carColor,carPrice);

		if(!carList.has(car)){
			carList.add(car);
		}
		
		//console.log(car.name+" : "+car.color+ " : "+car.price);
		
	});

	$("#dispCars").on('click',()=>{
		console.clear();
		$("#disparea").children().remove();
		for(let car of carList){
			console.log(car.name+" : "+car.color+ " : "+car.price);
			$("#disparea").append("<div>"+car.name+","+car.color+","+car.price+"</div>");
		}
	});

});