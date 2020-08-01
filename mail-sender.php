<?php

  $destino= "Maycolponce21@gmail.com";
  $Nombre= $_POST["nombre"];
  $Email= $_POST["email"];
  $Mensaje= $_POST["mensaje"];

  $contenido = "Nombre: " . $Nombre . "\nCorreo: ". $Email . "\nMensaje: ". $Mensaje;
  mail ($destino, "Contacto", $contenido);
  header("Location:index-1.html");
 ?>
