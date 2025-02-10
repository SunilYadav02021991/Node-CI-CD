var request = require("supertest");
var app = require("../app.js");
var mocha = require("mocha");
var describe = mocha.describe;
var it = mocha.it;

describe("GET /", function() {
 it("respond with hello world", function(done) {
 //navigate to root and check the the response is "hello world"
 request(app).get("/").expect("hello world", done);
 });
});