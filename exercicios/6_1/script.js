window.onload=function(){
    let estadosBrasil=['Acre (AC)','Alagoas (AL)','Amapá (AP)','Amazonas (AM)','Bahia (BA)','Ceará (CE)','Distrito Federal (DF)','Espírito Santo (ES)','Goiás (GO)','Maranhão (MA)','Mato Grosso (MT)','Mato Grosso do Sul (MS)','Minas Gerais (MG)','Pará (PA)','Paraíba (PB)','Paraná (PR)','Pernambuco (PE)','Piauí (PI)','Rio de Janeiro (RJ)','Rio Grande do Norte (RN)','Rio Grande do Sul (RS)','Rondônia (RO)','Roraima(RR)','Santa Catarina (SC)','São Paulo (SP)','Sergipe (SE)','Tocantins (TO)'];
let listaDeEstados=document.getElementById('estados');
let enviar=document.getElementById('botao-enviar');

for (let i=0; i<estadosBrasil.length; i+=1){
    let estado=document.createElement('option');
    estado.innerText=estadosBrasil[i];
    console.logf
    listaDeEstados.appendChild(estado);
}

enviar.addEventListener('click',function(){
    let capturar = document.forms['formulario']['nome'].value + '<br>';
    capturar += document.forms['formulario']['email'].value + '<br>';
    capturar += document.forms['formulario']['cpf'].value + '<br>';
    capturar += document.forms['formulario']['endereco'].value + '<br>';
    capturar += document.forms['formulario']['cidade'].value + '<br>';
    capturar += document.forms['formulario']['estados'].value + '<br>';
    capturar += document.forms['formulario']['casa'].value + '<br>';
    capturar += document.forms['formulario']['apartamento'].value + '<br>';
    capturar += document.forms['formulario']['resumo-curriculo'].value + '<br>';
    capturar += document.forms['formulario']['cargo'].value + '<br>';
    capturar += document.forms['formulario']['descricao-cargo'].value + '<br>';
    capturar += document.forms['formulario']['data-inicio'].value + '<br>';

    document.getElementsByClassName('resumo-form')[0].innerHTML=capturar;
})
    
}