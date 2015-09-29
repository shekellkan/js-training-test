//SampleForm
var SampleForm = function();
//llenar nombre
SampleForm.prototype.setFullName = function(name){
	$('input:first').val(name);
};
//llenar correo
SampleForm.prototype.setFullName = function(email){
	$('input[name="email"]').val(email);
};
//seleccinar genero
SampleForm.prototype.setGender = function(gender){
	if(gender == 'M') 
		$('input#genderM').click();
	else
		$('input#genderF').click();
}
//cambiar hobby
SampleForm.prototype.setHobbies = function(){
	var size = arguments;
	for(var i = 0; i < 6 ; i++){
		if(size[i] == ){
			
		}
	}
};
//seleccionar via
SampleForm.prototype.selectVia = function(){
	
};
//llenar area
SampleForm.prototype.setArea = function(text){
	$('textarea#message').val(text);
};
//click en validar
SampleForm.prototype.validate = function(){
	$('span.btn').click();
};
//recuperar mensaje
SampleForm.prototype.message = function(){
	$('div.bs-callout-info').text();
};
//recuperar mensaje error
SampleForm.prototype.messageError = function(){
	$('div.bs-callout-warning').text();
};

module.exports = SampleForm;