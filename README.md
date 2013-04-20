jquery-topthat
==============

sticky top on scroll

Usage
----------------------------

``` $("selector").topthat() ```

you can provide options:

``` 
$("selector").topthat({
  stickCssClass: "sticky",  // css class that will be applied o element when sticked
  prependTo: "body"         // set to null if you don't want to detach element
}) 
```

Development notes
----------------------------


lib is writtern in CoffeeScript (lib/js/jquery.topthat.coffee), to compile it and copy to respective build and test folders just run:
``` make js ```

You will need to have coffescript installed
(on Ubuntu/Debian)
``` apt-get install coffeescript ```

and UglifyJS 2 (node package)
``` npm install uglify-js -g ```


Testing
----------------------------

To install jasmine framework just run ``` bundle install ```

To run tests ``` rake jasmine ``` and got to ``` http://localhost:8888/ ``` 


Who is using it?
----------------------------

* [www.sharewise.com](http://www.en.sharewise.com/)