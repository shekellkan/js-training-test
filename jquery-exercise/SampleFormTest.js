//myFormTest
var SampleForm = require('./SampleForm.js');
var myForm = new SampleForm();
var SampleFormTest() = function(){
	//constructor
};
 SampleFormTest.prototype.validar = function(){
	 var status = '';
	 var errorMessage = myform.messageError();
	 var errorUI = "
            Oh snap!
            This form seems to be invalid :(
          ";
	if(errorUI == errorMessage)
		status = 'passed';
	else
		status = 'failed';
	return status;
 };