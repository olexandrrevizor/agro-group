<?php
/**
 * Created by PhpStorm.
 * User: VovanMS
 * Date: 13.01.15
 * Time: 17:09
 * Description: Обробник данних для повідомлень
 */

require_once('config.php');
require_once('libs.php');

/* Get captcha image
 * <img src="/captcha/captcha.php" id="cap" alt="" width="148"><br>
 * <a href="" onClick="$('#cap').attr('src','/captcha/captcha.php?1='+Math.random());return false;">обновить</a>
 * */


	if(isset($_POST['formid'])){

		//get form id
		$form_id = 0;
		if(trim($_POST['formid']) != ''){
			$form_id = intval(trim($_POST['formid']));
		}

		switch($form_id){
			case 1:
				send_form_1();
				break;
			case 2:
				send_form_2();
				break;
			default:
				break;
		}


	}


function send_form_1(){

	GLOBAL $config;

	$email = "";
	if(trim($_POST['email']) != ''){
		$email = trim($_POST['email']);
	}

	$mail = new multi_mail();

	$mail->set_subject($config[1]["subject"]);
	$mail->set_to($config[1]["to"]);
	$mail->set_from($config[1]["from_mail"]);
	$mail->set_from_name($config[1]["from_name"]);
	$mail->write_body("<h1>Подписка на обновления</h1>");
	$mail->write_body("<p>Мой адрес <b>" . $email . "</b></p>");
	echo $mail->send();
	exit;
}

function send_form_2(){

	GLOBAL $config;
	$mail = new multi_mail();

	$mail->set_subject($config[1]["subject"]);
	$mail->set_to($config[1]["to"]);
	$mail->set_from($config[1]["from_mail"]);
	$mail->set_from_name($config[1]["from_name"]);
	$mail->write_body("<h1>Сообщение с сайта</h1>");


	$name = "<b>Имя:</b> ";
	if(trim($_POST['name']) != ''){
		$name .= trim($_POST['name']);
	}else{
		$name .= "не указано";
	}
	$name  .= "<br>";
	$mail->write_body($name);
	
	$city = "<b>Город:</b> ";
	if(trim($_POST['city']) != ''){
		$city .= trim($_POST['city']);
	}
	$city  .= "<br>";
	$mail->write_body($city);

	$email = "<b>E-mail:</b> ";
	if(trim($_POST['email']) != ''){
		$email .= trim($_POST['email']);
	}
	$email  .= "<br>";
	$mail->write_body($email);

	$message = "<b>Сообщение:</b><br><p>";
	if(trim($_POST['message']) != ''){
		$message .= trim($_POST['message']);
	}else{
		$message .= "не указано";
	}
	$message  .= "</p><br>";
	$mail->write_body($message);

	echo $mail->send();
	exit;

}
