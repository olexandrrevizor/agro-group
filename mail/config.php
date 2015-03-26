<?php
/**
 * Created by PhpStorm.
 * User: VovanMS
 * Date: 13.01.15
 * Time: 16:22
 * Description: Конфігураційний файл
 */

/*
 * Мы имеем 2 формы. Каждая форма имеет свой индекс.
 * Каждой форме - по ее индексу создается нужный набор данных (адрес доставки и т д.)
 * Для указания несколько адресов получателей необходимо разделить их запятой.
 * Запятой в конце не нужно. Например: "to" => "abc@outlook.com, cdb@gmail.com" и так далее
 * Список индексов в соответствии с формами
 * 1 - форма "Подписка на обновления"
 * 2 - форма "Страница Контакты"
 * */

$config = Array(
	1 => Array(

		//Адрес получателя/ей
		"to" => "news@agro-group.net",

		//Тема письма
		"subject" => "Подписка на обновления и новости",

		//Agro Group (news@agro-group.net)
		"from_name" => "Agro Group",

		//Адрес отправителя
		"from_mail" => "news@agro-group.net"
	),
	2 => Array(
		"to" => "info@agro-group.net",
		"subject" => "Сообщение с сайта",
		"from_name" => "Agro Group",
		"from_mail" => "news@agro-group.net"
	)
);
