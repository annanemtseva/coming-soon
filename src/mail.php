<?php

function debug_log( $data ) {
  if(!defined('STDOUT')) define('STDOUT', fopen('php://stdout', 'w')); 
  fwrite(STDOUT, "DEBUG ==> " . $data . PHP_EOL);    
}

$result = false;

if ( $_POST ) {
  $mail_to = "artnation@artnationbrands.com";
  
  if ( $_POST["email"] ) {
    $email = $_POST["email"];
    debug_log("Request contain field 'email': " . $email);
    

    if (isset($email)) {
      // получатель
      $to  = $mail_to;

      // тема письма
      $subject = 'Letter from site';

      // текст письма
      $message = "        
      <div>E-MAIL: $email</div>
      ";

      // Для отправки HTML-письма должен быть установлен заголовок Content-type
      $headers  = 'MIME-Version: 1.0' . "\r\n";
      $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
      
      // Отправляем
      $mail = mail($to, $subject, $message, $headers);
      if ( $mail ) {
        http_response_code(201);
        $result = true;
      } else {
        http_response_code(500);
      }
    }

    $response=array(
      'status' => 201,
      'status_message' =>'Subscribe Added Successfully.'
    );
    debug_log('Subscribe Added Successfully.');
  } else {
    http_response_code(400);
    error_log("Request does not contain field 'email'!");
    $response=array(
      'status' => 0,
      'status_message' =>'Subscribe Addition Failed.'
    );
  }
}


header('Content-Type: application/json');
echo json_encode($response);



?>
