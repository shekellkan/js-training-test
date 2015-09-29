var Biography = function(){
	
};
/**
* @param {string} name
* @param {number} age
* @param {string} The biography
*/
Biography.prototype.getBio = function(name, age){
	if(name == undefined || age == undefined){
		throw 'Need name and age to provide a biodraphy';
	}
	if(typeof(age) != 'number' || age < 0){
		throw 'Invalid age.';
	}
	return 'Hi, my name is ' + name + ', I am ' + age + ' years old and I am a nice guy';
};

module.exports = Biography;
