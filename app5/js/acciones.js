// JavaScript Document
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