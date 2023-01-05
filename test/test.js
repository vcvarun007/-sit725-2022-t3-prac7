let express = require("express");
var expect = require("chai").expect;
var request = require("request");

describe("Add Two Numbers", () => {
  var url = "http://localhost:3000/addTwoNumbers/2/5";

  //it fucntions...
  //first it function...
  it("return status 200 to check if the api works", (done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  //second it function...
  it("returns statusCode key in body to check if api give right result should be 200", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.statusCode).to.equal(200);
      done();
    });
  });
});
