describe("topthat", function () {
  var fixture;

  beforeEach(function () {
    fixture = $("<div class='navbar'>Some element to be sticky on scroll</div>");
    fixture.removeData();
    fixture.appendTo("body");
  });

  afterEach(function() {
    fixture.remove();
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
    var parent

    beforeEach(function () {
      parent = $("<div class='someparent'>Some element to be sticky on scroll</div>");
      parent.appendTo("body");
      fixture.detach().appendTo(parent);
    });

    afterEach(function() {
      parent.remove();
    });

    it("should add css class", function () {
      fixture.topthat().topthat("stick");
      var stickCssClass = fixture.data('topthat').stickCssClass;
      expect(fixture.hasClass(stickCssClass)).toBeTruthy();  
    });

    it("should trigger onStick callback", function () {
      var triggered = false;
      expect(triggered).toBeFalsy();
      fixture.topthat({ onStick: function () { triggered = true } }).topthat("stick");
      expect(triggered).toBeTruthy();
    }); 

    it("should leave element where it was", function () {
      expect(fixture.parent()[0]).toBe(parent[0]);
      fixture.topthat({ prependTo: null }).topthat("stick");
      expect(fixture.parent()[0]).toBe(parent[0]);
    });

  });
  
  describe("unstick", function () {
    var parent

    beforeEach(function () {
      parent = $("<div class='someparent'>Some element to be sticky on scroll</div>");
      parent.appendTo("body");
      fixture.detach().appendTo(parent);
    });

    afterEach(function() {
      parent.remove();
    });

    it("should remove css class", function () {
      fixture.topthat();
      var stickCssClass = fixture.data('topthat').stickCssClass;

      fixture.addClass(stickCssClass);
      expect(fixture.hasClass(stickCssClass)).toBeTruthy(); 
      fixture.topthat("unstick");
      expect(fixture.hasClass(stickCssClass)).toBeFalsy();  
    });

    it("should trigger onUnstick callback", function () {
      var triggered = false;
      expect(triggered).toBeFalsy();
      fixture.topthat({ onUnstick: function () { triggered = true } }).topthat("stick").topthat("unstick");
      expect(triggered).toBeTruthy();
    }); 

    it("should leave element where it was", function () {
      expect(fixture.parent()[0]).toBe(parent[0]);
      fixture.topthat({ prependTo: null }).topthat("stick").topthat("unstick");
      expect(fixture.parent()[0]).toBe(parent[0]);
    });
  });

});