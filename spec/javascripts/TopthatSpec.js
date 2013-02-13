describe("topthat", function () {
  var fixture;

  beforeEach(function () {
    $(".navbar").remove();
    fixture = $("<div class='navbar'>Some element to be sticky on scroll</div>");
    fixture.appendTo("body");
    fixture.topthat();
  });
  
  describe("stick", function () {
    it("should add default class", function () {
      fixture.topthat("stick");
      expect(fixture.hasClass("fixed-top")).toBeTruthy();  
    });
  });
  

});