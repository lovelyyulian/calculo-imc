alert(' Olá, obrigado por acessar o meu site. Cálculo de IMC é um dos meus primeiros projetos utilizando o JavaScript.\n É algo bem simples, mas como estou iniciando nisso eu fico muito feliz em compartilhá-lo por aqui.\n\n Caso haja qualquer dúvida ou sugestão o usuário poderá me contatar pelo Instagram: @moldybisciuts1904.');
function calcular() {
  document.getElementById("altura").style.borderColor = "white";
  document.getElementById("altura").style.backgroundColor = 'transparent';
  document.getElementById("peso").style.borderColor = "white";
  document.getElementById("peso").style.backgroundColor = "transparent";
  
  if (document.getElementById('peso').value == '') {
    alert('Preencha o peso.');
    document.getElementById('peso').style.borderColor='red';
    document.getElementById('peso').style.brackgroundColor='pink';
    document.getElementById('peso').focus();
    return false;
  }
  if (document.getElementById("altura").value == ""){
    alert('Preencha a altura.');
    document.getElementById('altura').style.borderColor='red';
    document.getElementById('altura').style.brackgroundColor='pink';
    document.getElementById('altura').focus();
    return false;
  }
  document.getElementById('resultados').innerHTML=('');
  var peso = parseFloat(document.getElementById('peso').value);
  var altura = parseFloat(document.getElementById('altura').value);
  var resultado = peso/(altura*altura);
  document.getElementById('resultados').innerHTML=('Seu IMC é:<br>' + resultado);
  document.getElementById("results").style.left = '0';
  document.getElementById('form').style.right='250px';
  return true;
}
function voltar() {
  document.getElementById("results").style.left = '300px';
  document.getElementById('form').style.right='0';
  
  document.getElementById('peso').value='';
  document.getElementById('altura').value='';
  return true;
}
