const capitalizeText = require("../index.js")
const createArray = require("../index")
// var assert = require('assert');
var expect = require("chai").expect ;
var assert = require("chai").assert ;
var should = require("chai").should ;




// string return string
describe("index.js", function(capitalizeText ){
    describe("test capitalizeText" , function(capitalizeText){
        it("string return string" , function(){
            assert.equal(capitalizeText(string), string)
        })

 ////// string and return it after capitalize it
        it("string retern" , function(){
            expect(capitalizeText(string)).to.Be.equal(STRING)
        })

// takes number it will throw type error says parameter should be string
        it("takes number it will throw type error says parameter should be string" , function(){
            expect(capitalizeText(2)).to.throw('should be string');
        })

    // //test if the input iti , the returned value  will not equal to hello
    it("input iti , the reterned value will not equal to hello" , function(){
        expect(capitalizeText(iti)).not.equal(hello);   
        })

 })
})

// *****task 2*****
describe("index.js" , function(createArray){

    describe("test capitalizeText" , function(createArray){
 //test that the return value of type array
        it("return value of type array" , function(createArray){
            expect(createArray).to.be.an('array')   })
// test if we pass 3 it will return array of length 3 and test it's include 1   
          it("return value of type array" , function(createArray){
            expect([1, 2, 3]).should.include([3])
        })   

     ///make a variable and intialize it by 1 and before each test increase it by one and pass it to every function call

        it('should pass a value', function(done){
            done(null, 1);
    })  

})

})
