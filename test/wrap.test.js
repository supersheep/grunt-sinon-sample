var fs = require("fs");
var mocha = require("mocha");
var assert = require("chai").assert;
var sinon = require("sinon");


function wrap(path){
    var content = fs.readFileSync(path)
    return "<" + content + ">"
}


describe("test wrap",function(){
    before(function(){
        sinon.stub(fs, 'readFileSync').withArgs('a.txt').returns('(=v=)');
    });
    after(function(){
        fs.readFileSync.restore();
    });
    it("should return <(=v=)>",function(){
        assert.equal(wrap("a.txt"),"<(=v=)>");
    });
});