<?php
$nome = $_POST['nome'];
$endereco = $_POST['end'];
$cidade = $_POST['cidade'];
$uf = $_POST['uf'];
$tel = $_POST['tel'];
$cel = $_POST['cel'];
$email = $_POST['email'];
$profissao = $_POST['prof'];
$rg = $_POST['rg'];
$cnh = $_POST['cnh'];
$cpf = $_POST['cpf'];
$titulo = $_POST['titulo'];
$passaporte = $_POST['passaporte'];
$motivo = $_POST['option'];


echo "Nome: ".$nome."</br>";
echo "Endereço: ".$endereco."</br>";
echo "Cidade: ".$cidade."</br>";
echo "UF: ".$uf."</br>";
echo "Telefone: ".$tel."</br>";
echo "Celular: ".$cel."</br>";
echo "Email: ".$email."</br>";
echo "Profissão: ".$profissao."</br>";
echo "RG: ".$rg."</br>";
echo "CNH: ".$cnh."</br>";
echo "CPF: ".$cpf."</br>";
echo "Titulo de Eleitor: ".$titulo."</br>";
echo "Passaporte: ".$passaporte."</br>";
echo "Motivo: ".$motivo."</br>";