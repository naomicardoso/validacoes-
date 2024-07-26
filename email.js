// CODIGO DE VALIDAÇÃO DE EMAIL
//-------------------------------------------------------------------------------------------
function checarEmail(){
    if(document.forms[0].email.value == "" ||
     document.forms[0].email.value.indexOf('@') == -1||
      document.forms[0].email.value.indexOf('.') == -1 ){
        alert("porfavor, informe um e-mail valido");}else{
           // alert("EMAIL INFORMADO COM SUCESSO")
        }
      
}