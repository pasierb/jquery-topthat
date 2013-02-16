describe("topthat", function () {
  var fixture;

  beforeEach(function () {
    $(".navbar").remove();
    fixture = $("<div class='navbar'>Some element to be sticky on scroll</div>");
    fixture.removeData();
    fixture.appendTo("body");
  });

  it("should maintain chainability", function () {
    var chain = fixture.topthat();
    expect(chain).toBe(fixture);
  });

  it("should attach default data", function () {
    fixture.topthat();
    expect(fixture.data('topthat')['stickCssClass']).toBe("fixed-top");
  });

  it("should override default data", function () {
    var nonDefaultStickCssClass = "getDrunk";
    fixture.topthat({ stickCssClass: nonDefaultStickCssClass});
    expect(fixture.data('topthat')['stickCssClass']).toBe(nonDefaultStickCssClass);
  });
  
  describe("stick", function () {
    it("should add css class", function () {
      fixture.topthat();
      var stickCssClass = fixture.data('topthat').stickCssClass;

      fixture.topthat("stick");
      expect(fixture.hasClass(stickCssClass)).toBeTruthy();  
    });
  });
  
  describe("unstick", function () {
    it("should remove css class", function () {
      fixture.topthat();
      var stickCssClass = fixture.data('topthat').stickCssClass;

      fixture.addClass(stickCssClass);
      expect(fixture.hasClass(stickCssClass)).toBeTruthy(); 
      fixture.topthat("unstick");
      expect(fixture.hasClass(stickCssClass)).toBeFalsy();  
    });
  });

});