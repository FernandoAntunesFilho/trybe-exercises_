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
    
})
    
}