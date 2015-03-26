/*
* Сообщение после отправки 3-х форм на главной + в шапке
* */
var MESSAGE_SUCCESS_1 = "Спасибо за заявку. <br>Менеджер свяжется с Вами в ближайшее время.";

/*
 * Сообщение после отправки формы со страницы "Напишите нам"
 * */
var MESSAGE_SUCCESS_2 = "Ваше сообщение отправлено. <br>Мы свяжемся с Вами вближайшее время.";



function smessage(str, reload){

	$().toasty({
		message: str,
		position: "tr",
		autoHide: 3000,
		afterDestroy: function(toastObject, eventObject) {
			if(reload){
				location.reload();
			}
		}
	});

	return true;
}
var hasError = false;
function state(obj, state){
	if(state){
		$(obj).removeClass("error");
		hasError = false;
	}else{
		$(obj).addClass("error");
		if(hasError == false){
			$(obj).focus();
			hasError = true;

		}
	}
	return true;
}

function validate(obj){
	var mode = $(obj).attr("data-validate");
	var val = $(obj).val();
	var require = false;
	if($(obj).hasClass("require"))
		require = true;

	if(val == ""){
		if(require){
			state(obj, false);
			return false;
		}
	}else{
		var regexp = "";
		if(mode == "isPhone"){
			if(val == ""){
				state(obj, false);
				return false;
			}else{
				state(obj, true);
				return val;
			}
		}else if(mode == "isString"){
			regexp=/[0-9a-zA-Zа-яА-Яії.,!-=]+/i;
			if(!regexp.test(val)){
				state(obj, false);
				return false;
			}else{
				state(obj, true);
				return val;
			}
		}else if(mode == "isDigit"){
			regexp=/[0-9]+/i;
			if(!regexp.test(val)){
				state(obj, false);
				return false;
			}else{
				state(obj, true);
				return val;
			}
		}else if(mode == "isEmail"){
			regexp=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;
			if(!regexp.test(val)){
				state(obj, false);
				return false;
			}else{
				state(obj, true);
				return val;
			}
		}

	}
	return false;
}


$(document).ready(function(){

	$("#send_form1").click(function(e){

		var email = validate($("#email_form1"));

		if(!hasError){

			$.ajax({
				url: 'mail/mail.php',
				type: 'POST',
				data: {
					"formid" : 1,
					"email"  : email
				},
				error: function(e){
					smessage(e, false);
				},
				success: function(retrn){
					if(retrn == "1")
						smessage(MESSAGE_SUCCESS_1, true);
					}
			});
		}else{
			smessage("Проверьте правильность заполнения полей", false);
		}

		e.preventDefault();
		return false;
	});


	$("#send_form2").click(function(e){

		var name = validate($("#name_form2"));
		var email = validate($("#mail_form2"));
		var city = $("#town-list").val();
		var message = validate($("#message_form2"));

		if(!hasError){
		
			$.ajax({
				url: 'mail/mail.php',
				type: 'POST',
				data: {
					"formid" : 2,
					"name" : name,							
					"email" : email,
					"city" : city,
					"message" : message
				},
				error: function(e){
					smessage(e, false);
				},
				success: function(retrn){
					if(retrn == "1")
					smessage(MESSAGE_SUCCESS_2, true);
				}
			});


		}else{
			smessage("Проверьте правильность заполнения полей", false);
		}

		e.preventDefault();
		return false;
	});

	
});