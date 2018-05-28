// JavaScript Document

$(document).ready(function (e){
	document .addEventListener("deviceready",function(){
		$('#disp table td').eq(3).text(device.model);
		$('#disp table td').eq(5).text(device.cordova);
		$('#disp table td').eq(7).text(device.platform);
		$('#disp table td').eq(9).text(device.version);
		$('#disp table td').eq(11).text(device.uuid);
	document.addEventListener("pause",function(){
		escribehistoria ('La app se pausó');
	},false);//pause
	document.addEventListener("resume",function(){
		escribehistoria ('La app se reinicio');
	},false);//resume
	document.addEventListener("online",function(){
		escribehistoria ('La app se conecto a la red');
	},false);//se conecto
	document.addEventListener("offline",function(){
		escribehistoria ('La app se desconecto de la red');
	},false);//se desconecto
	
	
	},false);//ready device
	
	
});//document

function escribehistoria(accion){
	$('#eHistoria').append('<li>'+accion+'</li');
}

$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('#beep').tap(function(){
			navigator.notification.beep(2);
		}); // Cierre del tap de beep
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(2000);
		}); // Cierre del tap de vibrar
  }, false); // Cierre de EventListener
}); // Cierre de la funcion principal

$(document).ready(function(e) {
    document.addEventListener("deviceready", function(){
		$('#izquierda').on("swipeleft",function(){
			navigator.notification.alert("Deslizó a la izquierda",function(){"aplicacion7","Aceptar"});	
         });//cierre deslizar izquierda
		 $('#derecha').on("swiperight",function(){
			 navigator.notification.confirm("¿Que quieres hacer?",function(opt){
				 switch(opt)
				 {
					 case 1:
					 navigator.notification.beep(2);
					 break;
					 
					 case 2:
					 navigator.notification.vibrate(2000);
					 break;
				 }
			 },"aplicacion7","Beepear,Vibrar,Cancelar");
		 });//cierre del deslizar derecha
	},false);//cierre del deviceready
});//Cierre del document principal