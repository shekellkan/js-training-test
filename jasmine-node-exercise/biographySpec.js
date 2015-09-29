//biographySpec.js
var Biography = require('./biography.js');
describe('Biography', function(){
	var biography;
    beforeEach(function () {
        biography = new Biography();
    });
    afterEach(function () {
        biography = null;
    });
	describe('test 1', function(){
		it(' name and age null ',function(){
			expect(function () {
                biography.getBio();
            }).toThrow('Need name and age to provide a biodraphy');
		});
	});
	describe('test 2', function(){
		it(' age invalid ',function(){
			expect(function () {
                biography.getBio('Miguel','');
            }).toThrow('Invalid age.');
		});
	});
	describe('test 3', function(){
		it(' message of biography ',function(){
			var name = 'Miguel';
			var age = 25;
			var message = 'Hi, my name is Miguel, I am 25 years old and I am a nice guy';
			expect(message).toEqual(biography.getBio(name,age));
		});
	});
});